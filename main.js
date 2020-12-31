canvas = new fabric.Canvas('myCanvas');

Player_x = 10;
Player_y = 10;

block_width = 30;
block_height = 30;

player_object = "";

var width = screen.width;
var new_width = screen.width - 70;

var new_height = screen.height - 300;

if (width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

function Player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
           top:Player_y,
           left:Player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
           top:Player_y,
           left:Player_x
        });
        canvas.add(block_object);
    });
}

function up() {
    if (Player_y >= 0) {
        Player_y = Player_y - block_height;
        console.log("Block Image Height = " + block_height);
        console.log("When up arrow key is pressed, x = " + Player_x + "Y = " + Player_y);
        canvas.remove(player_object);
        Player_update();
    }
}

function down() {
    if (Player_y <= 500) {
        Player_y = Player_y + block_height;
        console.log("Block Image Height = " + block_height);
        console.log("When down arrow key is pressed, x = " + Player_x + "Y = " + Player_y);
        canvas.remove(player_object);
        Player_update();
    }
}

function left() {
    if (Player_x > 0) {
        Player_x = Player_x - block_width;
        console.log("Block Image Width = " + block_width);
        console.log("When left arrow key is pressed, x = " + Player_x + "Y = " + Player_y);
        canvas.remove(player_object);
        Player_update();
    }
}

function right() {
    if (Player_x <= 850) {
        Player_x = Player_x + block_width;
        console.log("Block Image Width = " + block_width);
        console.log("When right arrow key is pressed, x = " + Player_x + "Y = " + Player_y);
        canvas.remove(player_object);
        Player_update();
    }
}
    
function add_block() {
    var value = document.getElementById("blocks").value;
    console.log(value);


    if (value == "Wall") {
        new_image('wall.jpg');
    }

    if (value == "Dirt") {
        new_image('ground.png');
    }

    if (value == "Light Green Grass") {
        new_image('light_green.png');
    }

    if (value == "Tree Log") {
        new_image('trunk.jpg');
    }

    if (value == "Netherrack") {
        new_image('roof.jpg');
    }

    if (value == "Yellow Wall") {
        new_image('yellow_wall.png');
    }

    if (value == "Dark Green Grass") {
        new_image('dark_green.png');
    }

    if (value == "Wool") {
        new_image('cloud.jpg');
    }
    if (value == "Glowstone") {
        new_image('unique.png');
    }
}

function increase() {
    block_width = block_width + 10;
    block_height = block_height + 10;
    document.getElementById("width").innerHTML = block_width;
    document.getElementById("height").innerHTML = block_height;
}

function decrease() {
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("width").innerHTML = block_width;
    document.getElementById("height").innerHTML = block_height;
}
