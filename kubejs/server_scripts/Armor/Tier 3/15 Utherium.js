// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'undergarden:utherium_helmet'})
  event.recipes.summoningrituals.altar("mekanismtools:refined_glowstone_helmet")
  .itemOutput('undergarden:utherium_helmet')
  .input('16x undergarden:utherium_crystal')
  .input('8x undergarden:utherium_block')
  .recipeTime(800)
  .blockBelow('undergarden:utherium_block')
  //Chestplate
  event.remove({id: 'undergarden:utherium_chestplate'})
  event.recipes.summoningrituals.altar("mekanismtools:refined_glowstone_chestplate")
  .itemOutput('undergarden:utherium_chestplate')
  .input('16x undergarden:utherium_crystal')
  .input('8x undergarden:utherium_block')
  .recipeTime(800)
  .blockBelow('undergarden:utherium_block')
  //Leggings
  event.remove({id: 'undergarden:utherium_leggings'})
  event.recipes.summoningrituals.altar("mekanismtools:refined_glowstone_leggings")
  .itemOutput('undergarden:utherium_leggings')
  .input('16x undergarden:utherium_crystal')
  .input('8x undergarden:utherium_block')
  .recipeTime(800)
  .blockBelow('undergarden:utherium_block')
  //Boots
  event.remove({id: 'undergarden:utherium_boots'})
  event.recipes.summoningrituals.altar("mekanismtools:refined_glowstone_boots")
  .itemOutput('undergarden:utherium_boots')
  .input('16x undergarden:utherium_crystal')
  .input('8x undergarden:utherium_block')
  .recipeTime(800)
  .blockBelow('undergarden:utherium_block')
})