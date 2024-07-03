// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'undergarden:froststeel_helmet'})
  event.recipes.summoningrituals.altar("twilightforest:ironwood_helmet")
  .itemOutput('undergarden:froststeel_helmet')
  .input('16x undergarden:froststeel_ingot')
  .input('8x undergarden:froststeel_block')
  .recipeTime(800)
  .blockBelow('undergarden:froststeel_block')
  //Chestplate
  event.remove({id: 'undergarden:froststeel_chestplate'})
  event.recipes.summoningrituals.altar("twilightforest:ironwood_chestplate")
  .itemOutput('undergarden:froststeel_chestplate')
  .input('16x undergarden:froststeel_ingot')
  .input('8x undergarden:froststeel_block')
  .recipeTime(800)
  .blockBelow('undergarden:froststeel_block')
  //Leggings
  event.remove({id: 'undergarden:froststeel_leggings'})
  event.recipes.summoningrituals.altar("twilightforest:ironwood_leggings")
  .itemOutput('undergarden:froststeel_leggings')
  .input('16x undergarden:froststeel_ingot')
  .input('8x undergarden:froststeel_block')
  .recipeTime(800)
  .blockBelow('undergarden:froststeel_block')
  //Boots
  event.remove({id: 'undergarden:froststeel_boots'})
  event.recipes.summoningrituals.altar("twilightforest:ironwood_boots")
  .itemOutput('undergarden:froststeel_boots')
  .input('16x undergarden:froststeel_ingot')
  .input('8x undergarden:froststeel_block')
  .recipeTime(800)
  .blockBelow('undergarden:froststeel_block')
})