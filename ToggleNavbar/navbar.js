const toggleBtn = document.querySelector('.nav-toggle')
// console.log(toggleBtn);
const links = document.querySelector('.links')
// console.log(links);

toggleBtn.addEventListener('click', function(){
    // console.log(links.classList.contains('show-links'));
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }

    links.classList.toggle('show-links')
})