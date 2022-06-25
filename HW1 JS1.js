
function checkAge(age) {
    if (age >= 18 && age < 60) {
    console.log("Welcome!!!")
    }else if (age>=60){
    console.log("Keep calm and look Culture channel")
    }else {
    console.log("You don’t have access cause your age is " + age + ". It’s less then 18");
    }
  }


  checkAge(17), 
  checkAge(60),
  checkAge(61);
  