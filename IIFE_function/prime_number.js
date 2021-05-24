//iife function to print prime number in array
( function (){
    //create array with input number
var number = [1,2,3,4,5,6,17,19,18,24,25,33,24,47,98,93];
//apply array method filter on number  array
var ans = number.filter((num)=>
{
  
  var flag =0;
  //if input number is 2 it is prime number
if(num==2)
{
    return num;
}
//for input number greater than 2
else if(num>2)
{
    //for number>2 and odd 
    if(num%2!=0)
    {
        //check for every number less than input number wether its divide input number or not
       for(i=num-1;i>=2;i--)
       {
           if(num%i!=0)
           {
              flag =flag+1; 
           }
       }
       //if it is not divisible by any other number it is prime
       if(flag==num-2)
       {
           return num;
       }
    }
}
}
)
//display  result
console.log(ans);
}
)
//call iife function
();