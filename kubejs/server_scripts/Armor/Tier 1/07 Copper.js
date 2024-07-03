// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'tools_complement:copper_helmet'})
  event.shaped('tools_complement:copper_helmet', ['111','121'], {1: '#forge:storage_blocks/copper', 2: 'armorplus:redstone_helmet'})
  //Chestplate
  event.remove({id: 'tools_complement:copper_chestplate'})
  event.shaped('tools_complement:copper_chestplate', ['121','111', '111'], {1: '#forge:storage_blocks/copper', 2: 'armorplus:redstone_chestplate'})
  //Leggings
  event.remove({id: 'tools_complement:copper_leggings'})
  event.shaped('tools_complement:copper_leggings', ['111','121', '1 1'], {1: '#forge:storage_blocks/copper', 2: 'armorplus:redstone_leggings'})
  //Boots
  event.remove({id: 'tools_complement:copper_boots'})
  event.shaped('tools_complement:copper_boots', ['121','1 1'], {1: '#forge:storage_blocks/copper', 2: 'armorplus:redstone_boots'})
})
