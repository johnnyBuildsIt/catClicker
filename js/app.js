cats = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

const button = document.querySelector('#like-button');
const likeText = document.querySelector('#likes');
let count = 0;

const ul = document.getElementsByTagName('ul')[0];

for(cat of cats) {
	const li = document.createElement('li');
	li.innerHTML = cat;
	ul.appendChild(li);
}

button.addEventListener('click', likeFunction);

function likeFunction(){
	count++
	likeText.innerHTML = count;
}