// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'minecraft:leather_helmet'})
  event.shaped('minecraft:leather_helmet', ['111','121'], {1: 'material_elements:leather_sheet', 2: 'immersiveengineering:armor_faraday_head'})
  //Chestplate
  event.remove({id: 'minecraft:leather_chestplate'})
  event.shaped('minecraft:leather_chestplate', ['121','111', '111'], {1: 'material_elements:leather_sheet', 2: 'immersiveengineering:armor_faraday_chest'})
  //Leggings
  event.remove({id: 'minecraft:leather_leggings'})
  event.shaped('minecraft:leather_leggings', ['111','121', '1 1'], {1: 'material_elements:leather_sheet', 2: 'immersiveengineering:armor_faraday_legs'})
  //Boots
  event.remove({id: 'minecraft:leather_boots'})
  event.shaped('minecraft:leather_boots', ['121','1 1'], {1: 'material_elements:leather_sheet', 2: 'immersiveengineering:armor_faraday_feet'})
})
