var sem3 = [
    "|Choose",
    "19MA3BSSDM|19MA3BSSDM Statistics and Discrete Mathematics",
    "19CS3ESMMC|19CS3ESMMC Microprocessors and Microcontrollers",
    "19CS3PCOOJ| 19CS3PCOOJ Object Oriented Java Programming",
    "19CS3PCDST| 19CS3PCDST Data Structures ",
    "19CS3PCCOA|19CS3PCCOA Computer Organization and Architecture ",
    "19CS3PCLOD|19CS3PCLOD Logic Design ",
    "19HS3PCEVS |19HS3PCEVS Environmental Studies",
  ];
  var sem4 = [
    "|Choose",
    "19MA4BSLIA|19MA4BSLIA Linear Algebra",
    "19CS4PCTFC|19CS4PCTFC Theoretical Foundations of Computations",
    "19CS4PCDBM|19CS4PCDBM Database Management Systems",
    "19CS4PCADA|19CS4PCADA Analysis and Design of Algorithms",
    "19CS4PCOPS|19CS4PCOPS Operating Systems ",
    "19IC3HSCPH|19IC3HSCPH Constitution of India, Professional Ethics and Human Rights",
    "20HS4ICSAK|20HS4ICSAK SAMSKRUTHIKA KANNADA",
    "20HS4ICBAK|20HS4ICBAK 20HS4ICBAK BALAKE KANNADA",
  ];
  var sem5 = [
    "|Choose",
    "20CS5PCAIP|20CS5PCAIP Artificial Intelligence",
    "20CS5PCCON|20CS5PCCON Computer Networks ",
    "20CS5PCUSP|20CS5PCUSP Unix Shell and System Programming",
    "20CS5PCSEG|20CS5PCSEG Software Engineering",
    "20CS5HSSPM|20CS5HSSPM Software Project Management and Finance",
    "20CS5PEIOT|20CS5PEIOT Internet of Things",
    "20CS5PEAJJ|20CS5PEAJJ Advanced Java and J2EE",
    "20CS5PEADS|20CS5PEADS Advanced Data Structures",
    "20CS5PEAAG|20CS5PEAAG Advanced Algorithms",
    "20CS5PESCD|20CS5PESCD System Software and Compiler Design",
    "20CS5PEACA|20CS5PEACA Advanced Computer Architecture",
  ];
  var sem6 = [
    "|Choose",
    "20CS6PCMAL|20CS6PCMAL Machine Learning ",
    "20CS6PCCNS|20CS6PCCNS Cryptography and Network Security ",
    "20CS6PCOMD|20CS6PCOMD Object Oriented Modelling and Design",
    "20CS6HSMGE|20CS6HSMGE Management and Entrepreneurship",
    "20CS6PECGV|20CS6PECGV Computer Graphics & Visualization",
    "20CS6PEBDA|20CS6PEBDA Big Data Analytics",
    "20CS6PENLP|20CS6PENLP Natural Language Processing",
    "20CS6OEJVP|20CS6OEJVP Java Programming",
    "20CS6OERPA|20CS6OERPA Robot Process Automation Design and Development ",
  ];
  var sem7 = [
    "|Choose",
    "21CS7BSBFE|21CS7BSBFE Biology for Engineers ",
    "22CS7HSCFI|22CS7HSCFI Cyber Law , Forensics and IPR",
    "21CS7PEBLC|21CS7PEBLC Blockchain",
    "21CS7PENSD|21CS7PENSD NoSQL Database",
    "21CS7PEMMC|21CS7PEMMC Multimedia Computing",
    "21CS7PEDIS|21CS7PEDIS Distributed Systems",
    "21CS7PESDP|21CS7PESDP Software Architecture and Design Patterns",
    "21CS7PECCT|21CS7PECCT Cloud Computing",
    "21CS7OEDAS|21CS7OEDAS Data Science",
    "21CS7OEPYP|21CS7OEPYP Python Programming",
  ];
  var sem8 = [
    "|Choose",
    "21CS8PCGCT|21CS8PCGCT Green Computing",
    "21CS8OECCT|21CS8OECCT Cloud Computing",
    "21CS8OEBDA|21CS8OEBDA Big Data Analytics",
  ];

  function populate1(s1, s2, s3) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
    s1.style.display = "block";
    s2.style.display = "block";
    s3.style.display = "block";
    s2.innerHTML = "";
    switch (s1.value) {
      case "1":
        optionArray = sem1;
        break;
      case "2":
        optionArray = sem2;
        break;
      case "3":
        optionArray = sem3;
        break;
      case "4":
        optionArray = sem4;
        break;
      case "5":
        optionArray = sem5;
        break;
      case "6":
        optionArray = sem6;
        break;
      case "7":
        optionArray = sem7;
        break;
      case "8":
        optionArray = sem8;
        break;
    }
    for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption);
    }
  }