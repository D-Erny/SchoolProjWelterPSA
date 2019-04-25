class particle{
	constructor(positionArr,velArr,wrapAround,sizeArr,colorArr){
		this.x = positionArr[0]
		this.y = positionArr[1]
		this.vx = velArr[0]
		this.vy = velArr[1]
		this.cvx = 0
		this.cvy = 0
		this.max = sizeArr[0]
		this.may = sizeArr[1]
		this.xi = 0
		this.yi = 0
		this.red = colorArr[0]
		this.green = colorArr[1]
		this.blue = colorArr[2]
		this.alpha = colorArr[3]
		if(wrapAround == 1){
			this.wrap = true
		}
		else{
			this.wrap = false
		}
	}
	setVel(velArr){
		this.cvx = velArr[0]
		this.cvy = velArr[1]
	}
	velUp(randomArr){
		this.rx = randomArr[0]
		this.ry = randomArr[1]
		this.cvx = 5*map(noise(this.rx*this.vx*5,1*this.vx),0,1,-4,4)
		this.xi = random(-1,1)
		this.cvy = 5*map(noise(this.ry*this.vy*5,1*this.vy),0,1,-4,4)
		this.yi = random(-1,1)
	}
	move(){
		if(this.wrap){
			if((this.x + this.cvx)<=0){
				this.x = this.max - (this.x+this.cvx)
			}
			else if((this.x + this.cvx) >= this.max){
				this.x = this.cvx
			}
			if((this.y + this.cvy) <= 0){
				this.y = this.may - (this.y+this.cvy)
			}
			else if((this.y + this.cvy) >= this.may){
				this.y = this.cvy
			}
		}
		this.x = (this.x + this.cvx)
		this.y = (this.y + this.cvy)
	}
	show(){
		push()
		translate(this.x,this.y)
		this.sclx = 9
		this.scly = 9
		scale(this.sclx,this.scly)
		fill(this.red,this.green,this.blue,this.alpha)
		noStroke()
		ellipse(0,0,1,1)
		pop()
	}
}
