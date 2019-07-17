const buttons = document.getElementsByClassName('like-button');
const likeText = document.querySelector('#likes');
let count = 0;

//button.addEventListener('click', likeFunction);

function likeFunction(){
	count++
	likeText.innerHTML = count;
}