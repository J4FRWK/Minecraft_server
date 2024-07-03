// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'mekanismtools:bronze/armor/helmet'})
  event.recipes.summoningrituals.altar("twilightforest:yeti_helmet")
  .itemOutput('mekanismtools:bronze_helmet')
  .input('8x thermal:bronze_block')
  .input('16x thermal:bronze_ingot')
  .recipeTime(800)
  .blockBelow('thermal:bronze_block')
  //Chestplate
  event.remove({id: 'mekanismtools:bronze/armor/chestplate'})
  event.recipes.summoningrituals.altar("twilightforest:yeti_chestplate")
  .itemOutput('mekanismtools:bronze_chestplate')
  .input('8x thermal:bronze_block')
  .input('16x thermal:bronze_ingot')
  .recipeTime(800)
  .blockBelow('thermal:bronze_block')
  //Leggings
  event.remove({id: 'mekanismtools:bronze/armor/leggings'})
  event.recipes.summoningrituals.altar("twilightforest:yeti_leggings")
  .itemOutput('mekanismtools:bronze_leggings')
  .input('8x thermal:bronze_block')
  .input('16x thermal:bronze_ingot')
  .recipeTime(800)
  .blockBelow('thermal:bronze_block')
  //Boots
  event.remove({id: 'mekanismtools:bronze/armor/boots'})
  event.recipes.summoningrituals.altar("twilightforest:yeti_boots")
  .itemOutput('mekanismtools:bronze_boots')
  .input('8x thermal:bronze_block')
  .input('16x thermal:bronze_ingot')
  .recipeTime(800)
  .blockBelow('thermal:bronze_block')
})