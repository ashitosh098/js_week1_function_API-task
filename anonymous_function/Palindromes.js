//anonmoyus function to find palindromes
var palindromes =function()
{
    //create array
    var arr = ["121","16461","131","126","141","127"];
    //apply array method filter on arr
var ans = arr.filter((num)=>
{
    //split current element of arr
    var temp = num.split("");
    var a=[];
    //push current element of arr in reverse order
    for(var i=temp.length-1;i>=0;i--)
    {
        a.push(temp[i]);
    }
    var b = a.join("");
    //compare current element of arr and its reverse order
    if(+num==+b)
    {
        return num;
        
    }
})
//display result array
console.log(ans);
}
//call anonmoyus function
palindromes();