class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})

		this.image=loadImage("dustbingreen.png");
		
	
		
		World.add(world, this.rightWallBody);

	}
	display()
	{
			
		
			var posRight=this.rightWallBody.position;

			

			

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			imageMode(CENTER);
			image(this.image,0,0,this.width,this.height);
			this.image.scale=0.02
			pop()

			
			
	}

}