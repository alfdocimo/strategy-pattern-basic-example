import printNode from "../helper/printNode";
import IFlyStrategy from "../Strategies/IFlyStrategy";

export default class DoesNotFlyBehaviour implements IFlyStrategy {
  fly() {
    printNode("I fly as high as a jet, son.");
  }
}
