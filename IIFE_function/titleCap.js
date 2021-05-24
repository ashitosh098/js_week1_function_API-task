//IIFE  function to rotate array by k times
(function (){
    //create array of string   
   var arr=["ChilBule", "AshitoSH", "GUVI"]
   //apply map method on string
   var title =arr.map((ar)=>{
   //convert all characters to lower case    
   var lower =ar.toLowerCase().split("");
   //convert first character to upper case
   var first = lower.shift().toUpperCase();
   lower.unshift(first);
   var ans =lower.join("");
   return ans;
   })
   //display result
   console.log(title);
   })
   //call IIFE function
   ();