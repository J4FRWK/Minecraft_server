ServerEvents.recipes(event => {
//Netherite
  event.remove({id: 'minecraft:netherite_shovel_smithing'})
  event.smithing('minecraft:netherite_shovel', 'minecraft:diamond_shovel', 'minecraft:netherite_block')
//AllTheModium
  event.remove({id: 'allthemodium:allthemodium_shovel'})
  event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_shovel',  [
    '    544',
    '   2434',
    '   4645',
    '  4142 ',
    ' 414   ',
    ' 14    ',
    '5      '
  ],  {
    1: 'allthemodium:allthemodium_rod', 
    2: 'allthemodium:allthemodium_plate', 
    3: 'allthemodium:allthemodium_gear', 
    4: 'allthemodium:allthemodium_ingot',
    5: 'allthemodium:allthemodium_block',
    6: 'minecraft:netherite_shovel'})
//Inferium
event.remove({id: 'mysticalagriculture:inferium_shovel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_shovel',  [
  '    522',
  '   3112',
  '   4715',
  '  4643 ',
  ' 464   ',
  ' 54    ',
  '5      '
],  {
  1: 'mysticalagriculture:inferium_ingot_block', 
  2: 'mysticalagriculture:inferium_ingot', 
  3: 'mysticalagriculture:inferium_gemstone_block', 
  4: 'mysticalagriculture:inferium_gemstone',
  5: 'mysticalagriculture:inferium_block',
  6: 'mysticalagriculture:inferium_essence',
  7: 'allthemodium:allthemodium_shovel'})
//Prudentium
event.remove({id: 'mysticalagriculture:prudentium_shovel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_shovel',  [
  '    522',
  '   3112',
  '   4715',
  '  4643 ',
  ' 464   ',
  ' 54    ',
  '5      '
],  {
  1: 'mysticalagriculture:prudentium_ingot_block', 
  2: 'mysticalagriculture:prudentium_ingot', 
  3: 'mysticalagriculture:prudentium_gemstone_block', 
  4: 'mysticalagriculture:prudentium_gemstone',
  5: 'mysticalagriculture:prudentium_block',
  6: 'mysticalagriculture:prudentium_essence',
  7: 'mysticalagriculture:inferium_shovel'})
//Tertium
event.remove({id: 'mysticalagriculture:tertium_shovel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_shovel',  [
  '    522',
  '   3112',
  '   4715',
  '  4643 ',
  ' 464   ',
  ' 54    ',
  '5      '
],  {
  1: 'mysticalagriculture:tertium_ingot_block', 
  2: 'mysticalagriculture:tertium_ingot', 
  3: 'mysticalagriculture:tertium_gemstone_block', 
  4: 'mysticalagriculture:tertium_gemstone',
  5: 'mysticalagriculture:tertium_block',
  6: 'mysticalagriculture:tertium_essence',
  7: 'mysticalagriculture:prudentium_shovel'})
//Imperium
event.remove({id: 'mysticalagriculture:imperium_shovel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_shovel',  [
  '    522',
  '   3112',
  '   4715',
  '  4643 ',
  ' 464   ',
  ' 54    ',
  '5      '
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagriculture:tertium_shovel'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_shovel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_shovel',  [
  '      513',
  '     5131',
  '     6715',
  '    6465 ',
  '   626   ',
  '  646    ',
  ' 626     ',
  '646      ',
  '66       '
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_shovel'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_shovel'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_shovel',  [
  '      513',
  '     5131',
  '     6715',
  '    6465 ',
  '   626   ',
  '  646    ',
  ' 626     ',
  '646      ',
  '66       '
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_shovel'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_shovel'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_shovel',  [
  '      513',
  '     5131',
  '     6715',
  '    6465 ',
  '   626   ',
  '  646    ',
  ' 626     ',
  '646      ',
  '66       '
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_shovel'})
//Alloy Shovel
event.remove({id: 'allthemodium:alloy_shovel'})
event.recipes.extendedcrafting.shaped_table ('allthemodium:alloy_shovel',  [
  '     3332',
  '    33322',
  '   333422',
  '    11222',
  '   11122 ',
  '  111 2  ',
  ' 111     ',
  ' 11      ',
  '1        '
],  {
  1: 'allthemodium:allthemodium_block', 
  2: 'allthemodium:vibranium_block', 
  3: 'allthemodium:unobtainium_block', 
  4: 'mysticaladaptations:insanium_shovel'})   
})