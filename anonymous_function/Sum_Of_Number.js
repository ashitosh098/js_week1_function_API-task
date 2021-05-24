//anonymous function to print sum of all  number in array

var sum =   function()
{
    //create array with input number
    var number = [1,2,3,4,5];
    //apply array method reduce on number array
    var ans =number.reduce((sum,current)=>{
     return sum+current;
    }
    );
    //display result
    console.log(ans);
    

}

// call anonymous  function using variable name assigned to it
sum ();
