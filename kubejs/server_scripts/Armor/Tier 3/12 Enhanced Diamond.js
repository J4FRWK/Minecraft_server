// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/enhanced/diamond_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/diamond_helmet_alt'})
  event.recipes.summoningrituals.altar("minecraft:diamond_helmet")
  .itemOutput('armorplus:diamond_helmet')
  .input('16x armorplus:en_diamond')
  .input('8x minecraft:diamond_block')
  .recipeTime(800)
  .blockBelow('minecraft:diamond_block')
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/enhanced/diamond_chestplate'})
  event.recipes.summoningrituals.altar("minecraft:diamond_chestplate")
  .itemOutput('armorplus:diamond_chestplate')
  .input('16x armorplus:en_diamond')
  .input('8x minecraft:diamond_block')
  .recipeTime(800)
  .blockBelow('minecraft:diamond_block')
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/enhanced/diamond_leggings'})
  event.recipes.summoningrituals.altar("minecraft:diamond_leggings")
  .itemOutput('armorplus:diamond_leggings')
  .input('16x armorplus:en_diamond')
  .input('8x minecraft:diamond_block')
  .recipeTime(800)
  .blockBelow('minecraft:diamond_block')
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/enhanced/diamond_boots'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/diamond_boots_alt'})
  event.recipes.summoningrituals.altar("minecraft:diamond_boots")
  .itemOutput('armorplus:diamond_boots')
  .input('16x armorplus:en_diamond')
  .input('8x minecraft:diamond_block')
  .recipeTime(800)
  .blockBelow('minecraft:diamond_block')

  event.remove({id: 'armorplus:crafting/shaped/enhanced/en_diamond'})
  event.shaped('armorplus:en_diamond', ['222','111', '222'], {1: 'compressium:diamond_1', 2: '#forge:gems/diamond'})
})