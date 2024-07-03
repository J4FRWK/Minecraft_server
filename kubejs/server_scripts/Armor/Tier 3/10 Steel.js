// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'mekanismtools:steel/armor/helmet'})
  event.recipes.summoningrituals.altar("twilightforest:knightmetal_helmet")
  .itemOutput('mekanismtools:steel_helmet')
  .input('16x thermal:steel_ingot')
  .input('8x thermal:steel_block')
  .recipeTime(800)
  .blockBelow('thermal:steel_block')
  //Chestplate
  event.remove({id: 'mekanismtools:steel/armor/chestplate'})
  event.recipes.summoningrituals.altar("twilightforest:knightmetal_chestplate")
  .itemOutput('mekanismtools:steel_chestplate')
  .input('16x thermal:steel_ingot')
  .input('8x thermal:steel_block')
  .recipeTime(800)
  .blockBelow('thermal:steel_block')
  //Leggings
  event.remove({id: 'mekanismtools:steel/armor/leggings'})
  event.recipes.summoningrituals.altar("twilightforest:knightmetal_leggings")
  .itemOutput('mekanismtools:steel_leggings')
  .input('16x thermal:steel_ingot')
  .input('8x thermal:steel_block')
  .recipeTime(800)
  .blockBelow('thermal:steel_block')
  //Boots
  event.remove({id: 'mekanismtools:steel/armor/boots'})
  event.recipes.summoningrituals.altar("twilightforest:knightmetal_boots")
  .itemOutput('mekanismtools:steel_boots')
  .input('16x thermal:steel_ingot')
  .input('8x thermal:steel_block')
  .recipeTime(800)
  .blockBelow('thermal:steel_block')
})