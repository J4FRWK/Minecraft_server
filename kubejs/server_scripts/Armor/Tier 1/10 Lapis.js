// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'mekanismtools:lapis_lazuli/armor/helmet'})
  event.shaped('mekanismtools:lapis_lazuli_helmet', ['111','121'], {1: '#forge:storage_blocks/lapis', 2: 'tools_complement:tin_helmet'})
  //Chestplate
  event.remove({id: 'mekanismtools:lapis_lazuli/armor/chestplate'})
  event.shaped('mekanismtools:lapis_lazuli_chestplate', ['121','111', '111'], {1: '#forge:storage_blocks/lapis', 2: 'tools_complement:tin_chestplate'})
  //Leggings
  event.remove({id: 'mekanismtools:lapis_lazuli/armor/leggings'})
  event.shaped('mekanismtools:lapis_lazuli_leggings', ['111','121', '1 1'], {1: '#forge:storage_blocks/lapis', 2: 'tools_complement:tin_leggings'})
  //Boots
  event.remove({id: 'mekanismtools:lapis_lazuli/armor/boots'})
  event.shaped('mekanismtools:lapis_lazuli_boots', ['121','1 1'], {1: '#forge:storage_blocks/lapis', 2: 'tools_complement:tin_boots'})
})
