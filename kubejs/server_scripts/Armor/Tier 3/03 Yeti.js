// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'twilightforest:equipment/yeti_helmet'})
  event.recipes.summoningrituals.altar("tools_complement:invar_helmet")
  .itemOutput(Item.of('twilightforest:yeti_helmet', '{Damage:0}').enchant('minecraft:protection', 2))
  .input('twilightforest:alpha_yeti_trophy')
  .input('twilightforest:alpha_yeti_trophy')
  .input('twilightforest:snow_queen_trophy')
  .input('twilightforest:snow_queen_trophy')
  .input('16x twilightforest:alpha_yeti_fur')
  .recipeTime(800)
  .blockBelow('twilightforest:arctic_fur_block')
  //Chestplate
  event.remove({id: 'twilightforest:equipment/yeti_chestplate'})
  event.recipes.summoningrituals.altar("tools_complement:invar_chestplate")
  .itemOutput(Item.of('twilightforest:yeti_chestplate', '{Damage:0}').enchant('minecraft:protection', 2))
  .input('twilightforest:alpha_yeti_trophy')
  .input('twilightforest:alpha_yeti_trophy')
  .input('twilightforest:snow_queen_trophy')
  .input('twilightforest:snow_queen_trophy')
  .input('16x twilightforest:alpha_yeti_fur')
  .recipeTime(800)
  .blockBelow('twilightforest:arctic_fur_block')
  //Leggings
  event.remove({id: 'twilightforest:equipment/yeti_leggings'})
  event.recipes.summoningrituals.altar("tools_complement:invar_leggings")
  .itemOutput(Item.of('twilightforest:yeti_leggings', '{Damage:0}').enchant('minecraft:protection', 2))
  .input('twilightforest:alpha_yeti_trophy')
  .input('twilightforest:alpha_yeti_trophy')
  .input('twilightforest:snow_queen_trophy')
  .input('twilightforest:snow_queen_trophy')
  .input('16x twilightforest:alpha_yeti_fur')
  .recipeTime(800)
  .blockBelow('twilightforest:arctic_fur_block')
  //Boots
  event.remove({id: 'twilightforest:equipment/yeti_boots'})
  event.recipes.summoningrituals.altar("tools_complement:invar_boots")
  .itemOutput(Item.of('twilightforest:yeti_boots', '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:feather_falling', 4))
  .input('twilightforest:alpha_yeti_trophy')
  .input('twilightforest:alpha_yeti_trophy')
  .input('twilightforest:snow_queen_trophy')
  .input('twilightforest:snow_queen_trophy')
  .input('16x twilightforest:alpha_yeti_fur')
  .recipeTime(800)
  .blockBelow('twilightforest:arctic_fur_block')
})