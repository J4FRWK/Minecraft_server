// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/emerald/emerald_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/emerald/emerald_helmet_alt'})
  event.recipes.summoningrituals.altar("twilightforest:fiery_helmet")
  .itemOutput('armorplus:emerald_helmet')
  .input('16x minecraft:emerald')
  .input('8x minecraft:emerald_block')
  .recipeTime(800)
  .blockBelow('minecraft:emerald_block')
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/emerald/emerald_chestplate'})
  event.recipes.summoningrituals.altar("twilightforest:fiery_chestplate")
  .itemOutput('armorplus:emerald_chestplate')
  .input('16x minecraft:emerald')
  .input('8x minecraft:emerald_block')
  .recipeTime(800)
  .blockBelow('minecraft:emerald_block')
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/emerald/emerald_leggings'})
  event.recipes.summoningrituals.altar("twilightforest:fiery_leggings")
  .itemOutput('armorplus:emerald_leggings')
  .input('16x minecraft:emerald')
  .input('8x minecraft:emerald_block')
  .recipeTime(800)
  .blockBelow('minecraft:emerald_block')
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/emerald/emerald_boots'})
  event.remove({id: 'armorplus:crafting/shaped/emerald/emerald_boots_alt'})
  event.recipes.summoningrituals.altar("twilightforest:fiery_boots")
  .itemOutput('armorplus:emerald_boots')
  .input('16x minecraft:emerald')
  .input('8x minecraft:emerald_block')
  .recipeTime(800)
  .blockBelow('minecraft:emerald_block')
})