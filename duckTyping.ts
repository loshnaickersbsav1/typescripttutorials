/**
 * the thing doesn't need to be the same as 
 */
interface Duck {
    walk:() => string;
    swim:() => string;
    quack:() => string;
}

//Object 
let probADuck = {
    walk:() => {return "walk  like a  duck"},
    swim:() => {return "swim like a duck " },
    quack:() => {return "quack like a duck "}
}

function FlyOverWater(bird:Duck) 
{ 
   console.log( bird.swim() );
}
FlyOverWater(probADuck);