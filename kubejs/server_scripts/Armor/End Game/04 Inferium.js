// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'mysticalagriculture:inferium_helmet'}),
  event.remove({output: 'mysticalagriculture:inferium_chestplate'}),
  event.remove({output: 'mysticalagriculture:inferium_leggings'}),
  event.remove({output: 'mysticalagriculture:inferium_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_helmet',  [
  '1111111',
  '1  3  1',
  '1 323 1',
  '1  3  1',
  '1     1'

],  {
  1: 'mysticalagriculture:inferium_essence', 
  2: 'allthemodium:allthemodium_helmet',
  3: 'mysticalagriculture:inferium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_chestplate',  [
  '1     1',
  '1111111',
  '1113111',
  '1132311',
  '1113111',
  '1111111',
  '1111111'
],  {
  1: 'mysticalagriculture:inferium_essence', 
  2: 'allthemodium:allthemodium_chestplate',
  3: 'mysticalagriculture:inferium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_leggings',  [
  '1111111',
  '1     1',
  '1  3  1',
  '1 323 1',
  '1  3  1', 
  '1     1',
  '1     1'
],  {
  1: 'mysticalagriculture:inferium_essence', 
  2: 'allthemodium:allthemodium_leggings',
  3: 'mysticalagriculture:inferium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_boots',  [
  '1     1',
  '1  3  1',
  '1 323 1',
  '1  3  1',
  '1     1'
],  {
  1: 'mysticalagriculture:inferium_essence', 
  2: 'allthemodium:allthemodium_boots',
  3: 'mysticalagriculture:inferium_block'
})
})