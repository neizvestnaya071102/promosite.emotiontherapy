const burger = document.querySelectorAll('.burger img')

for(let i = 0; i < burger.length; i++){
    burger[i].addEventListener('click', ()=>{
        for(let j = 0; j < burger.length; j++){
            burger[j].classList.add('active')
        }
    })
}