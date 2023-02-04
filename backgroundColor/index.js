// console.log('Color');

const colors = ['crimson','lime','navy','teal','gray','maroon','red','	black', 'green', 'yellow', 'blue']

const btn = document.getElementById('btn')
const span = document.querySelector('.span')

// console.log(btn);
// console.log(span);


btn.addEventListener('click',function (){
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    span.innerHTML = colors[randomNumber]
})

function getRandomNumber(){
   return Math.floor(Math.random() * colors.length)
}

