import IEatStrategy from "../Strategies/IEatStrategy";
import printNode from "../helper/printNode";

export default class EatsArepasBehaviour implements IEatStrategy {
  eat() {
    printNode("I 💙 Arepas");
  }
}
