// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/enhanced/golden_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/golden_helmet_alt'})
  event.shaped('armorplus:golden_helmet', ['111','121'], {1: 'armorplus:en_gold', 2: 'minecraft:golden_helmet'})
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/enhanced/golden_chestplate'})
  event.shaped('armorplus:golden_chestplate', ['121','111', '111'], {1: 'armorplus:en_gold', 2: 'minecraft:golden_chestplate'})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/enhanced/golden_leggings'})
  event.shaped('armorplus:golden_leggings', ['111','121', '1 1'], {1: 'armorplus:en_gold', 2: 'minecraft:golden_leggings'})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/enhanced/golden_boots'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/golden_boots_alt'})
  event.shaped('armorplus:golden_boots', ['121','1 1'], {1: 'armorplus:en_gold', 2: 'minecraft:golden_boots'})

  event.remove({id: 'armorplus:crafting/shaped/enhanced/en_gold'})
  event.shaped('armorplus:en_gold', ['222','111', '222'], {1: 'compressium:gold_1', 2: '#forge:ingots/gold'})
})
