// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_helmet_alt'})
  event.shaped('armorplus:redstone_helmet', ['111','121'], {1: '#forge:storage_blocks/redstone', 2: 'minecraft:leather_helmet'})
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_chestplate'})
  event.shaped('armorplus:redstone_chestplate', ['121','111', '111'], {1: '#forge:storage_blocks/redstone', 2: 'minecraft:leather_chestplate'})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_leggings'})
  event.shaped('armorplus:redstone_leggings', ['111','121', '1 1'], {1: '#forge:storage_blocks/redstone', 2: 'minecraft:leather_leggings'})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_boots'})
  event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_boots_alt'})
  event.shaped('armorplus:redstone_boots', ['121','1 1'], {1: '#forge:storage_blocks/redstone', 2: 'minecraft:leather_boots'})
})
