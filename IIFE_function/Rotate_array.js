//iife function to rotate array by k times
 (
     function()
{
var arr =[1,2,3,1,4,5,6,3];
var k =2;
//pop last element of array and insert it in first position k  times
for (var i=0;i<k;i++)
{
    var temp = arr.pop();
    arr.unshift(temp); 
}

// display array
console.log(arr);
}
 )

//call iife function
();

