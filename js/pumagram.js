const likes = document.querySelector('.like-btn');
let contadorLikes = 0;
const likeCount = document.querySelector('.actions');
console.log(likeCount);

likes.addEventListener( 'click', () => {
    console.log('Like');
    contadorLikes++;
    likeCount.appendChild(contadorLikes);
})