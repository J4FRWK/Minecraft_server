// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'notenoughwands:acceleration_wand'}),
  event.remove({output: 'notenoughwands:capturing_wand'}),
  event.remove({output: 'notenoughwands:protection_wand'})
})

//Add
  //Applied Enegistics 2
ServerEvents.recipes(event => {
  event.shaped('notenoughwands:acceleration_wand', ['12 ','23 ','  3'], {1: 'tiab:time_in_a_bottle', 2:'minecraft:nether_star', 3:'notenoughwands:advanced_wand_core'}),
  event.shaped('notenoughwands:capturing_wand', ['12 ','23 ','  3'], {1: 'cyclic:magic_net', 2:'minecraft:ghast_tear', 3:'notenoughwands:advanced_wand_core'}),
  event.shaped('notenoughwands:protection_wand', ['12 ','23 ','  3'], {1: 'thermal:lock', 2:'#forge:ender_pearls', 3:'notenoughwands:advanced_wand_core'})
})