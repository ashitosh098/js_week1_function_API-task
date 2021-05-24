//iife function to remove duplicates  in an array
(function()
{
var arr =[1,2,3,1,4,5,6,3];
var ans = [];
//push first element of input array  in result  array
ans.push(arr[0]);

for (i=1;i<arr.length;i++)
{
    var flag=0;
    //compare current element of input array with every element of  input array 
    for(j=0;j<ans.length;j++)
    {
        if(arr[i]!=ans[j])
        {
            //increment flag if current element of input array is not equal to currebt element of result array
            flag=flag+1;
        }
        
        }
        //if value of flag is equal to length of result array push element in result array
        if(flag==ans.length)
        {
            ans.push(arr[i]);
        }
        
    
    
}
//display result array
console.log(ans);
}
)
//call iife function
();