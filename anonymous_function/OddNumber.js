//anonymous function to print odd number in array

  var odd =   function()
{
    //create array with input number
    var number = [1,2,3,4,5];
    //apply array method filter on number array
    var ans =number.filter((num)=>{
     return num%2!=0
    }
    );
    //display result array
    console.log(ans);
    

}

// call anonymous  function using variable name assigned to it
odd ();
