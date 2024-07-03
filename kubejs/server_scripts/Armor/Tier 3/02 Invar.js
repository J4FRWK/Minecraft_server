// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'tools_complement:invar_helmet'})
  event.recipes.summoningrituals.altar("twilightforest:arctic_helmet")
  .itemOutput('tools_complement:invar_helmet')
  .input('8x thermal:invar_block')
  .input('16x thermal:invar_ingot')
  .recipeTime(800)
  .blockBelow('thermal:invar_block')
  //Chestplate
  event.remove({id: 'tools_complement:invar_chestplate'})
  event.recipes.summoningrituals.altar("twilightforest:arctic_chestplate")
  .itemOutput('tools_complement:invar_chestplate')
  .input('8x #forge:storage_blocks/invar')
  .input('16x thermal:invar_ingot')
  .recipeTime(800)
  .blockBelow('thermal:invar_block')
  //Leggings
  event.remove({id: 'tools_complement:invar_leggings'})
  event.recipes.summoningrituals.altar("twilightforest:arctic_leggings")
  .itemOutput('tools_complement:invar_leggings')
  .input('8x thermal:invar_block')
  .input('16x thermal:invar_ingot')
  .recipeTime(800)
  .blockBelow('thermal:invar_block')
  //Boots
  event.remove({id: 'tools_complement:invar_boots'})
  event.recipes.summoningrituals.altar("twilightforest:arctic_boots")
  .itemOutput('tools_complement:invar_boots')
  .input('8x thermal:invar_block')
  .input('16x thermal:invar_ingot')
  .recipeTime(800)
  .blockBelow('thermal:invar_block')
})