//iife function to print sum of all number in array
( function(){
    

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
)
//immediately call iife function
();
