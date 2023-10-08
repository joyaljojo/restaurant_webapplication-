function validateProfile(e){
    e.preventDefault();
var tod1 = new Date();
i=0
var today= tod1.getFullYear() + '-' + (tod1.getMonth()+1);
console.log(today)
console.log(profile.date.value)
if(profile.date.value <= today){
    document.querySelector(".timeerror").textContent="Please enter the appopriate date" 
}
else{
    document.querySelector(".timeerror").textContent=" "
    i=i+1
}
if(profile.hour.value==="Time"){
    document.querySelector(".hourerror").textContent='please select the time'
}
else{
    document.querySelector(".hourerror").textContent=''
    i=i+1
}
if(profile.nperson.value==="Party Size"){
    document.querySelector(".personerror").textContent='Please select the number of person'
}
else{
    document.querySelector(".personerror").textContent=''
    i=i+1
}
console.log(i)
if(i==3){
    alert("Reservation has been succesfully made for "+ profile.nperson.value +" people.On "+ profile.date.value + " at "+profile.hour.value )
    return true
    
}}
