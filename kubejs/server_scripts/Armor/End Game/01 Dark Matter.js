// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Dark Matter
  event.remove({output: 'projecte:dm_helmet'}),
  event.remove({output: 'projecte:dm_chestplate'}),
  event.remove({output: 'projecte:dm_leggings'}),
  event.remove({output: 'projecte:dm_boots'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('projecte:dm_helmet',  [
  '11311',
  '13231',
  '1 3 1'
],  {
  1: 'projecte:dark_matter', 
  2: 'armorplus:slayer_helmet',
  3: 'projecte:dark_matter_block'
}),
event.recipes.extendedcrafting.shaped_table ('projecte:dm_chestplate',  [
  '1   1',
  '11311',
  '13231',
  '11311',
  '11111'
],  {
  1: 'projecte:dark_matter', 
  2: 'armorplus:slayer_chestplate',
  3: 'projecte:dark_matter_block'
}),
event.recipes.extendedcrafting.shaped_table ('projecte:dm_leggings',  [
  '11111',
  '1 3 1',
  '13231',
  '1 3 1',
  '1   1'
],  {
  1: 'projecte:dark_matter', 
  2: 'armorplus:slayer_leggings',
  3: 'projecte:dark_matter_block'
}),
event.recipes.extendedcrafting.shaped_table ('projecte:dm_boots',  [
  '1 3 1',
  '13231',
  '1 3 1'
],  {
  1: 'projecte:dark_matter', 
  2: 'armorplus:slayer_boots',
  3: 'projecte:dark_matter_block'
})
})