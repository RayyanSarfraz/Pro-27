class Rope extends BaseClass {
    constructor(body1,body2,offsetX,offsetY) {
      super(body1,body2,offsetX, offsetY,0);

      this.offsetX=offsetX
      this.offsetY=offsetY
      var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:offsetX, y:offsetY}
      }

      this.rope=Constrain.create(options);
      World.add(world,this.rope);
    }
    
  };
  