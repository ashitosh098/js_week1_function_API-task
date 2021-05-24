//iife function to print odd number in array
( 
    function()
{
    //create array with input number
    var number = [1,2,3,4,5];
    //apply array method filter on number array
    var ans =number.filter(num=>num%2!=0);
    //display result array
    console.log(ans);
    

}
)
//immediately call iife function
();
