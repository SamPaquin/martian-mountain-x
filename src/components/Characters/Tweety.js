import {Character} from "./Character";

export class Tweety extends Character {
    constructor(name, positionX, positionY) {
        super(name, positionX, positionY);
    }

    hasCarrot(charPositionX, charPositionY, carrotPositionX,carrotPositionY) {
        if ((charPositionX === carrotPositionX) && (charPositionY === carrotPositionY)) {
            return true;
        }
        else {
            return false
        }
    }

}