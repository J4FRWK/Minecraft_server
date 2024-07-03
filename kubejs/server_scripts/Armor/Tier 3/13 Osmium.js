// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'mekanismtools:osmium/armor/helmet'})
  event.recipes.summoningrituals.altar("armorplus:diamond_helmet")
  .itemOutput('mekanismtools:osmium_helmet')
  .input('16x mekanism:ingot_osmium')
  .input('8x mekanism:block_osmium')
  .recipeTime(800)
  .blockBelow('mekanism:block_osmium')
  //Chestplate
  event.remove({id: 'mekanismtools:osmium/armor/chestplate'})
  event.recipes.summoningrituals.altar("armorplus:diamond_chestplate")
  .itemOutput('mekanismtools:osmium_chestplate')
  .input('16x mekanism:ingot_osmium')
  .input('8x mekanism:block_osmium')
  .recipeTime(800)
  .blockBelow('mekanism:block_osmium')
  //Leggings
  event.remove({id: 'mekanismtools:osmium/armor/leggings'})
  event.recipes.summoningrituals.altar("armorplus:diamond_leggings")
  .itemOutput('mekanismtools:osmium_leggings')
  .input('16x mekanism:ingot_osmium')
  .input('8x mekanism:block_osmium')
  .recipeTime(800)
  .blockBelow('mekanism:block_osmium')
  //Boots
  event.remove({id: 'mekanismtools:osmium/armor/boots'})
  event.recipes.summoningrituals.altar("armorplus:diamond_boots")
  .itemOutput('mekanismtools:osmium_boots')
  .input('16x mekanism:ingot_osmium')
  .input('8x mekanism:block_osmium')
  .recipeTime(800)
  .blockBelow('mekanism:block_osmium')
})