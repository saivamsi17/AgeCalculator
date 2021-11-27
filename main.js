function CalculateAge() {  
    var userInput = document.getElementById("DOB").value;  
    var currentDate = new Date(userInput);  
    if(userInput == null || userInput == '') {  
      document.getElementById("message").innerHTML = "Invalid!";    
      return false;   
    } else {    
    var ageDiff = Date.now() - currentDate.getTime();

    var currentAge = new Date(ageDiff);   

    var year = currentAge.getUTCFullYear();  
      
    var age = Math.abs(year - 1970);  
      
    return document.getElementById("result").innerHTML =    
             "Age is: " + age + " years. ";  
    }  
}  