// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'twilightforest:equipment/arctic_helmet'})
  event.recipes.summoningrituals.altar("pneumaticcraft:compressed_iron_helmet")
  .itemOutput('twilightforest:arctic_helmet')
  .input('8x twilightforest:arctic_fur_block')
  .input('16x twilightforest:arctic_fur')
  .recipeTime(800)
  .blockBelow('twilightforest:arctic_fur_block')
  //Chestplate
  event.remove({id: 'twilightforest:equipment/arctic_chestplate'})
  event.recipes.summoningrituals.altar("pneumaticcraft:compressed_iron_chestplate")
  .itemOutput('twilightforest:arctic_chestplate')
  .input('8x twilightforest:arctic_fur_block')
  .input('16x twilightforest:arctic_fur')
  .recipeTime(800)
  .blockBelow('twilightforest:arctic_fur_block')
  //Leggings
  event.remove({id: 'twilightforest:equipment/arctic_leggings'})
  event.recipes.summoningrituals.altar("pneumaticcraft:compressed_iron_leggings")
  .itemOutput('twilightforest:arctic_leggings')
  .input('8x twilightforest:arctic_fur_block')
  .input('16x twilightforest:arctic_fur')
  .recipeTime(800)
  .blockBelow('twilightforest:arctic_fur_block')
  //Boots
  event.remove({id: 'twilightforest:equipment/arctic_boots'})
  event.recipes.summoningrituals.altar("pneumaticcraft:compressed_iron_boots")
  .itemOutput('twilightforest:arctic_boots')
  .input('8x twilightforest:arctic_fur_block')
  .input('16x twilightforest:arctic_fur')
  .recipeTime(800)
  .blockBelow('twilightforest:arctic_fur_block')
})