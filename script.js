const $container = document.getElementById('container')
const gallery = []

for(let i = 129409; i< 129459 ; i++) {
  gallery.push(`<p>
  <span>&#${i};</span><br>
  <code>${i}</code>
</p>`) 
}

$container.innerHTML += gallery.join('') 




//Reference:
//https://www.tutorialspoint.com/how-to-show-images-with-a-click-in-javascript-using-html
//https://www.w3schools.com/jsref/prop_style_visibility.asp
// usar for loop p/ generar emojis
// crear un array y un for of > tener mayor control + facil
