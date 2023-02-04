console.log('Hex');


const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const btn = document.getElementById('btn')
const span = document.querySelector('span')

btn.addEventListener('click', function(){
    // #F737JH
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }

    span.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomNumber (){
    return Math.floor(Math.random() * hex.length)
}