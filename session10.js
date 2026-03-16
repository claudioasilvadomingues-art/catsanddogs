let btn = document.querySelector('#load');
let gallery = document.querySelector('#gallery');

btn.addEventListener('click', () => {

  fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())
    .then(cats => {
        let i = 0;
        while (i<cats.length) {
            console.log('nombre de chats', cats.length, 'chats', cats);
            console.log(cats[i]);
            let url = cats[i].url;
            let image = document.createElement('img')
      
            image.setAttribute('src', url);
            gallery.appendChild(image)
            
            ++i
        }
    
    });
});