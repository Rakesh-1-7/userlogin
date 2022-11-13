from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from userlogin import settings
from django.core.mail import send_mail, backends
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes, force_str

from . tokens import generate_token
from django.core.mail import EmailMessage
#Create your views here.
def home(request):
    return render(request, 'authentication/index.html')

def signup(request):

    if request.method == "POST":
        # Get the post parameters
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']

        if User.objects.filter(username=username):
            messages.error(request, "Username already exists, Please try another username")
            return redirect("signin")
        if User.objects.filter(email=email):
            messages.error(request, "Email already registered")
            return redirect('signup')
        if len(username) > 10:
            messages.error(request,"Username must be under 10 characters.")
            return redirect('signup')
        
        if pass1 != pass2:
            messages.error(request,"Passwords don't match!")
            return redirect('signup')

        if not username.isalnum():
            messages.error(request,"Username must be Alpha-Numbeic.")
            return redirect('signup')


        # Check for errorneous inputs
        # Create the user
        # return redirect('home')
        myuser = User.objects.create_user(username, email, pass1)
        myuser.first_name = fname
        myuser.last_name = lname
        myuser.is_active = False
        myuser.save()
        messages.success(request, "Your account has been successfully created. We have sent you a confirmation email please confirm your email in order to activate your account.")

        #welcome Email
        subject = "Welcome to our APP - Django Login!!"
        message = "Hello" + myuser.first_name +"!!\n" + "Welcome to our app \n Thank you for registering on our website\n We have also sent you a confirmation mail, please confirm your mail address in order to activate your account. \n\n Thanking You\n Rakesh B N"
        from_email = settings.EMAIL_HOST_USER
        to_list = [myuser.email]
        send_mail(subject, message, from_email, to_list, fail_silently=True)

        #Email Confirmation
        current_site = get_current_site(request)
        email_subj = "Confirm your email for our APP - Django Login!!"
        message2 = render_to_string('email_confirmation.html',{
            'name': myuser.first_name,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
            'token': generate_token.make_token(myuser),
        })

        email = EmailMessage(
            email_subj,
            message2,
            settings.EMAIL_HOST_USER,
            [myuser.email],
        )
        email.fail_silently = True
        email.send()

        return redirect('signin')
    return render(request, 'authentication/signup.html')

def signin(request):

    if request.method == 'POST':

        username = request.POST['username']
        pass1 = request.POST['pass1']
        print(username, pass1)
        user = authenticate(username=username, password=pass1)

        if user is not None:
            login(request, user)
            fname = user.first_name
            return render(request, 'authentication/index.html', {'fname': fname})
        else:
            messages.error(request, "Invalid Credentials, Please try again")
            return redirect('signin')

    return render(request, 'authentication/signin.html')

def signout(request):
    logout(request)
    messages.success(request, "Successfully Logged Out")
    return redirect('home')

def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
        if user is not None and generate_token.check_token(user, token):
            user.is_active = True
            user.save()
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'authenticationactivation_failed.html')
