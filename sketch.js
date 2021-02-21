// DATABASE
var database;

// BACKGROUND
var bg;

var gameState = 0;
var playerCount;
var quiz;
var question;
var player;
var allPlayers;

function preload() {

  bg = loadImage("images/BG.jpg");

}

function setup(){

  var canvas = createCanvas(1200, 600);

  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}

function draw(){

  background(bg);

  if(playerCount === 4) {

    quiz.update(1);

  }

  if(gameState === 1) {

    clear();
    background(bg);
    quiz.play();

  }

}
