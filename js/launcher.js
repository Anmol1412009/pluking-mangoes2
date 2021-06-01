class Launcher{
 
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.05,
            length: 11
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    
    fly()
    {
 this.launcher.bodyA=null;
 }

 attach(A)
 {
     this.launcher.bodyA=A
      
 }
 
    display(){
        if(this.launcher.bodyA){
      

        
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}














