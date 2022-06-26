//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования

//Вывести в консоль результат работы функции с возрастами 17, 18, 61

function checkAge(age) {
  if (age >= 18 && age < 60) {
  console.log("Welcome!!!");
  }else if (age>=60){
   console.log("Keep calm and look Culture channel");
  }else {
   console.log("You don’t have access cause your age is " + age + ". It’s less then 18");
   }
  }
  checkAge(17);
  checkAge(18);
  checkAge(61);
  
  //2*:
  //Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
  
  
  function checkAge(age) {
    if (typeof(age) !== "number"){
    console.log ("Mistake. Input digit");
    } else if (age >= 18 && age < 60) {
    console.log("Welcome!!!");
     }else if (age>=60){
     console.log("Keep calm and look Culture channel");
      }else {
     console.log("You don’t have access cause your age is " + age + ". It’s less then 18");
      }
    }
  
    checkAge("fg");
    checkAge(17);
    checkAge(18);
    checkAge(61);
    
    //3**:
    //Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
    
    //4***:
    //Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
    function checkAge(age) {
      if (typeof(age) !== "number"){
      console.log ("Mistake. Input digit");
      } else if (age >= 18 && age < 60) {
      console.log("Welcome!!!");
       }else if (age>=60){
       console.log("Keep calm and look Culture channel");
        }else {
       console.log("You don’t have access cause your age is " + age + ". It’s less then 18");
        }
      }
    
      checkAge(prompt("what is your age?"))
      // ReferenceError: prompt is not defined
  
  
