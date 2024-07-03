// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'immersiveengineering:crafting/armor_faraday_head'})
  event.shaped('immersiveengineering:armor_faraday_head', ['111','121'], {1: '#forge:storage_blocks/aluminum', 2: 'armorplus:slime_helmet'})
  //Chestplate
  event.remove({id: 'immersiveengineering:crafting/armor_faraday_chest'})
  event.shaped('immersiveengineering:armor_faraday_chest', ['121','111', '111'], {1: '#forge:storage_blocks/aluminum', 2: 'armorplus:slime_chestplate'})
  //Leggings
  event.remove({id: 'immersiveengineering:crafting/armor_faraday_legs'})
  event.shaped('immersiveengineering:armor_faraday_legs', ['111','121', '1 1'], {1: '#forge:storage_blocks/aluminum', 2: 'armorplus:slime_leggings'})
  //Boots
  event.remove({id: 'immersiveengineering:crafting/armor_faraday_feet'})
  event.shaped('immersiveengineering:armor_faraday_feet', ['121','1 1'], {1: '#forge:storage_blocks/aluminum', 2: 'armorplus:slime_boots'})
})
