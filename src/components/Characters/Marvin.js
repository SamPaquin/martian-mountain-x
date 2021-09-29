import {Character} from "./Character";

export class Marvin extends Character {
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

    // stealCarrot(martianPositionX, martianPositionY, otherCharX, otherCharY) {
    //     if ((martianPositionX == otherCharX) && (martianPositionY == otherCharY)) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
}