const parents = document.querySelectorAll('.window')
const children = document.querySelectorAll('.window__hoverbox')

for(let i = 0; i < parents.length; i++){
    parents[i].addEventListener('mouseover', ()=>{
        children[i].classList.add('active')
    })
    parents[i].addEventListener('mouseout', ()=>{
        children[i].classList.remove('active')
    })
}