// priority: 0
console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Dark Matter
    event.remove({output: 'avaritia:infinity_helmet'}),
    event.remove({output: 'avaritia:infinity_chestplate'}),
    event.remove({output: 'avaritia:infinity_pants'}),
    event.remove({output: 'avaritia:infinity_boots'})
  })
  

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_helmet',  [
  '555555555',
  '5 11111 5',
  '5 14341 5',
  '5 13231 5',
  '5 14341 5',
  '5 11111 5'

],  {
  1: 'avaritia:infinity_ingot', 
  2: 'mysticaladaptations:insanium_helmet',
  3: 'avaritia:infinity',
  4: 'avaritia:infinity_catalyst',
  5: 'avaritia:neutron_ingot'
}),
event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_chestplate',  [
  '5       5',
  '55     55',
  '551111155',
  '551434155',
  '551323155',
  '551434155',
  '551111155',
  '555555555',
  '555555555'
],  {
  1: 'avaritia:infinity_ingot', 
  2: 'mysticaladaptations:insanium_chestplate',
  3: 'avaritia:infinity',
  4: 'avaritia:infinity_catalyst',
  5: 'avaritia:neutron_ingot'
}),
event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_pants',  [
  '555555555',
  '5       5',
  '5 11111 5',
  '5 14341 5',
  '5 13231 5',
  '5 14341 5',
  '5 11111 5', 
  '5       5',
  '5       5'
],  {
  1: 'avaritia:infinity_ingot', 
  2: 'mysticaladaptations:insanium_leggings',
  3: 'avaritia:infinity',
  4: 'avaritia:infinity_catalyst',
  5: 'avaritia:neutron_ingot'
}),
event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_boots',  [
  '5 11111 5',
  '5 14341 5',
  '5 13231 5',
  '5 14341 5',
  '5 11111 5'
],  {
  1: 'avaritia:infinity_ingot', 
  2: 'mysticaladaptations:insanium_boots',
  3: 'avaritia:infinity',
  4: 'avaritia:infinity_catalyst',
  5: 'avaritia:neutron_ingot'
})
})