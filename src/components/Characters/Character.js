export class Character {
    constructor(name, positionX, positionY) {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    setName(charName) {
        this.name = charName;
    }

    getName() {
        return this.name;
    }

    setPositionX(charPositionX) {
        this.positionX = charPositionX;
    }

    getPositionX() {
        return this.positionX;
    }

    setPositionY(charPositionY) {
        this.positionY = charPositionY;
    }

    getPositionY() {
        return this.positionY;
    }
}