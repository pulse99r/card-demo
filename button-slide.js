
const container = document.querySelector('.container')


container.addEventListener('mouseover',(e)=>{
  e.preventDefault()
  let slideDir = e.target.getAttribute('class') === 'sign-up' ?  'slide-left' : 'slide-right' 
  container.children[0].setAttribute('class', slideDir)
})

