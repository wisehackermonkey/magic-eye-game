/*
 magic eye rendered game
 by Oran C
 oranbusiness@gmail.com
 github.com/wisehackermonkey
 20190303
*/
function setup() {
	createCanvas(400, 400);
	background(50);
	let magicEye = new MagicEye({ el: "magic-eye", width: 500, height: 400 }).render();
}

function draw() {
	
}
