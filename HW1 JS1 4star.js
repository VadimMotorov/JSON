   
        //4***:
        //Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
      const age_1 = 18
      const age_2 = 60
      const checkAge = function(age) {
   if (age && !isNaN(age)){
         if (age < age_1){
         alert("You don’t have access cause your age is " + age + ". It’s less then 18");
       } else if (age >= age_1 && age < age_2){
         alert("Welcome!!!");
       } else if (age > age_2){
         alert("Keep calm and look Culture channel");
       } else {
         alert("Technical work");
       }
    }else alert("Mistake. Input digit")
   }
    
   checkAge(prompt("what is your age?"))
   