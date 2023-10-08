function FuncMenu(){
    var chk = window.document.getElementById("menu-hamburger")
    chk.checked = false
}
var index = 0;
    change();

    function change() {
        var x = document.getElementsByClassName('inicio');
        for(var i = 0; i < x.length; i++) { 
            x[i].style.display = "none"; 
        }
        index++;
        if(index > x.length) { 
            index = 1; 
        }
        x[index - 1].style.display = "block";
        setTimeout(change, 3000);
    }