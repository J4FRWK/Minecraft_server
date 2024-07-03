// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'tools_complement:tin_helmet'})
  event.shaped('tools_complement:tin_helmet', ['111','121'], {1: '#forge:storage_blocks/tin', 2: 'tools_complement:constantan_helmet'})
  //Chestplate
  event.remove({id: 'tools_complement:tin_chestplate'})
  event.shaped('tools_complement:tin_chestplate', ['121','111', '111'], {1: '#forge:storage_blocks/tin', 2: 'tools_complement:constantan_chestplate'})
  //Leggings
  event.remove({id: 'tools_complement:tin_leggings'})
  event.shaped('tools_complement:tin_leggings', ['111','121', '1 1'], {1: '#forge:storage_blocks/tin', 2: 'tools_complement:constantan_leggings'})
  //Boots
  event.remove({id: 'tools_complement:tin_boots'})
  event.shaped('tools_complement:tin_boots', ['121','1 1'], {1: '#forge:storage_blocks/tin', 2: 'tools_complement:constantan_boots'})
})
