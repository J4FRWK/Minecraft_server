// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'blue_skies:charoite_helmet'})
  event.recipes.summoningrituals.altar("armorplus:emerald_helmet")
  .itemOutput('blue_skies:charoite_helmet')
  .input('16x blue_skies:charoite')
  .input('8x blue_skies:charoite_block')
  .recipeTime(800)
  .blockBelow('blue_skies:charoite_block')
  //Chestplate
  event.remove({id: 'blue_skies:charoite_chestplate'})
  event.recipes.summoningrituals.altar("armorplus:emerald_chestplate")
  .itemOutput('blue_skies:charoite_chestplate')
  .input('16x blue_skies:charoite')
  .input('8x blue_skies:charoite_block')
  .recipeTime(800)
  .blockBelow('blue_skies:charoite_block')
  //Leggings
  event.remove({id: 'blue_skies:charoite_leggings'})
  event.recipes.summoningrituals.altar("armorplus:emerald_leggings")
  .itemOutput('blue_skies:charoite_leggings')
  .input('16x blue_skies:charoite')
  .input('8x blue_skies:charoite_block')
  .recipeTime(800)
  .blockBelow('blue_skies:charoite_block')
  //Boots
  event.remove({id: 'blue_skies:charoite_boots'})
  event.recipes.summoningrituals.altar("armorplus:emerald_boots")
  .itemOutput('blue_skies:charoite_boots')
  .input('16x blue_skies:charoite')
  .input('8x blue_skies:charoite_block')
  .recipeTime(800)
  .blockBelow('blue_skies:charoite_block')
})