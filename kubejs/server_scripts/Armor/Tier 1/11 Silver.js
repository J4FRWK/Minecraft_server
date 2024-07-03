// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'tools_complement:silver_helmet'})
  event.shaped('tools_complement:silver_helmet', ['111','121'], {1: '#forge:storage_blocks/silver', 2: 'mekanismtools:lapis_lazuli_helmet'})
  //Chestplate
  event.remove({id: 'tools_complement:silver_chestplate'})
  event.shaped('tools_complement:silver_chestplate', ['121','111', '111'], {1: '#forge:storage_blocks/silver', 2: 'mekanismtools:lapis_lazuli_chestplate'})
  //Leggings
  event.remove({id: 'tools_complement:silver_leggings'})
  event.shaped('tools_complement:silver_leggings', ['111','121', '1 1'], {1: '#forge:storage_blocks/silver', 2: 'mekanismtools:lapis_lazuli_leggings'})
  //Boots
  event.remove({id: 'tools_complement:silver_boots'})
  event.shaped('tools_complement:silver_boots', ['121','1 1'], {1: '#forge:storage_blocks/silver', 2: 'mekanismtools:lapis_lazuli_boots'})
})
