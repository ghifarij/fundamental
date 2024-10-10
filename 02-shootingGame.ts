class Player {
    name = ""
    health = 0
    power = 0

    constructor(name : string, health : number, power : number) {
        this.name = name
        this.health = health
        this.power = power
    }
}

class ShootingGame extends Player{
    constructor(name: string, health: number, power: number) {
        super(name, health, power)
    }

    getRandomItem() {
        
    }
}

const player1 = new Player("wolverine", 100, 10)
const player2 = new Player("deadpool", 100, 10)

console.log()