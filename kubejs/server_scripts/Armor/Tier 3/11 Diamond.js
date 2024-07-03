// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'minecraft:diamond_helmet'})
  event.recipes.summoningrituals.altar("mekanismtools:steel_helmet")
  .itemOutput('minecraft:diamond_helmet')
  .input('16x minecraft:diamond')
  .input('8x minecraft:diamond_block')
  .recipeTime(800)
  .blockBelow('minecraft:diamond_block')
  //Chestplate
  event.remove({id: 'minecraft:diamond_chestplate'})
  event.recipes.summoningrituals.altar("mekanismtools:steel_chestplate")
  .itemOutput('minecraft:diamond_chestplate')
  .input('16x minecraft:diamond')
  .input('8x minecraft:diamond_block')
  .recipeTime(800)
  .blockBelow('minecraft:diamond_block')
  //Leggings
  event.remove({id: 'minecraft:diamond_leggings'})
  event.recipes.summoningrituals.altar("mekanismtools:steel_leggings")
  .itemOutput('minecraft:diamond_leggings')
  .input('16x minecraft:diamond')
  .input('8x minecraft:diamond_block')
  .recipeTime(800)
  .blockBelow('minecraft:diamond_block')
  //Boots
  event.remove({id: 'minecraft:diamond_boots'})
  event.recipes.summoningrituals.altar("mekanismtools:steel_boots")
  .itemOutput('minecraft:diamond_boots')
  .input('16x minecraft:diamond')
  .input('8x minecraft:diamond_block')
  .recipeTime(800)
  .blockBelow('minecraft:diamond_block')
})