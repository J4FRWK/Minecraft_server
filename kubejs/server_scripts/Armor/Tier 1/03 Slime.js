// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/slime/slime_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/slime/slime_helmet_alt'})
  event.shaped('armorplus:slime_helmet', ['111','121'], {1: 'minecraft:slime_block', 2: 'armorplus:chicken_helmet'})
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/slime/slime_chestplate'})
  event.shaped('armorplus:slime_chestplate', ['121','111', '111'], {1: 'minecraft:slime_block', 2: 'armorplus:chicken_chestplate'})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/slime/slime_leggings'})
  event.shaped('armorplus:slime_leggings', ['111','121', '1 1'], {1: 'minecraft:slime_block', 2: 'armorplus:chicken_leggings'})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/slime/slime_boots'})
  event.remove({id: 'armorplus:crafting/shaped/slime/slime_boots_alt'})
  event.shaped('armorplus:slime_boots', ['121','1 1'], {1: 'minecraft:slime_block', 2: 'armorplus:chicken_boots'})
})
