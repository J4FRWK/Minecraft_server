// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'tiab:time_in_a_bottle'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('tiab:time_in_a_bottle', 
  ['454','212','333'], {
    1: 'minecraft:glass_bottle', 
    2: 'extendedcrafting:nether_star_block',
    3: '#forge:storage_blocks/netherite',
    4: '#forge:storage_blocks/diamond',
    5: '#forge:storage_blocks/gold'})
})