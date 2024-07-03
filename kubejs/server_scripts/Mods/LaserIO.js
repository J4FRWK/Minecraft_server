// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'laserio:logic_chip_raw'})
})

//Add
  //Applied Enegistics 2
ServerEvents.recipes(event => {
  event.shaped('laserio:logic_chip_raw', ['151','232','454'], {1: 'cyclic:energy_pipe', 2:'cyclic:item_pipe', 3:'#forge:dusts/redstone', 4:'cyclic:fluid_pipe', 5:'#forge:ingots/gold'})
})