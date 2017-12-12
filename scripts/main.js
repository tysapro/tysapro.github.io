//var v_heading = document.querySelector('h1');
//v_heading.textContent = 'Hello world!';

var my_image = document.querySelector('img');

my_image.onclick = function() {
    var my_src = my_image.getAttribute('src');
    if(my_src === 'images/flowers1.jpg') {
      my_image.setAttribute ('src','images/flowers2.jpg');
    } else {
      my_image.setAttribute ('src','images/flowers1.jpg');
    }
}

var btn = document.querySelector('button');
var v_heading = document.querySelector('h1');

function setUserName() {
    var etr_name=prompt('Please, enter your name:');
    localStorage.setItem('guest_name',etr_name);
    v_heading.innerHTML = 'Hello world, '
+etr_name+'!';
}

if(!localStorage.getItem('guest_name')){
    setUserName();
} else {
    var v_h1 = localStorage.getItem('guest_name'); 
    v_heading.innerHTML = 'Hello world, '
+v_h1+'!';
}

btn.onclick = function() {
    setUserName();
}