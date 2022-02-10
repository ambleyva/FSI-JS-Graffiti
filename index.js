
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}
let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}
let footerText = document.querySelector('#footer')
let dogDescript = document.querySelectorAll('dog-description')
for(let i =0; i < dogDescript.length; i++){
    dogDescript[i].style.borderRadius = 'ridged'
}