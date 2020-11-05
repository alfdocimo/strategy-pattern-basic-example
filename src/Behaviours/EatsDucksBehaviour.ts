import printNode from "../helper/printNode";
import IEatStrategy from "../Strategies/IEatStrategy";

export default class EatsArepasBehaviour implements IEatStrategy {
  eat() {
    printNode("I eat other ducks for breakfast");
  }
}
