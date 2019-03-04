/*
 magic eye rendered game
 by Oran C
 oranbusiness@gmail.com
 github.com/wisehackermonkey
 20190303
*/
let game_board = [];

function setup() {
    createCanvas(400, 400);
    background(50);
    game_board = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ];

    render_magic_eye(game_board);
}

function draw() {

}

//draws the game board to a canvas using magice eye image
function render_magic_eye(depth_map) {
    depth_map = depth_map || [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ];
    new MagicEye({el: "magic-eye",depthMap:depth_map, width: 500, height: 400,}).render();
}