// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/chicken/chicken_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/chicken/chicken_helmet_alt'})
  event.shaped('armorplus:chicken_helmet', ['111','121'], {1: 'minecraft:feather', 2: 'armorplus:coal_helmet'})
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/chicken/chicken_chestplate'})
  event.shaped('armorplus:chicken_chestplate', ['121','111', '111'], {1: 'minecraft:feather', 2: 'armorplus:coal_chestplate'})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/chicken/chicken_leggings'})
  event.shaped('armorplus:chicken_leggings', ['111','121', '1 1'], {1: 'minecraft:feather', 2: 'armorplus:coal_leggings'})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/chicken/chicken_boots'})
  event.remove({id: 'armorplus:crafting/shaped/chicken/chicken_boots_alt'})
  event.shaped('armorplus:chicken_boots', ['121','1 1'], {1: 'minecraft:feather', 2: 'armorplus:coal_boots'})
})
