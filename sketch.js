let drawing = [];
let total = 5;
let p5bg;
let group1 = [];
let group2 = [];
let group3 = [];
let group4 = [];
let group5 = [];
let group6 = [];
let group7 = [];
let color1 = [];
let color2 = [];
let color3 = [];
let color4 = [];
let color5 = [];
let color6 = [];
let color7 = [];
let backgroundcolor = [];
let randomizeTopButton;
let randomizeBottomButton;
let randomizeTshirtButton;
let randomizePantsButton;
let randomizeHoodieButton;
let randomizeShortsButton;
let randomizeSweaterButton;
let randomizeBlueButton;
let randomizePinkButton;
let randomizePurpleButton;
let randomizeGreenButton;
let randomizeBlackButton;
let randomizeWhiteButton;
let randomizeBrownButton;
let saveButton;

function preload() {
       // does the total match the amount uploaded?
  for (let i = 0; i < total; i++) {
    // do the file extensions match those uploaded?
 group1.push(loadImage(`skirt/${i}.png`));
 group2.push(loadImage(`top/${i}.png`));
 group3.push(loadImage(`tshirt/${i}.png`));
 group4.push(loadImage(`pants/${i}.png`)); 
 group5.push(loadImage(`hoodie/${i}.png`));
 group6.push(loadImage(`shorts/${i}.png`));
 group7.push(loadImage(`sweater/${i}.png`));  
 color1.push(loadImage(`blue/${i}.png`));
 color2.push(loadImage(`pink/${i}.png`));
 color3.push(loadImage(`purple/${i}.png`));
 color4.push(loadImage(`green/${i}.png`));
 color5.push(loadImage(`black/${i}.png`));
 color6.push(loadImage(`white/${i}.png`));
 color7.push(loadImage(`brown/${i}.png`));
backgroundcolor.push(loadImage(`bgcolor/${i}.png`))
p5bg = loadImage('bgcolor/p5background.JPG');

  } 
}

function setup() {
  
  createCanvas(400, 600);
  background(p5bg)
  stroke(0); // 设置笔触颜色为黑色
  strokeWeight(2); // 设置笔触粗细为4像素
  
  // create buttons
  randomizeTopButton = createButton("Tank");  randomizeTopButton.mousePressed(randomizeTop);
  
  randomizeBottomButton = createButton("Skirt");    randomizeBottomButton.mousePressed(randomizeBottom);
  
  randomizeTshirtButton = createButton("Tshirt");   randomizeTshirtButton.mousePressed(randomizeTshirt)
  
  randomizePantsButton = createButton("Pants"); randomizePantsButton.mousePressed(randomizePants)
  
  randomizeHoodieButton = createButton("Hoodie"); randomizeHoodieButton.mousePressed(randomizeHoodie)
  
  randomizeSweaterButton = createButton("Sweater"); randomizeSweaterButton.mousePressed(randomizeSweater);
  
  randomizeShortsButton = createButton("Shorts"); randomizeShortsButton.mousePressed(randomizeShorts);

  randomizeBlueButton = createButton("Blue Top"); randomizeBlueButton.mousePressed(randomizeBlue);

  randomizePinkButton = createButton("Pink Top"); randomizePinkButton.mousePressed(randomizePink);

  randomizePurpleButton = createButton("Purple Top"); randomizePurpleButton.mousePressed(randomizePurple);

  randomizeGreenButton = createButton("Green Top"); randomizeGreenButton.mousePressed(randomizeGreen);

  randomizeBlackButton = createButton("Black Bottom"); randomizeBlackButton.mousePressed(randomizeBlack);

  randomizeWhiteButton = createButton("White Bottom"); randomizeWhiteButton.mousePressed(randomizeWhite);

  randomizeBrownButton = createButton("Brown Bottom"); randomizeBrownButton.mousePressed(randomizeBrown);
  
  saveButton = createButton("Save");
  saveButton.mousePressed(savePic);
  
  randomizeTopButton.id("button1");
  randomizeBottomButton.id("button2");
  randomizeTshirtButton.id("button3");
  randomizePantsButton.id("button4");
  randomizeHoodieButton.id("button5")
  randomizeSweaterButton.id("button6")
  randomizeShortsButton.id("button7")
  saveButton.id("button8");
  randomizeBlueButton.id("buttonBlue");
  randomizePinkButton.id("buttonPink");
  randomizePurpleButton.id("buttonPurple");
  randomizeGreenButton.id("buttonGreen");
  randomizeBlackButton.id("buttonBlack");
  randomizeWhiteButton.id("buttonWhite");
  randomizeBrownButton.id("buttonBrown");

}

function draw() {

}

function mousePressed() {
  drawing = []; // 当鼠标按下时，创建一个新的空数组来存储绘制内容
}

function mouseDragged() {
  let point = {
    x: mouseX,
    y: mouseY
  }; // 创建一个包含鼠标坐标的点对象
  drawing.push(point); // 将该点对象添加到数组中
  drawPoints(drawing); // 重新绘制所有点
}

function drawPoints(points) {
  for (let i = 1; i < points.length; i++) {
    line(points[i].x, points[i].y, points[i - 1].x, points[i - 1].y);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    background(p5bg); // 当按下回车键时，清空绘制数组
  }
}
//在上面的代码中，我们在按下鼠标时创建一个新的空数组来存储所有绘制内容。在拖动鼠标时，我们将鼠标的坐标存储为一个点对象，并将该对象添加到数组中。我们还编写了一个名为 drawPoints() 的辅助函数来重新绘制所有点。最后，在按下回车键时，我们将绘制数组重置为空数组。








