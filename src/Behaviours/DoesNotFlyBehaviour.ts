import printNode from "../helper/printNode";
import IFlyStrategy from "../Strategies/IFlyStrategy";

export default class DoesNotFlyBehaviour implements IFlyStrategy {
  fly() {
    printNode("Sorry, I never learned to fly");
  }
}
