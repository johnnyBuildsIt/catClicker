const buttons = document.getElementsByClassName('like-button');
let count = 0;

for (button of buttons){
	let likeText = button.parentNode.childNodes[3];
	let count = 0;

	button.addEventListener('click', function(){
		count++
		likeText.innerHTML = count;
	});
}
