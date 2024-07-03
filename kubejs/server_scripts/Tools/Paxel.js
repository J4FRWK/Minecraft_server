ServerEvents.recipes(event => {
//Netherite
  event.remove({id: 'mekanismtools:netherite_paxel'})
  event.smithing('mekanismtools:netherite_paxel', 'mekanismtools:diamond_paxel', 'minecraft:netherite_block')
//Inferium
event.remove({id: 'mysticalagradditions:inferium_paxel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagradditions:inferium_paxel',  [
  '1154511',
  '3839303',
  '4252524',
  '  474  ',
  '  464  ',
  '  464  ',
  '  464  '
],  {
  1: 'mysticalagriculture:inferium_ingot_block', 
  2: 'mysticalagriculture:inferium_ingot', 
  3: 'mysticalagriculture:inferium_gemstone_block', 
  4: 'mysticalagriculture:inferium_gemstone',
  5: 'mysticalagriculture:inferium_block',
  6: 'mysticalagriculture:inferium_essence',
  7: 'mekanismtools:netherite_paxel',
  8: 'mysticalagriculture:inferium_axe',
  9: 'mysticalagriculture:inferium_shovel',
  0: 'mysticalagriculture:inferium_pickaxe'})
//Prudentium
event.remove({id: 'mysticalagradditions:prudentium_paxel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagradditions:prudentium_paxel',  [
  '1154511',
  '3839303',
  '4252524',
  '  474  ',
  '  464  ',
  '  464  ',
  '  464  '
],  {
  1: 'mysticalagriculture:prudentium_ingot_block', 
  2: 'mysticalagriculture:prudentium_ingot', 
  3: 'mysticalagriculture:prudentium_gemstone_block', 
  4: 'mysticalagriculture:prudentium_gemstone',
  5: 'mysticalagriculture:prudentium_block',
  6: 'mysticalagriculture:prudentium_essence',
  7: 'mysticalagradditions:inferium_paxel',
  8: 'mysticalagriculture:prudentium_axe',
  9: 'mysticalagriculture:prudentium_shovel',
  0: 'mysticalagriculture:prudentium_pickaxe'})
//Tertium
event.remove({id: 'mysticalagradditions:tertium_paxel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagradditions:tertium_paxel',  [
  '1154511',
  '3839303',
  '4252524',
  '  474  ',
  '  464  ',
  '  464  ',
  '  464  '
],  {
  1: 'mysticalagriculture:tertium_ingot_block', 
  2: 'mysticalagriculture:tertium_ingot', 
  3: 'mysticalagriculture:tertium_gemstone_block', 
  4: 'mysticalagriculture:tertium_gemstone',
  5: 'mysticalagriculture:tertium_block',
  6: 'mysticalagriculture:tertium_essence',
  7: 'mysticalagradditions:prudentium_paxel',
  8: 'mysticalagriculture:tertium_axe',
  9: 'mysticalagriculture:tertium_shovel',
  0: 'mysticalagriculture:tertium_pickaxe'})
//Imperium
event.remove({id: 'mysticalagradditions:imperium_paxel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagradditions:imperium_paxel',  [
  '1154511',
  '3839303',
  '4252524',
  '  474  ',
  '  464  ',
  '  464  ',
  '  464  '
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagradditions:tertium_paxel',
  8: 'mysticalagriculture:imperium_axe',
  9: 'mysticalagriculture:imperium_shovel',
  0: 'mysticalagriculture:imperium_pickaxe'})
//Supremium
event.remove({id: 'mysticalagradditions:supremium_paxel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagradditions:supremium_paxel',  [
  '111545111',
  '338393033',
  '442525244',
  '   474   ',
  '   464   ',
  '   464   ',
  '   464   ',
  '   464   ',
  '   464   '
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagradditions:imperium_paxel',
  8: 'mysticalagriculture:supremium_axe',
  9: 'mysticalagriculture:supremium_shovel',
  0: 'mysticalagriculture:supremium_pickaxe'})
//Awakened Supremium
event.remove({id: 'mysticalagradditions:awakened_supremium_paxel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagradditions:awakened_supremium_paxel',  [
  '111545111',
  '338393033',
  '442525244',
  '   474   ',
  '   464   ',
  '   464   ',
  '   464   ',
  '   464   ',
  '   464   '
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagradditions:supremium_paxel',
  8: 'mysticalagriculture:awakened_supremium_axe',
  9: 'mysticalagriculture:awakened_supremium_shovel',
  0: 'mysticalagriculture:awakened_supremium_pickaxe'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_paxel'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_paxel',  [
  '111545111',
  '338393033',
  '442525244',
  '   474   ',
  '   464   ',
  '   464   ',
  '   464   ',
  '   464   ',
  '   464   '
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagradditions:awakened_supremium_paxel',
  8: 'mysticaladaptations:insanium_axe',
  9: 'mysticaladaptations:insanium_shovel',
  0: 'mysticaladaptations:insanium_pickaxe'})
//Alloy Paxel
event.remove({id: 'allthemodium:alloy_paxel'})
event.recipes.extendedcrafting.shaped_table ('allthemodium:alloy_paxel',  [
  '   3333  ',
  '  333332 ',
  '  33 1422',
  '  3 11122',
  '   171  2',
  '  161    ',
  ' 151     ',
  ' 11      ',
  '1        '
],  {
  1: 'allthemodium:allthemodium_block', 
  2: 'allthemodium:vibranium_block', 
  3: 'allthemodium:unobtainium_block', 
  4: 'mysticaladaptations:insanium_paxel',
  5: 'allthemodium:alloy_pick',
  6: 'allthemodium:alloy_shovel',
  7: 'allthemodium:alloy_axe'})   


})