ServerEvents.recipes(event => {
//Netherite
  event.remove({id: 'minecraft:netherite_hoe_smithing'})
  event.smithing('minecraft:netherite_hoe', 'minecraft:diamond_hoe', 'minecraft:netherite_block')
//AllTheModium  
  event.remove({id: 'allthemodium:allthemodium_hoe'})
  event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_hoe',  [
    '   444 ',
    '  4 534',
    '    262',
    '    414',
    '    414',
    '    414',
    '     5 '
  ],  {
    1: 'allthemodium:allthemodium_rod', 
    2: 'allthemodium:allthemodium_plate', 
    3: 'allthemodium:allthemodium_gear', 
    4: 'allthemodium:allthemodium_ingot',
    5: 'allthemodium:allthemodium_block',
    6: 'minecraft:netherite_hoe'})
//Inferium
event.remove({id: 'mysticalagriculture:inferium_hoe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_hoe',  [
  '   222 ',
  '  2 462',
  '    171',
  '    464',
  '    363',
  '    363',
  '     5 '
],  {
  1: 'mysticalagriculture:inferium_ingot_block', 
  2: 'mysticalagriculture:inferium_ingot', 
  3: 'mysticalagriculture:inferium_gemstone_block', 
  4: 'mysticalagriculture:inferium_gemstone',
  5: 'mysticalagriculture:inferium_block',
  6: 'mysticalagriculture:inferium_essence',
  7: 'allthemodium:allthemodium_hoe'})
//Prudentium
event.remove({id: 'mysticalagriculture:prudentium_hoe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_hoe',  [
  '   222 ',
  '  2 462',
  '    171',
  '    464',
  '    363',
  '    363',
  '     5 '
],  {
  1: 'mysticalagriculture:prudentium_ingot_block', 
  2: 'mysticalagriculture:prudentium_ingot', 
  3: 'mysticalagriculture:prudentium_gemstone_block', 
  4: 'mysticalagriculture:prudentium_gemstone',
  5: 'mysticalagriculture:prudentium_block',
  6: 'mysticalagriculture:prudentium_essence',
  7: 'mysticalagriculture:inferium_hoe'})
//Tertium
event.remove({id: 'mysticalagriculture:tertium_hoe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_hoe',  [
  '   222 ',
  '  2 462',
  '    171',
  '    464',
  '    363',
  '    363',
  '     5 '
],  {
  1: 'mysticalagriculture:tertium_ingot_block', 
  2: 'mysticalagriculture:tertium_ingot', 
  3: 'mysticalagriculture:tertium_gemstone_block', 
  4: 'mysticalagriculture:tertium_gemstone',
  5: 'mysticalagriculture:tertium_block',
  6: 'mysticalagriculture:tertium_essence',
  7: 'mysticalagriculture:prudentium_hoe'})
//Imperium
event.remove({id: 'mysticalagriculture:imperium_hoe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_hoe',  [
  '   222 ',
  '  2 462',
  '    171',
  '    464',
  '    363',
  '    363',
  '     5 '
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagriculture:tertium_hoe'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_hoe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_hoe',  [
  '     6 ',
  ' 333355',
  '3111175',
  '3   646',
  '    626',
  '    646',
  '    626',
  '    646',
  '    666'
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_hoe'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_hoe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_hoe',  [
  '     6 ',
  ' 333355',
  '3111175',
  '3   646',
  '    626',
  '    646',
  '    626',
  '    646',
  '    666'
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_hoe'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_hoe'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_hoe',  [
  '     6 ',
  ' 333355',
  '3111175',
  '3   646',
  '    626',
  '    646',
  '    626',
  '    646',
  '    666'
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_hoe'})

})