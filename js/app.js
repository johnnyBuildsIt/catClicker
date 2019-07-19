cats = [
				{name: 'c1', clicks: 0},
				{name: 'c2', clicks: 0},
				{name: 'c3', clicks: 0},
				{name: 'c4', clicks: 0},
				{name: 'c5', clicks: 0},
				{name: 'c6', clicks: 0}
				];

const ul = document.getElementsByTagName('ul')[0];
const button = document.querySelector('#like-button');
const likeText = document.querySelector('#likes');

let currCat;

for(cat of cats) {
	const li = document.createElement('li');
	li.innerHTML = cat.name;
	li.addEventListener('click', (function(catCopy){
		return function(){
			const catName = document.getElementById('cat-name');
			const imgTag = document.getElementsByTagName('img')[0];
			const likeText = document.querySelector('#likes');

			currCat = catCopy
			catName.innerHTML = catCopy.name;
			imgTag.src = `img/${catCopy.name}.jpeg`;
			likeText.innerHTML = currCat.clicks;
		}
	})(cat));

	ul.appendChild(li);
}

button.addEventListener('click', function(){
				currCat.clicks++
				likeText.innerHTML = currCat.clicks;
			})
