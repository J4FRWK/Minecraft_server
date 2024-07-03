// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'twilightforest:equipment/steeleaf_helmet'})
  event.recipes.summoningrituals.altar("blue_skies:diopside_helmet")
  .itemOutput(Item.of('twilightforest:steeleaf_helmet', '{Damage:0}').enchant('minecraft:projectile_protection', 2))
  .input('16x twilightforest:steeleaf_ingot')
  .input('8x twilightforest:steeleaf_block')
  .recipeTime(800)
  .blockBelow('twilightforest:steeleaf_block')
  //Chestplate
  event.remove({id: 'twilightforest:equipment/steeleaf_chestplate'})
  event.recipes.summoningrituals.altar("blue_skies:diopside_chestplate")
  .itemOutput(Item.of('twilightforest:steeleaf_chestplate', '{Damage:0}').enchant('minecraft:blast_protection', 2))
  .input('16x twilightforest:steeleaf_ingot')
  .input('8x twilightforest:steeleaf_block')
  .recipeTime(800)
  .blockBelow('twilightforest:steeleaf_block')
  //Leggings
  event.remove({id: 'twilightforest:equipment/steeleaf_leggings'})
  event.recipes.summoningrituals.altar("blue_skies:diopside_leggings")
  .itemOutput(Item.of('twilightforest:steeleaf_leggings', '{Damage:0}').enchant('minecraft:fire_protection', 2))
  .input('16x twilightforest:steeleaf_ingot')
  .input('8x twilightforest:steeleaf_block')
  .recipeTime(800)
  .blockBelow('twilightforest:steeleaf_block')
  //Boots
  event.remove({id: 'twilightforest:equipment/steeleaf_boots'})
  event.recipes.summoningrituals.altar("blue_skies:diopside_boots")
  .itemOutput(Item.of('twilightforest:steeleaf_boots', '{Damage:0}').enchant('minecraft:feather_falling', 2))
  .input('16x twilightforest:steeleaf_ingot')
  .input('8x twilightforest:steeleaf_block')
  .recipeTime(800)
  .blockBelow('twilightforest:steeleaf_block')
})