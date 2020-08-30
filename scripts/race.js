
//Game-Loop

import { SNAIL_SPEED, update as updateSnailPosition } from './snail.js'

let lastRenderTime = 0


function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAIL_SPEED) return


    lastRenderTime = currentTime

    update()
}

// window.requestAnimationFrame(main)

function update() {
    updateSnailPosition()
}

