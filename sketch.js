var starbeams = [];
function setup() {
  createCanvas(512,512);
  for(var i = 0; i < 25; i++){
    starbeams[i] = new particle([random(-25,25),random(-25,25)],[random(1,2),random(1,2)],1,[width,height],[255,255,25,255])
  }
}

function draw() {
    background(10,25,175);
    fill(255,255,25);
    for(var i = 0; i < 25; i++){
        starbeams[i].move()
        starbeams[i].show()
    }
    
}
