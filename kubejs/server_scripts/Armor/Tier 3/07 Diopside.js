// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'blue_skies:diopside_helmet'})
  event.recipes.summoningrituals.altar("undergarden:froststeel_helmet")
  .itemOutput('blue_skies:diopside_helmet')
  .input('16x blue_skies:diopside_gem')
  .input('8x blue_skies:diopside_block')
  .recipeTime(800)
  .blockBelow('blue_skies:diopside_block')
  //Chestplate
  event.remove({id: 'blue_skies:diopside_chestplate'})
  event.recipes.summoningrituals.altar("undergarden:froststeel_chestplate")
  .itemOutput('blue_skies:diopside_chestplate')
  .input('16x blue_skies:diopside_gem')
  .input('8x blue_skies:diopside_block')
  .recipeTime(800)
  .blockBelow('blue_skies:diopside_block')
  //Leggings
  event.remove({id: 'blue_skies:diopside_leggings'})
  event.recipes.summoningrituals.altar("undergarden:froststeel_leggings")
  .itemOutput('blue_skies:diopside_leggings')
  .input('16x blue_skies:diopside_gem')
  .input('8x blue_skies:diopside_block')
  .recipeTime(800)
  .blockBelow('blue_skies:diopside_block')
  //Boots
  event.remove({id: 'blue_skies:diopside_boots'})
  event.recipes.summoningrituals.altar("undergarden:froststeel_boots")
  .itemOutput('blue_skies:diopside_boots')
  .input('16x blue_skies:diopside_gem')
  .input('8x blue_skies:diopside_block')
  .recipeTime(800)
  .blockBelow('blue_skies:diopside_block')
})