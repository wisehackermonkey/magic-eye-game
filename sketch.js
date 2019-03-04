/*
 magic eye rendered game
 by Oran C
 oranbusiness@gmail.com
 github.com/wisehackermonkey
 20190303


 awesome library
 https://www.npmjs.com/package/magic-eye
*/
let game_board = [];

function setup() {
    createCanvas(400, 400);
    background(50);

    create_game_board(5,5);
    game_board[0][0] = 1;
    game_board[1][1] = 1;
    game_board[2][2] = 1;

    render_magic_eye(game_board);
}

function draw() {

}

//helper function to make 2d array
// with given size x and y
//http://www.stephanimoroni.com/how-to-create-a-2d-array-in-javascript/
Array.matrix = function(numrows, numcols, initial){
    var arr = [];
    for (var i = 0; i < numrows; ++i){
        var columns = [];
        for (var j = 0; j < numcols; ++j){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}
function create_game_board(width,height) {
    let board = Array.matrix(width,height,0);
    game_board = board || [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ];
}

//draws the game board to a canvas using magice eye image
function render_magic_eye(depth_map) {
    depth_map = depth_map || [
        [0, 0, 1],
        [0, 1, 0],
        [0, 0, 0]
    ];
    new MagicEye({el: "magic-eye",depthMap:depth_map, width: 500, height: 400,}).render();
}