// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'tools_complement:constantan_helmet'})
  event.shaped('tools_complement:constantan_helmet', ['111','121'], {1: '#forge:storage_blocks/constantan', 2: 'tools_complement:copper_helmet'})
  //Chestplate
  event.remove({id: 'tools_complement:constantan_chestplate'})
  event.shaped('tools_complement:constantan_chestplate', ['121','111', '111'], {1: '#forge:storage_blocks/constantan', 2: 'tools_complement:copper_chestplate'})
  //Leggings
  event.remove({id: 'tools_complement:constantan_leggings'})
  event.shaped('tools_complement:constantan_leggings', ['111','121', '1 1'], {1: '#forge:storage_blocks/constantan', 2: 'tools_complement:copper_leggings'})
  //Boots
  event.remove({id: 'tools_complement:constantan_boots'})
  event.shaped('tools_complement:constantan_boots', ['121','1 1'], {1: '#forge:storage_blocks/constantan', 2: 'tools_complement:copper_boots'})
})
