ServerEvents.recipes(event => {
//Flux
  event.remove({id: 'redstone_arsenal:flux_fishing_rod'})
  event.smithing('redstone_arsenal:flux_fishing_rod', 'minecraft:fishing_rod', 'minecraft:netherite_block')
//Inferium
event.remove({id: 'mysticalagriculture:inferium_fishing_rod'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_fishing_rod',  [
  '     53',
  '    213',
  '   27 6',
  '  21  6',
  ' 23  6 ',
  ' 6   6 ',
  '5   4  '
],  {
  1: 'mysticalagriculture:inferium_ingot_block', 
  2: 'mysticalagriculture:inferium_ingot', 
  3: 'mysticalagriculture:inferium_gemstone_block', 
  4: 'mysticalagriculture:inferium_gemstone',
  5: 'mysticalagriculture:inferium_block',
  6: 'mysticalagriculture:inferium_essence',
  7: 'redstone_arsenal:flux_fishing_rod'})
//Prudentium
event.remove({id: 'mysticalagriculture:prudentium_fishing_rod'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_fishing_rod',  [
  '     53',
  '    213',
  '   27 6',
  '  21  6',
  ' 23  6 ',
  ' 6   6 ',
  '5   4  '
],  {
  1: 'mysticalagriculture:prudentium_ingot_block', 
  2: 'mysticalagriculture:prudentium_ingot', 
  3: 'mysticalagriculture:prudentium_gemstone_block', 
  4: 'mysticalagriculture:prudentium_gemstone',
  5: 'mysticalagriculture:prudentium_block',
  6: 'mysticalagriculture:prudentium_essence',
  7: 'mysticalagriculture:inferium_fishing_rod'})
//Tertium
event.remove({id: 'mysticalagriculture:tertium_fishing_rod'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_fishing_rod',  [
  '     53',
  '    213',
  '   27 6',
  '  21  6',
  ' 23  6 ',
  ' 6   6 ',
  '5   4  '
],  {
  1: 'mysticalagriculture:tertium_ingot_block', 
  2: 'mysticalagriculture:tertium_ingot', 
  3: 'mysticalagriculture:tertium_gemstone_block', 
  4: 'mysticalagriculture:tertium_gemstone',
  5: 'mysticalagriculture:tertium_block',
  6: 'mysticalagriculture:tertium_essence',
  7: 'mysticalagriculture:prudentium_fishing_rod'})
//Imperium
event.remove({id: 'mysticalagriculture:imperium_fishing_rod'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_fishing_rod',  [
  '     53',
  '    213',
  '   27 6',
  '  21  6',
  ' 23  6 ',
  ' 6   6 ',
  '5   4  ',
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagriculture:tertium_fishing_rod'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_fishing_rod'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_fishing_rod',  [
  '       53',
  '      213',
  '     27 6',
  '    21  6',
  '   23  6 ',
  '   6   6 ',
  '  5   4  ',
  ' 5   4   ',
  '5        '
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_fishing_rod'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_fishing_rod'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_fishing_rod',  [
  '       53',
  '      213',
  '     27 6',
  '    21  6',
  '   23  6 ',
  '   6   6 ',
  '  5   4  ',
  ' 5   4   ',
  '5        '
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_fishing_rod'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_fishing_rod'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_fishing_rod',  [
  '       53',
  '      213',
  '     27 6',
  '    21  6',
  '   23  6 ',
  '   6   6 ',
  '  5   4  ',
  ' 5   4   ',
  '5        '
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_fishing_rod'})     

})