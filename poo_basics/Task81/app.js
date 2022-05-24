function ageCalculator() {  
  var userinput = document.getElementById("DOB").value;  
  var dob = new Date(userinput);  
  if(userinput==null || userinput=='') {  
    document.getElementById("message").innerHTML = "**Choose a date please!";    
    return false;   
  } else {    
  var month_diff = Date.now() - dob.getTime();    
  var age_dt = new Date(month_diff);       
  var year = age_dt.getUTCFullYear();
  var month = age_dt.getUTCMonth();
  var day = age_dt.getUTCDay();   
  var age_y = Math.abs(year - 1970);
  var age_m = month + age_y * 12;
  return document.getElementById("result").innerHTML =    
           "Age is: " + age_y + " years " + " or " + age_m + " months ";  
  }  
}  
