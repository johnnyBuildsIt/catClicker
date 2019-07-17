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
	catImg.src = 'img/c1.jpeg';
	catDiv.appendChild(catImg);
	const buttonDiv = document.createElement('div');
	buttonDiv.classList.add('holder');
	catDiv.appendChild(buttonDiv);
	clickerFragment.appendChild(catDiv);
}



container.appendChild(clickerFragment);

