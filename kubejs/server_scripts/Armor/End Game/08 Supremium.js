// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'mysticalagriculture:supremium_helmet'}),
  event.remove({output: 'mysticalagriculture:supremium_chestplate'}),
  event.remove({output: 'mysticalagriculture:supremium_leggings'}),
  event.remove({output: 'mysticalagriculture:supremium_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_helmet',  [
  '111111111',
  '1   3   1',
  '1  323  1',
  '1   3   1',
  '1       1'

],  {
  1: 'mysticalagriculture:supremium_essence', 
  2: 'mysticalagriculture:imperium_helmet',
  3: 'mysticalagriculture:supremium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_chestplate',  [
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
  1: 'mysticalagriculture:supremium_essence', 
  2: 'mysticalagriculture:imperium_chestplate',
  3: 'mysticalagriculture:supremium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_leggings',  [
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
  1: 'mysticalagriculture:supremium_essence', 
  2: 'mysticalagriculture:imperium_leggings',
  3: 'mysticalagriculture:supremium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_boots',  [
  '1       1',
  '1   3   1',
  '1  323  1',
  '1   3   1',
  '1       1'
],  {
  1: 'mysticalagriculture:supremium_essence', 
  2: 'mysticalagriculture:imperium_boots',
  3: 'mysticalagriculture:supremium_block'
})
})