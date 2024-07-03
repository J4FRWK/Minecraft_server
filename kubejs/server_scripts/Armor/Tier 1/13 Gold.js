// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'minecraft:golden_helmet'})
  event.shaped('minecraft:golden_helmet', ['111','121'], {1: '#forge:storage_blocks/gold', 2: 'tools_complement:electrum_helmet'})
  //Chestplate
  event.remove({id: 'minecraft:golden_chestplate'})
  event.shaped('minecraft:golden_chestplate', ['121','111', '111'], {1: '#forge:storage_blocks/gold', 2: 'tools_complement:electrum_chestplate'})
  //Leggings
  event.remove({id: 'minecraft:golden_leggings'})
  event.shaped('minecraft:golden_leggings', ['111','121', '1 1'], {1: '#forge:storage_blocks/gold', 2: 'tools_complement:electrum_leggings'})
  //Boots
  event.remove({id: 'minecraft:golden_boots'})
  event.shaped('minecraft:golden_boots', ['121','1 1'], {1: '#forge:storage_blocks/gold', 2: 'tools_complement:electrum_boots'})
})
