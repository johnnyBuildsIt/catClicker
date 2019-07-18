cats = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

function Cat(name) {
	this.img = `img/${name}.jpeg`;
	this.counter = 0;
}

const container = document.querySelector('#container');
const clickerFragment = document.createDocumentFragment();

for (cat of cats) {
	const catDiv = document.createElement('div');
	catDiv.classList.add('cat-complete');

	const catImg = document.createElement('img');
	catImg.src = `img/${cat}.jpeg`;
	catDiv.appendChild(catImg);

	const buttonDiv = document.createElement('div');
	buttonDiv.classList.add('holder');

	const button = document.createElement('button');
	button.classList.add('like-button');
	button.innerHTML = 'Likes!'

	const likeSpan = document.createElement('span')
	likeSpan.classList.add('likes');
	likeSpan.innerHTML = 0;

	button.addEventListener('click', (function(span){
		let count = 0;
		return function(){
			count++
			span.innerHTML = count;
		}
	})(likeSpan))

	buttonDiv.appendChild(button);
	buttonDiv.appendChild(likeSpan);

	catDiv.appendChild(buttonDiv);
	clickerFragment.appendChild(catDiv);
}

container.appendChild(clickerFragment);

