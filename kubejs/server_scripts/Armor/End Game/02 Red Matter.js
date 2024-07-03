// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'projecte:rm_helmet'}),
  event.remove({output: 'projecte:rm_chestplate'}),
  event.remove({output: 'projecte:rm_leggings'}),
  event.remove({output: 'projecte:rm_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('projecte:rm_helmet',  [
  '11311',
  '13231',
  '1 3 1'
],  {
  1: 'projecte:red_matter', 
  2: 'projecte:dm_helmet',
  3: 'projecte:red_matter_block'
}),
event.recipes.extendedcrafting.shaped_table ('projecte:rm_chestplate',  [
  '1   1',
  '11311',
  '13231',
  '11311',
  '11111'
],  {
  1: 'projecte:red_matter', 
  2: 'projecte:dm_chestplate',
  3: 'projecte:red_matter_block'
}),
event.recipes.extendedcrafting.shaped_table ('projecte:rm_leggings',  [
  '11111',
  '1 3 1',
  '13231',
  '1 3 1',
  '1   1'
],  {
  1: 'projecte:red_matter', 
  2: 'projecte:dm_leggings',
  3: 'projecte:red_matter_block'
}),
event.recipes.extendedcrafting.shaped_table ('projecte:rm_boots',  [
  '1 3 1',
  '13231',
  '1 3 1'
],  {
  1: 'projecte:red_matter', 
  2: 'projecte:dm_boots',
  3: 'projecte:red_matter_block'
})
})