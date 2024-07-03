ServerEvents.recipes(event => {
//Flux
  event.remove({id: 'redstone_arsenal:flux_bow'})
  event.smithing('redstone_arsenal:flux_bow', 'minecraft:bow', 'minecraft:netherite_block')
//Inferium
event.remove({id: 'mysticalagriculture:inferium_bow'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_bow',  [
  '    24 ',
  '   5 4 ',
  '  3  6 ',
  '  1 76 ',
  '  3  6 ',
  '   5 4 ',
  '    24 '
],  {
  1: 'mysticalagriculture:inferium_ingot_block', 
  2: 'mysticalagriculture:inferium_ingot', 
  3: 'mysticalagriculture:inferium_gemstone_block', 
  4: 'mysticalagriculture:inferium_gemstone',
  5: 'mysticalagriculture:inferium_block',
  6: 'mysticalagriculture:inferium_essence',
  7: 'redstone_arsenal:flux_bow'})
//Prudentium
event.remove({id: 'mysticalagriculture:prudentium_bow'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_bow',  [
  '    24 ',
  '   5 4 ',
  '  3  6 ',
  '  1 76 ',
  '  3  6 ',
  '   5 4 ',
  '    24 '
],  {
  1: 'mysticalagriculture:prudentium_ingot_block', 
  2: 'mysticalagriculture:prudentium_ingot', 
  3: 'mysticalagriculture:prudentium_gemstone_block', 
  4: 'mysticalagriculture:prudentium_gemstone',
  5: 'mysticalagriculture:prudentium_block',
  6: 'mysticalagriculture:prudentium_essence',
  7: 'mysticalagriculture:inferium_bow'})
//Tertium
event.remove({id: 'mysticalagriculture:tertium_bow'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_bow',  [
  '    24 ',
  '   5 4 ',
  '  3  6 ',
  '  1 76 ',
  '  3  6 ',
  '   5 4 ',
  '    24 '
],  {
  1: 'mysticalagriculture:tertium_ingot_block', 
  2: 'mysticalagriculture:tertium_ingot', 
  3: 'mysticalagriculture:tertium_gemstone_block', 
  4: 'mysticalagriculture:tertium_gemstone',
  5: 'mysticalagriculture:tertium_block',
  6: 'mysticalagriculture:tertium_essence',
  7: 'mysticalagriculture:prudentium_bow'})
//Imperium
event.remove({id: 'mysticalagriculture:imperium_bow'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_bow',  [
  '    24 ',
  '   5 4 ',
  '  3  6 ',
  '  1 76 ',
  '  3  6 ',
  '   5 4 ',
  '    24 '
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagriculture:tertium_bow'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_bow'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_bow',  [
  '  24',
  ' 5 6',
  '5  4',
  '3  6',
  '1 76',
  '3  6',
  '5  4',
  ' 5 6',
  '  24'
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_bow'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_bow'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_bow',  [
  '  24',
  ' 5 6',
  '5  4',
  '3  6',
  '1 76',
  '3  6',
  '5  4',
  ' 5 6',
  '  24'
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_bow'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_bow'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_bow',  [
  '  24',
  ' 5 6',
  '5  4',
  '3  6',
  '1 76',
  '3  6',
  '5  4',
  ' 5 6',
  '  24'
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_bow'})     

})