// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'waystones:warp_stone'})
})

//Add
  //Applied Enegistics 2
ServerEvents.recipes(event => {
  event.shaped('waystones:warp_stone', ['111','121','111'], {1:'minecraft:ender_pearl', 2:'travelanchors:travel_anchor'})
})