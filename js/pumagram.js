const btnlikes = document.querySelector('.like-btn');
let contadorLikes = 0;
const likeCount = document.querySelector(".like-count");
// const likeCount = document.querySelector('.actions');
// console.log(likeCount);

if(contadorLikes==0){
    btnlikes.addEventListener("click", function() {
        if(contadorLikes==0){
        contadorLikes++;
        likeCount.textContent = contadorLikes;
        btnlikes.textContent = "No me gusta";
        localStorage.setItem("likes", contadorLikes);
        }
      });
}else{
    btnlikes.addEventListener("click", function() {
        if(contadorLikes==1){
        contadorLikes--;
        likeCount.textContent = contadorLikes;
        btnlikes.textContent = "Me gusta";
        localStorage.setItem("likes", contadorLikes);
        }
      });
}

// solo logré hacer ésto  :(