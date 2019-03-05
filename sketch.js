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
let pos;
var magicEye;

function setup() {
    // createCanvas(400, 400);
    // background(50);
    frameRate(10);
    pos = createVector(0, 2);

    create_game_board(5, 5);
}

function draw() {
    if (keyIsDown(RIGHT_ARROW)) {
        pos.x += 1;
    }
    if (keyIsDown(LEFT_ARROW)) {
        pos.x -= 1;
    }
    if(keyIsDown(UP_ARROW)){
        pos.y -= 1;
    }
    if(keyIsDown(DOWN_ARROW)){
        pos.y += 1;
    }
    try {
    game_board[pos.y][pos.x] = 1;
    }catch (e) {
        console.error(` out of bounds`);
    }

    render_magic_eye(game_board);

}

//helper function to make 2d array
// with given size x and y
//http://www.stephanimoroni.com/how-to-create-a-2d-array-in-javascript/
Array.matrix = function (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
};

// transpose(matrix)
// https://stackoverflow.com/a/13241545/5460870
p5.prototype.transpose = function (a) {
    return Object.keys(a[0]).map(function (c) {
        return a.map(function (r) {
            return r[c];
        });
    });
};

function create_game_board(width, height) {
    let board = Array.matrix(width, height, 0);
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
    let colors = [[255, 0, 0, 125],
        [0, 255, 0, 255],
        [0, 0, 255, 125]];

    magicEye = new MagicEye({el: "magic-eye", depthMap: depth_map, palette: colors, width: 500, height: 400,}).render();
    // magicEye.generatePalette(4);
}