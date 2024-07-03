ServerEvents.recipes(event => {
//Netherite
  event.remove({id: 'mysticalagriculture:diamond_sickle'})
  event.remove({id: 'pickletweaks:netherite_sickle'})
  event.smithing('pickletweaks:netherite_sickle', 'pickletweaks:diamond_sickle', 'minecraft:netherite_block')
//Inferium
event.remove({id: 'mysticalagriculture:inferium_sickle'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_sickle',  [
  '   511 ',
  '  4   3',
  '     73',
  '   2  3',
  ' 42 11 ',
  '464    ',
  '64     '
],  {
  1: 'mysticalagriculture:inferium_ingot_block', 
  2: 'mysticalagriculture:inferium_ingot', 
  3: 'mysticalagriculture:inferium_gemstone_block', 
  4: 'mysticalagriculture:inferium_gemstone',
  5: 'mysticalagriculture:inferium_block',
  6: 'mysticalagriculture:inferium_essence',
  7: 'pickletweaks:netherite_sickle'})
//Prudentium
event.remove({id: 'mysticalagriculture:prudentium_sickle'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_sickle',  [
  '   511 ',
  '  4   3',
  '     73',
  '   2  3',
  ' 42 11 ',
  '464    ',
  '64     '
],  {
  1: 'mysticalagriculture:prudentium_ingot_block', 
  2: 'mysticalagriculture:prudentium_ingot', 
  3: 'mysticalagriculture:prudentium_gemstone_block', 
  4: 'mysticalagriculture:prudentium_gemstone',
  5: 'mysticalagriculture:prudentium_block',
  6: 'mysticalagriculture:prudentium_essence',
  7: 'mysticalagriculture:inferium_sickle'})
//Tertium
event.remove({id: 'mysticalagriculture:tertium_sickle'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_sickle',  [
  '   511 ',
  '  4   3',
  '     73',
  '   2  3',
  ' 42 11 ',
  '464    ',
  '64     '
],  {
  1: 'mysticalagriculture:tertium_ingot_block', 
  2: 'mysticalagriculture:tertium_ingot', 
  3: 'mysticalagriculture:tertium_gemstone_block', 
  4: 'mysticalagriculture:tertium_gemstone',
  5: 'mysticalagriculture:tertium_block',
  6: 'mysticalagriculture:tertium_essence',
  7: 'mysticalagriculture:prudentium_sickle'})
//Imperium
event.remove({id: 'mysticalagriculture:imperium_sickle'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_sickle',  [
  '   511 ',
  '  4   3',
  '     73',
  '   2  3',
  ' 42 11 ',
  '464    ',
  '64     '
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagriculture:tertium_sickle'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_sickle'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_sickle',  [
  '     511 ',
  '    4   3',
  '       73',
  '     2  3',
  '   42 11 ',
  '  464    ',
  '  64     ',
  '36       ',
  '33       '
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_sickle'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_sickle'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_sickle',  [
  '     511 ',
  '    4   3',
  '       73',
  '     2  3',
  '   42 11 ',
  '  464    ',
  '  64     ',
  '36       ',
  '33       '
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_sickle'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_sickle'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_sickle',  [
  '     511 ',
  '    4   3',
  '       73',
  '     2  3',
  '   42 11 ',
  '  464    ',
  '  64     ',
  '36       ',
  '33       '
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_sickle'})

})