class paper
{
	constructor()
	{
		var options={
			isStatic:false,
            restituition:0.3,
            friction:0,
            density:1.2			
			}
			this.body=Bodies.circle(x, y, radius , options);
			this.width = width;
      this.height = height;
      this.image=loadImage("paper.png");
			World.add(world, this.body);
   
	}

    display()
	{
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER);
			image(this.image,0,0,this.width,this.height);
			
			pop()
			
	}
}