//lat lang value as a input
var lat=54;
var lng =-1;
//create a object of  XMLHttprequest
var request = new XMLHttpRequest()
var url ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=e4239a13ec2249d41db473766d8cd69d';
//initialize newly created request
request.open('GET',url,true);
//send request to server
request.send();
//execute callback function after transaction is complete 
request.onload  = function()
{
    var data =JSON.parse(this.response);
    console.log("WEATHER REPORT  of given latitude and longitude : "+data.weather[0].description);
  
    
}