
document.querySelector('.date').addEventListener("blur",function(){
    if(this.value !==""){
        document.querySelector(".timeerror").textContent="" 
    }
});    
document.querySelector('.hour').addEventListener("blur",function(){
    if(profile.hour.options.value!=="Time"){
        document.querySelector(".hourerror").textContent=''
    }
});
document.querySelector('.nperson').addEventListener("blur",function(){
    if(profile.nperson.options.value!=="Party Size"){
        document.querySelector(".personerror").textContent=''
    }
});
document.profile.addEventListener("submit",validateProfile)
