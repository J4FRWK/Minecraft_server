// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'allthemodium:allthemodium_helmet'}),
  event.remove({output: 'allthemodium:allthemodium_chestplate'}),
  event.remove({output: 'allthemodium:allthemodium_leggings'}),
  event.remove({output: 'allthemodium:allthemodium_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_helmet',  [
  '11311',
  '13231',
  '1 3 1'
],  {
  1: 'allthemodium:allthemodium_ingot', 
  2: 'projecte:rm_helmet',
  3: 'allthemodium:allthemodium_block'
}),
event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_chestplate',  [
  '1   1',
  '11311',
  '13231',
  '11311',
  '11111'
],  {
  1: 'allthemodium:allthemodium_ingot', 
  2: 'projecte:rm_chestplate',
  3: 'allthemodium:allthemodium_block'
}),
event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_leggings',  [
  '11111',
  '1 3 1',
  '13231',
  '1 3 1',
  '1   1'
],  {
  1: 'allthemodium:allthemodium_ingot', 
  2: 'projecte:rm_leggings',
  3: 'allthemodium:allthemodium_block'
}),
event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_boots',  [
  '1 3 1',
  '13231',
  '1 3 1'
],  {
  1: 'allthemodium:allthemodium_ingot', 
  2: 'projecte:rm_boots',
  3: 'allthemodium:allthemodium_block'
})
})