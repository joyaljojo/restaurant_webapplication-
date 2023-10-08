link ="https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=8ecf3ee16b1138a5e3e63f378a08954a";
var request = new XMLHttpRequest();
request.open('GET',link);
request.responseType = 'text';
request.send();

request.onreadystatechange= function(){
    if(request.readyState===XMLHttpRequest.DONE){
    if(request.status===200){
    const testContent = request.response
    var obj = JSON.parse(testContent);
    console.log(obj);
}
else 
{
console.log("sorry")
}
}
else{
console.log("connection error")
}
document.querySelector(".location").textContent="Location:"+obj["name"]
document.querySelector(".temperature").textContent="Temperature:"+obj["main"].temp
}