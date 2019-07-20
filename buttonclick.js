function Buttonclicker() { //function 
    var li= document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("write something!");
    } 
    else {
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("myInput").appendChild.value = "";
    
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);