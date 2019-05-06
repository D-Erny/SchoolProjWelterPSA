var starbeams = [];
var left;
var right;
var main
var star = 25
function setup() {
  main = createCanvas(824,612);
  left = createGraphics(412,412)
  right = createGraphics(412,412)
  angleMode(DEGREES)
  left.angleMode(DEGREES)
  right.angleMode(DEGREES)
  for(var i = 0; i < star; i++){
    starbeams[i] = new particle([random(-125,125),random(-125,125)],[1,1],0,[left.width,left.height],[255,255,25,255])
  }
}
var poly = []
function draw() {
    var tranX = left.width*5/8
    var tranY = left.height-left.height/15
    left.background(10,25,175);
    right.background(125,125,125)
    left.fill(255,255,25);
    left.ellipse(0,0,250,250) //sun
    left.push()
      left.fill(0,255,0)
      left.rect(0,left.height-left.height/10,left.width,left.height/10)
    left.pop()
    left.push()
    left.fill(125,125,125)
    left.translate(tranX,tranY)
    left.rotate(180)
    left.rect(0,0,-25,50)
    left.translate(0,50)
    left.rotate(180+atan2(-tranY,-tranX))
    left.rect(0,-50,-10,250)
    left.pop()

    for(var i = 0; i < star; i++){
      if(starbeams[i].checkOutBounds()){
        starbeams[i] = new particle([random(-125,125),random(-125,125)],[1,1],0,[left.width,left.height],[255,255,25,255])
      }
      if(atan2(starbeams[i].y-(tranY-50),starbeams[i].x-tranX)>(-45+10)&&175>atan2(starbeams[i].y-(tranY-50),starbeams[i].x-tranX)){
          starbeams[i] = new particle([random(-125,125),random(-125,125)],[1,1],0,[left.width,left.height],[255,255,25,255])
      }
        starbeams[i].setVel([random(5,10),random(5,10)])
        starbeams[i].move()
        starbeams[i].show(left)
    }
    right.push()
    right.translate(-25,right.height-25)
    right.fill(50,125,50)
    right.rect(0,0,right.width+50,50)
    right.fill(50,50,50)
    right.translate(right.width/4+25,-100)
    right.rect(0,0,right.width/2,100)
    right.triangle() //here
    right.pop()
    right.push()
    right.translate(right.width*3/4-30,right.height-250)
    right.fill(50,50,50)
    right.rect(0,0,25,125)
    right.translate(-right.width*1/5,0)
    right.fill(50,50,50)
    right.rect(0,0,25,125)


    right.pop()














    main.line(main.width/2,0,main.width/2,main.height-(main.height-right.height)/2)
    main.textAlign(CENTER,CENTER)
    main.textSize(24)
    main.text("Solar Panels",left.width/2,(main.height-right.height)/4)
    main.text("Fossil Fuels",right.width/2+main.width/2+1,(main.height-right.height)/4)
    main.text("Which one will be safer for your kids to breathe?",main.width/2,main.height-(main.height-right.height)/4)

    image(left,0,(main.height-left.height)/2,left.width-1,left.height)
    image(right,main.width/2+1,(main.height-right.height)/2,right.width,right.height)

}
