let search = document.querySelector('#search')
let images = document.querySelectorAll('.image')

search.oninput = () => {
    images.forEach(hide => hide.style.display = 'none')
    let value = search.value

    images.forEach(filter => {
        let title = filter.getAttribute('data-title')

        if(title === value){
           filter.style.display = 'block'     
        }

        if(value === ''){
           filter.style.display = 'block'     
        }
    })

}