cats = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

function Cat(name) {
	this.img = `img/${name}.jpeg`;
	this.counter = 0;
}

const container = document.querySelector('#container');

const clickerFragment = document.createDocumentFragment();
const catDiv = document.createElement('div');
catDiv.classList.add('cat-complete');
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('holder');

catDiv.appendChild(buttonDiv);

clickerFragment.appendChild(catDiv);

container.appendChild(clickerFragment);