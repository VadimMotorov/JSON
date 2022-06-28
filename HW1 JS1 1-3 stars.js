
//26. Создать переменную “age_1” и присвоить ей значение 10
//27. Создать переменную “age_2” и присвоить ей значение 18
//28. Создать переменную “age_3” и присвоить ей значение 60
//29. Создать if в котором будите проверять значение переменной age_1
//30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//33. Иначе выводите “Technical work”.

//let age_1 = 5 
//let age_2 = 18
//let age_3 = 60
//let compare = age_1<age_2
//if (compare){
//console.log("You don’t have access cause your age is " + age_1 + ". It’s less then " + age_2 )
//} else if (compare = age_1>=age_2, age_1<age_3){
//console.log("Welcome!!!")
//} else if (compare = age_1>=age_3){
//console.log("Keep calm and look Culture channel") 
//} else {
//    console.log("Technical work")

//1*:
console.log("-*-")
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
  console.log("-**-")
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
    checkAge(0);
    checkAge("20");
    
    ///3**:
    console.log("-***-")
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
const age_1 = 18
const age_2 = 60
const checkAge3 = function(age) {
 console.log(age)
 if (age && !isNaN(age)){
     if (age < age_1){
    console.log("You don’t have access cause your age is " + age + ". It’s less then 18");
   } else if (age >= age_1 && age < age_2){
   console.log("Welcome!!!");
   } else if (age >= age_2){
   console.log("Keep calm and look Culture channel");
   } else {
    console.log("Technical work");
   }
}else {console.log("Mistake. Input digit")
}
}
  checkAge3("fgfff");
  checkAge3(17);
  checkAge3(18);
  checkAge3(61);
  checkAge3(0);
  checkAge3("76");
  checkAge3("")
  
