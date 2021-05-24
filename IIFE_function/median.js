//create iife function to find median
( function(){
    //create two sorted array
    var arr1=[1,3,5,7,9];
    var arr2 = [2,4,6,8,10];
    var median =0.0;
    var ab =0;
    
    //push all element of second array in first array
    for (var i=0;i<arr2.length;i++)
    {
        arr1.push(arr2[i]);
    }
    //sort first array
    arr1.sort(function (a,b)
    {
        return a-b;
    })
    var n = arr1.length;
    //if array length  is odd median will be middle element
    if(n%2!==0)
    {
       ab =(n/2)-0.5;
       median = arr1[ab];
       
    }
    //if array length is even median will be average of two middle element
    else
    {
        ab = n/2;
        var median1 = arr1[ab-1];
        var median2 = arr1[ab];
        median = (median1+median2)/2;
    }
    //display median
    console.log(median);
    }
)
    //call iife function
    ();