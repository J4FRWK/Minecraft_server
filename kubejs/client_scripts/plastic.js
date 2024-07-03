// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

ItemEvents.tooltip(event => {
    event.addAdvanced(['pneumaticcraft:plastic_bucket'], (item, advanced, text) => {
            text.add(1, [
                Text.of('DONT PLACE IN WORLD OR FLUID PLACER AS IT MIGHT CRASH YOUR GAME').darkRed()
            ])
    })
})
