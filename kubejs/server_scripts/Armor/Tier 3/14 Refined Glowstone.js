// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'mekanismtools:refined_glowstone/armor/helmet'})
  event.recipes.summoningrituals.altar("mekanismtools:osmium_helmet")
  .itemOutput('mekanismtools:refined_glowstone_helmet')
  .input('16x mekanism:ingot_refined_glowstone')
  .input('8x mekanism:block_refined_glowstone')
  .recipeTime(800)
  .blockBelow('mekanism:block_refined_glowstone')
  //Chestplate
  event.remove({id: 'mekanismtools:refined_glowstone/armor/chestplate'})
  event.recipes.summoningrituals.altar("mekanismtools:osmium_chestplate")
  .itemOutput('mekanismtools:refined_glowstone_chestplate')
  .input('16x mekanism:ingot_refined_glowstone')
  .input('8x mekanism:block_refined_glowstone')
  .recipeTime(800)
  .blockBelow('mekanism:block_refined_glowstone')
  //Leggings
  event.remove({id: 'mekanismtools:refined_glowstone/armor/leggings'})
  event.recipes.summoningrituals.altar("mekanismtools:osmium_leggings")
  .itemOutput('mekanismtools:refined_glowstone_leggings')
  .input('16x mekanism:ingot_refined_glowstone')
  .input('8x mekanism:block_refined_glowstone')
  .recipeTime(800)
  .blockBelow('mekanism:block_refined_glowstone')
  //Boots
  event.remove({id: 'mekanismtools:refined_glowstone/armor/boots'})
  event.recipes.summoningrituals.altar("mekanismtools:osmium_boots")
  .itemOutput('mekanismtools:refined_glowstone_boots')
  .input('16x mekanism:ingot_refined_glowstone')
  .input('8x mekanism:block_refined_glowstone')
  .recipeTime(800)
  .blockBelow('mekanism:block_refined_glowstone')
})