// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'mysticalagriculture:prudentium_helmet'}),
  event.remove({output: 'mysticalagriculture:prudentium_chestplate'}),
  event.remove({output: 'mysticalagriculture:prudentium_leggings'}),
  event.remove({output: 'mysticalagriculture:prudentium_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_helmet',  [
  '1111111',
  '1  3  1',
  '1 323 1',
  '1  3  1',
  '1     1'

],  {
  1: 'mysticalagriculture:prudentium_essence', 
  2: 'mysticalagriculture:inferium_helmet',
  3: 'mysticalagriculture:prudentium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_chestplate',  [
  '1     1',
  '1111111',
  '1113111',
  '1132311',
  '1113111',
  '1111111',
  '1111111'
],  {
  1: 'mysticalagriculture:prudentium_essence', 
  2: 'mysticalagriculture:inferium_chestplate',
  3: 'mysticalagriculture:prudentium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_leggings',  [
  '1111111',
  '1     1',
  '1  3  1',
  '1 323 1',
  '1  3  1', 
  '1     1',
  '1     1'
],  {
  1: 'mysticalagriculture:prudentium_essence', 
  2: 'mysticalagriculture:inferium_leggings',
  3: 'mysticalagriculture:prudentium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_boots',  [
  '1     1',
  '1  3  1',
  '1 323 1',
  '1  3  1',
  '1     1'
],  {
  1: 'mysticalagriculture:prudentium_essence', 
  2: 'mysticalagriculture:inferium_boots',
  3: 'mysticalagriculture:prudentium_block'
})
})