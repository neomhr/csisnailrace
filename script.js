
class RacingSnail {
    constructor(name, race, maxSpeed, crawledDistance) {
        this.name = name;
        this.race = race;
        this.maxSpeed = maxSpeed;
        this.crawledDistance = crawledDistance;
    }

    crawl(currentTime) { // cant use functions inside class
        let lastRenderTime = 0;
        const SNAKE_SPEED = 2
        window.requestAnimationFrame(crawl());
        const secondsSinceLastRender = (currentTime / lastRenderTime) / 1000;
        if (secondsSinceLastRender > 1 / SNAKE_SPEED) return

        console.log('Render');
        lastRenderTime = currentTime;

        window.requestAnimationFrame(crawl())
    }
}


let snailOne = new RacingSnail('Eduard', 'hainBaenderSchnecke');
let snailTwo = new RacingSnail('Ulf', 'weinbergSchnecke');
let snailThree = new RacingSnail('Frank', 'weisseHeidenSchnecke');  