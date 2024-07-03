// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'twilightforest:equipment/ironwood_helmet'})
  event.recipes.summoningrituals.altar("mekanismtools:bronze_helmet")
  .itemOutput(Item.of('twilightforest:ironwood_helmet', '{Damage:0}').enchant('minecraft:aqua_affinity', 1))
  .input('16x twilightforest:ironwood_ingot')
  .input('8x twilightforest:ironwood_block')
  .input('16x twilightforest:naga_scale')
  .input('twilightforest:naga_trophy')
  .input('twilightforest:naga_trophy')
  .input('twilightforest:lich_trophy')
  .input('twilightforest:lich_trophy')
  .recipeTime(800)
  .blockBelow('twilightforest:ironwood_block')
  //Chestplate
  event.remove({id: 'twilightforest:equipment/ironwood_chestplate'})
  event.recipes.summoningrituals.altar("mekanismtools:bronze_chestplate")
  .itemOutput(Item.of('twilightforest:ironwood_chestplate', '{Damage:0}').enchant('minecraft:protection', 1))
  .input('16x twilightforest:ironwood_ingot')
  .input('16x twilightforest:naga_scale')
  .input('8x twilightforest:ironwood_block')
  .input('twilightforest:naga_trophy')
  .input('twilightforest:naga_trophy')
  .input('twilightforest:lich_trophy')
  .input('twilightforest:lich_trophy')
  .recipeTime(800)
  .blockBelow('twilightforest:ironwood_block')
  //Leggings
  event.remove({id: 'twilightforest:equipment/ironwood_leggings'})
  event.recipes.summoningrituals.altar("mekanismtools:bronze_leggings")
  .itemOutput(Item.of('twilightforest:ironwood_leggings', '{Damage:0}').enchant('minecraft:protection', 1))
  .input('16x twilightforest:ironwood_ingot')
  .input('16x twilightforest:naga_scale')
  .input('8x twilightforest:ironwood_block')
  .input('twilightforest:naga_trophy')
  .input('twilightforest:naga_trophy')
  .input('twilightforest:lich_trophy')
  .input('twilightforest:lich_trophy')
  .recipeTime(800)
  .blockBelow('twilightforest:ironwood_block')
  //Boots
  event.remove({id: 'twilightforest:equipment/ironwood_boots'})
  event.recipes.summoningrituals.altar("mekanismtools:bronze_boots")
  .itemOutput(Item.of('twilightforest:ironwood_boots', '{Damage:0}').enchant('minecraft:feather_falling', 1))
  .input('16x twilightforest:ironwood_ingot')
  .input('8x twilightforest:ironwood_block')
  .input('16x twilightforest:naga_scale')
  .input('twilightforest:naga_trophy')
  .input('twilightforest:naga_trophy')
  .input('twilightforest:lich_trophy')
  .input('twilightforest:lich_trophy')
  .recipeTime(800)
  .blockBelow('twilightforest:ironwood_block')
})