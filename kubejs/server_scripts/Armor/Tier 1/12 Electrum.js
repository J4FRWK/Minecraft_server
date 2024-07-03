// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'tools_complement:electrum_helmet'})
  event.shaped('tools_complement:electrum_helmet', ['111','121'], {1: '#forge:storage_blocks/electrum', 2: 'tools_complement:silver_helmet'})
  //Chestplate
  event.remove({id: 'tools_complement:electrum_chestplate'})
  event.shaped('tools_complement:electrum_chestplate', ['121','111', '111'], {1: '#forge:storage_blocks/electrum', 2: 'tools_complement:silver_chestplate'})
  //Leggings
  event.remove({id: 'tools_complement:electrum_leggings'})
  event.shaped('tools_complement:electrum_leggings', ['111','121', '1 1'], {1: '#forge:storage_blocks/electrum', 2: 'tools_complement:silver_leggings'})
  //Boots
  event.remove({id: 'tools_complement:electrum_boots'})
  event.shaped('tools_complement:electrum_boots', ['121','1 1'], {1: '#forge:storage_blocks/electrum', 2: 'tools_complement:silver_boots'})
})
