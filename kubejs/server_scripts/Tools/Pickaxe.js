ServerEvents.recipes(event => {
//Netherite
  event.remove({id: 'minecraft:netherite_pickaxe_smithing'})
  event.smithing('minecraft:netherite_pickaxe', 'minecraft:diamond_pickaxe', 'minecraft:netherite_block')
//AlltheModium
  event.remove({id: 'allthemodium:allthemodium_pickaxe'})
  event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_pickaxe',  [
    ' 44444 ',
    '5423245',
    '  262  ',
    '  414  ',
    '  414  ',
    '  414  ',
    '   5   '
  ],  {
    1: 'allthemodium:allthemodium_rod', 
    2: 'allthemodium:allthemodium_plate', 
    3: 'allthemodium:allthemodium_gear', 
    4: 'allthemodium:allthemodium_ingot',
    5: 'allthemodium:allthemodium_block',
    6: 'minecraft:netherite_pickaxe'})
//Inferium
  event.remove({id: 'mysticalagriculture:inferium_pickaxe'})
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_pickaxe',  [
    ' 44444 ',
    '3423243',
    '  171  ',
    '  121  ',
    '  626  ',
    '  626  ',
    '   5   '
  ],  {
    1: 'mysticalagriculture:inferium_ingot_block', 
    2: 'mysticalagriculture:inferium_ingot', 
    3: 'mysticalagriculture:inferium_gemstone_block', 
    4: 'mysticalagriculture:inferium_gemstone',
    5: 'mysticalagriculture:inferium_block',
    6: 'mysticalagriculture:inferium_essence',
    7: 'allthemodium:allthemodium_pickaxe'})
//Prudentium
  event.remove({id: 'mysticalagriculture:prudentium_pickaxe'})
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_pickaxe',  [
    ' 44444 ',
    '3423243',
    '  171  ',
    '  121  ',
    '  626  ',
    '  626  ',
    '   5   '
  ],  {
    1: 'mysticalagriculture:prudentium_ingot_block', 
    2: 'mysticalagriculture:prudentium_ingot', 
    3: 'mysticalagriculture:prudentium_gemstone_block', 
    4: 'mysticalagriculture:prudentium_gemstone',
    5: 'mysticalagriculture:prudentium_block',
    6: 'mysticalagriculture:prudentium_essence',
    7: 'mysticalagriculture:inferium_pickaxe'})
//Tertium
  event.remove({id: 'mysticalagriculture:tertium_pickaxe'})
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_pickaxe',  [
    ' 44444 ',
    '3423243',
    '  171  ',
    '  121  ',
    '  626  ',
    '  626  ',
    '   5   '
  ],  {
    1: 'mysticalagriculture:tertium_ingot_block', 
    2: 'mysticalagriculture:tertium_ingot', 
    3: 'mysticalagriculture:tertium_gemstone_block', 
    4: 'mysticalagriculture:tertium_gemstone',
    5: 'mysticalagriculture:tertium_block',
    6: 'mysticalagriculture:tertium_essence',
    7: 'mysticalagriculture:prudentium_pickaxe'})
//Imperium
event.remove({id: 'mysticalagriculture:imperium_pickaxe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_pickaxe',  [
  ' 44444 ',
  '3423243',
  '  171  ',
  '  121  ',
  '  626  ',
  '  626  ',
  '   5   '
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagriculture:tertium_pickaxe'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_pickaxe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_pickaxe',  [
  ' 5533355 ',
  '133171331',
  '31 616 13',
  '   646   ',
  '   626   ',
  '   626   ',
  '   626   ',
  '   646   ',
  '   666   '
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_pickaxe'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_pickaxe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_pickaxe',  [
  ' 5533355 ',
  '133171331',
  '31 616 13',
  '   646   ',
  '   626   ',
  '   626   ',
  '   626   ',
  '   646   ',
  '   666   '
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_pickaxe'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_pickaxe'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_pickaxe',  [
  ' 5533355 ',
  '133171331',
  '31 616 31',
  '   646   ',
  '   626   ',
  '   626   ',
  '   626   ',
  '   646   ',
  '   666   '
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_pickaxe'}) 
//Alloy Pickaxe
event.remove({id: 'allthemodium:alloy_pick'})
event.recipes.extendedcrafting.shaped_table ('allthemodium:alloy_pick',  [
  '   333   ',
  '  33333  ',
  '     342 ',
  '    11222',
  '   111 22',
  '  111  22',
  ' 111   2 ',
  ' 11      ',
  '1        '
],  {
  1: 'allthemodium:allthemodium_block', 
  2: 'allthemodium:vibranium_block', 
  3: 'allthemodium:unobtainium_block', 
  4: 'mysticaladaptations:insanium_pickaxe'})   
  })