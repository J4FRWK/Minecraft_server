// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'mysticalagriculture:imperium_helmet'}),
  event.remove({output: 'mysticalagriculture:imperium_chestplate'}),
  event.remove({output: 'mysticalagriculture:imperium_leggings'}),
  event.remove({output: 'mysticalagriculture:imperium_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_helmet',  [
  '1111111',
  '1  3  1',
  '1 323 1',
  '1  3  1',
  '1     1'

],  {
  1: 'mysticalagriculture:imperium_essence', 
  2: 'mysticalagriculture:tertium_helmet',
  3: 'mysticalagriculture:imperium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_chestplate',  [
  '1     1',
  '1111111',
  '1113111',
  '1132311',
  '1113111',
  '1111111',
  '1111111'
],  {
  1: 'mysticalagriculture:imperium_essence', 
  2: 'mysticalagriculture:tertium_chestplate',
  3: 'mysticalagriculture:imperium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_leggings',  [
  '1111111',
  '1     1',
  '1  3  1',
  '1 323 1',
  '1  3  1', 
  '1     1',
  '1     1'
],  {
  1: 'mysticalagriculture:imperium_essence', 
  2: 'mysticalagriculture:tertium_leggings',
  3: 'mysticalagriculture:imperium_block'
}),
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_boots',  [
  '1     1',
  '1  3  1',
  '1 323 1',
  '1  3  1',
  '1     1'
],  {
  1: 'mysticalagriculture:imperium_essence', 
  2: 'mysticalagriculture:tertium_boots',
  3: 'mysticalagriculture:imperium_block'
})
})