//tank
function randomizeTop() {
  let shuffled = shuffle(group2);
  let top = shuffled[0];
  let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))]; // 随机选择一个背景图片
  image(bgImage, 0, 0, width, height/2);
 // rect(0, 0, width, height/2); // 在上半部分画一个填充了随机颜色的矩形
  image(top, 0, 0, width, height);
}

//skirt
function randomizeBottom() {
  let shuffled = shuffle(group1);
  let bottom = shuffled[0];
  // get the pixels on the bottom half of that image
    let bottomHalf = bottom.get(0, bottom.height/2, bottom.width, bottom.height);
  let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))];
  image(bgImage, 0, height/2, width, height/2);
  //fill(randomYellowColor);
  //noStroke();
  //rect(0, height/2, width, height/2);
  // draw those pixels on the canvas
  image(bottomHalf, 0, 300, width, height);
}

//Tshirt
function randomizeTshirt(){
   let shuffled = shuffle(group3);
  let top = shuffled[0];
    let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))]; 
  image(bgImage, 0, 0, width, height/2);
  image(top, 0, 0, width, height);
}


//hoodie
function randomizeHoodie(){
   let shuffled = shuffle(group5);
  let top = shuffled[0];
    let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))]; 
  image(bgImage, 0, 0, width, height/2);
  image(top, 0, 0, width, height);
}
//sweater
function randomizeSweater(){
   let shuffled = shuffle(group7);
  let top = shuffled[0];
    let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))]; 
  image(bgImage, 0, 0, width, height/2);
  image(top, 0, 0, width, height);
}
//pants
function randomizePants() {
  let shuffled = shuffle(group4);
  let bottom = shuffled[0];
  let bottomHalf = bottom.get(0, bottom.height/2, bottom.width, bottom.height);
  // get the pixels on the bottom half of that image
    let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))];
  image(bgImage, 0, height/2, width, height/2);
  // draw those pixels on the canvas
  image(bottomHalf, 0, 300, width, height);
}
//shorts
function randomizeShorts() {
  let shuffled = shuffle(group6);
  let bottom = shuffled[0];
  let bottomHalf = bottom.get(0, bottom.height/2, bottom.width, bottom.height);
  // get the pixels on the bottom half of that image
    let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))];
  image(bgImage, 0, height/2, width, height/2);
  // draw those pixels on the canvas
  image(bottomHalf, 0, 300, width, height);
}

//blue
function randomizeBlue() {
  let shuffled = shuffle(color1);
  let top = shuffled[0];
  let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))]; // 随机选择一个背景图片
  image(bgImage, 0, 0, width, height/2);
 // rect(0, 0, width, height/2); // 在上半部分画一个填充了随机颜色的矩形
  image(top, 0, 0, width, height);
}

function randomizePink() {
  let shuffled = shuffle(color2);
  let top = shuffled[0];
  let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))]; // 随机选择一个背景图片
  image(bgImage, 0, 0, width, height/2);
 // rect(0, 0, width, height/2); // 在上半部分画一个填充了随机颜色的矩形
  image(top, 0, 0, width, height);
}

function randomizePurple() {
  let shuffled = shuffle(color3);
  let top = shuffled[0];
  let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))]; // 随机选择一个背景图片
  image(bgImage, 0, 0, width, height/2);
 // rect(0, 0, width, height/2); // 在上半部分画一个填充了随机颜色的矩形
  image(top, 0, 0, width, height);
}

function randomizeGreen() {
  let shuffled = shuffle(color4);
  let top = shuffled[0];
  let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))]; // 随机选择一个背景图片
  image(bgImage, 0, 0, width, height/2);
 // rect(0, 0, width, height/2); // 在上半部分画一个填充了随机颜色的矩形
  image(top, 0, 0, width, height);
}

function randomizeBlack() {
  let shuffled = shuffle(color5);
  let bottom = shuffled[0];
  let bottomHalf = bottom.get(0, bottom.height/2, bottom.width, bottom.height);
  // get the pixels on the bottom half of that image
    let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))];
  image(bgImage, 0, height/2, width, height/2);
  // draw those pixels on the canvas
  image(bottomHalf, 0, 300, width, height);
}

function randomizeWhite() {
  let shuffled = shuffle(color6);
  let bottom = shuffled[0];
  let bottomHalf = bottom.get(0, bottom.height/2, bottom.width, bottom.height);
  // get the pixels on the bottom half of that image
    let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))];
  image(bgImage, 0, height/2, width, height/2);
  // draw those pixels on the canvas
  image(bottomHalf, 0, 300, width, height);
}

function randomizeBrown() {
  let shuffled = shuffle(color7);
  let bottom = shuffled[0];
  let bottomHalf = bottom.get(0, bottom.height/2, bottom.width, bottom.height);
  // get the pixels on the bottom half of that image
    let bgImage = backgroundcolor[Math.floor(random(0, backgroundcolor.length))];
  image(bgImage, 0, height/2, width, height/2);
  // draw those pixels on the canvas
  image(bottomHalf, 0, 300, width, height);
}


function savePic() {
  saveCanvas();
}
