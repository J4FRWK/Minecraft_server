// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'mysticalagriculture:tertium_helmet'}),
  event.remove({output: 'mysticalagriculture:tertium_chestplate'}),
  event.remove({output: 'mysticalagriculture:tertium_leggings'}),
  event.remove({output: 'mysticalagriculture:tertium_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_helmet',  [
  '1111111',
  '1  3  1',
  '1 323 1',
  '1  3  1',
  '1     1'

],  {
  1: 'mysticalagriculture:tertium_essence', 
  2: 'mysticalagriculture:prudentium_helmet',
  3: 'mysticalagriculture:tertium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_chestplate',  [
  '1     1',
  '1111111',
  '1113111',
  '1132311',
  '1113111',
  '1111111',
  '1111111'
],  {
  1: 'mysticalagriculture:tertium_essence', 
  2: 'mysticalagriculture:prudentium_chestplate',
  3: 'mysticalagriculture:tertium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_leggings',  [
  '1111111',
  '1     1',
  '1  3  1',
  '1 323 1',
  '1  3  1', 
  '1     1',
  '1     1'
],  {
  1: 'mysticalagriculture:tertium_essence', 
  2: 'mysticalagriculture:prudentium_leggings',
  3: 'mysticalagriculture:tertium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_boots',  [
  '1     1',
  '1  3  1',
  '1 323 1',
  '1  3  1',
  '1     1'
],  {
  1: 'mysticalagriculture:tertium_essence', 
  2: 'mysticalagriculture:prudentium_boots',
  3: 'mysticalagriculture:tertium_block'
})
})