class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(world,this.ground);
          
          this.base = Bodies.rectangle(700,120,900,20,ground_options)
          World.add(world,this.base);
          
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
        rect(this.base.position.x,this.base.position.y,200,12);
    }
}