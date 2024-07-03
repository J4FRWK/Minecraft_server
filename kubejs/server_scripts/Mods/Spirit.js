// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Add
ServerEvents.recipes(event => {
  event.remove({id: 'spirit:crafting/decompressed_soul_sand'})
  event.remove({id: 'spirit:crafting/compressed_soul_sand'})
  event.shaped('spirit:compressed_soul_sand', ['111','121','111'], {
    1: 'minecraft:soul_sand', 2: 'minecraft:soul_soil'})
})