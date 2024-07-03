// priority: 0
console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'mysticaladaptations:insanium_helmet'}),
  event.remove({output: 'mysticaladaptations:insanium_chestplate'}),
  event.remove({output: 'mysticaladaptations:insanium_leggings'}),
  event.remove({output: 'mysticaladaptations:insanium_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_helmet',  [
  '111111111',
  '1   3   1',
  '1  323  1',
  '1   3   1',
  '1       1'

],  {
  1: 'mysticalagradditions:insanium_essence', 
  2: 'mysticalagriculture:awakened_supremium_helmet',
  3: 'mysticalagradditions:insanium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_chestplate',  [
  '1       1',
  '11     11',
  '111111111',
  '111131111',
  '111323111',
  '111131111',
  '111111111',
  '111111111',
  '111111111'
],  {
  1: 'mysticalagradditions:insanium_essence', 
  2: 'mysticalagriculture:awakened_supremium_chestplate',
  3: 'mysticalagradditions:insanium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_leggings',  [
  '111111111',
  '1       1',
  '1       1',
  '1   3   1',
  '1  323  1',
  '1   3   1',
  '1       1', 
  '1       1',
  '1       1'
],  {
  1: 'mysticalagradditions:insanium_essence', 
  2: 'mysticalagriculture:awakened_supremium_leggings',
  3: 'mysticalagradditions:insanium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_boots',  [
  '1       1',
  '1   3   1',
  '1  323  1',
  '1   3   1',
  '1       1'
],  {
  1: 'mysticalagradditions:insanium_essence', 
  2: 'mysticalagriculture:awakened_supremium_boots',
  3: 'mysticalagradditions:insanium_block'
})
})