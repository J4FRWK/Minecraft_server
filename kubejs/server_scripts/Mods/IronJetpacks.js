// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
 event.remove({output: 'ironjetpacks:strap'})
})

ServerEvents.recipes(event => {
  event.shaped('ironjetpacks:strap', 
  [' 1 ','232',' 1 '], {
    1: '#forge:ingots/iron', 
    2: 'minecraft:leather',
    3: 'minecraft:elytra'})
})
