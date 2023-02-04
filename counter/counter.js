// console.log('Counter');

let count = 0

const value = document.querySelector('#value')

// console.log(value);

const btns = document.querySelectorAll('.btn')

// console.log(btn);

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList
        // console.log(styles);
        if (styles.contains('increase')) {
            count++
        } else if(styles.contains('decrease')){
            count--
        } else {
            count = 0
        }
        if(count > 0){
            value.style.color = 'green'
        } else if(count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'black'
        }
        value.textContent = count
    })
})