//Object 
var probADuck = {
    walk: function () { return "walk  like a  duck"; },
    swim: function () { return "swim like a duck "; },
    quack: function () { return "quack like a duck "; }
};
function FlyOverWater(bird) {
    console.log(bird.swim());
}
FlyOverWater(probADuck);
