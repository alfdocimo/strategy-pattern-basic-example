import EatsArepasBehaviour from "./Behaviours/EatsArepasBehaviour";
import DoesNotFlyBehaviour from "./Behaviours/DoesNotFlyBehaviour";
import EatsDucksBehaviour from "./Behaviours/EatsDucksBehaviour";
import JetFlyBehaviour from "./Behaviours/JetFlyBehaviour";

import Duck from "./Classes/Duck";

const eatBehaviour = new EatsArepasBehaviour();
const flyBehaviour = new DoesNotFlyBehaviour();
const eatsDucksBehaviour = new EatsDucksBehaviour();
const jetFlyBehaviour = new JetFlyBehaviour();

const caraquenianDuck = new Duck("Carlos", eatBehaviour, flyBehaviour);

caraquenianDuck.quack();
caraquenianDuck.eat();
caraquenianDuck.fly();

const thugDuck = new Duck("Jefferson", eatsDucksBehaviour, jetFlyBehaviour);

thugDuck.quack();
thugDuck.eat();
thugDuck.fly();
