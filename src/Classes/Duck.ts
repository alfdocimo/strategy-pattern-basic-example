import printNode from "../helper/printNode";
import IEatStrategy from "../Strategies/IEatStrategy";
import IFlyStrategy from "../Strategies/IFlyStrategy";

export default class Duck {
  private eatStrategy: IEatStrategy;
  private flyStrategy: IFlyStrategy;
  private name: String;

  constructor(
    name: String,
    eatStrategy: IEatStrategy,
    flyStrategy: IFlyStrategy
  ) {
    this.eatStrategy = eatStrategy;
    this.flyStrategy = flyStrategy;
    this.name = name;
  }

  eat() {
    this.eatStrategy.eat();
  }

  fly() {
    this.flyStrategy.fly();
  }

  quack() {
    printNode(`Quack! I am ${this.name}`);
  }
}
