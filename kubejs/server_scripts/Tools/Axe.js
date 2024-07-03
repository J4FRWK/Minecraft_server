ServerEvents.recipes(event => {
//Netherite
  event.remove({id: 'minecraft:netherite_axe_smithing'})
  event.smithing('minecraft:netherite_axe', 'minecraft:diamond_axe', 'minecraft:netherite_block')
//AllTheModium
  event.remove({id: 'allthemodium:allthemodium_axe'})
  event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_axe',  [
    '  5    ',
    ' 5444  ',
    ' 5432  ',
    '  562  ',
    '  414  ',
    '  414  ',
    '   5   '
  ],  {
    1: 'allthemodium:allthemodium_rod', 
    2: 'allthemodium:allthemodium_plate', 
    3: 'allthemodium:allthemodium_gear', 
    4: 'allthemodium:allthemodium_ingot',
    5: 'allthemodium:allthemodium_block',
    6: 'minecraft:netherite_axe'})
//Inferium
event.remove({id: 'mysticalagriculture:inferium_axe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_axe',  [
  '  1    ',
  ' 1444  ',
  ' 1433  ',
  '  173  ',
  '  262  ',
  '  262  ',
  '   5   '
],  {
  1: 'mysticalagriculture:inferium_ingot_block', 
  2: 'mysticalagriculture:inferium_ingot', 
  3: 'mysticalagriculture:inferium_gemstone_block', 
  4: 'mysticalagriculture:inferium_gemstone',
  5: 'mysticalagriculture:inferium_block',
  6: 'mysticalagriculture:inferium_essence',
  7: 'allthemodium:allthemodium_axe'})
//Prudentium
event.remove({id: 'mysticalagriculture:prudentium_axe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_axe',  [
  '  1    ',
  ' 1444  ',
  ' 1433  ',
  '  173  ',
  '  262  ',
  '  262  ',
  '   5   '
],  {
  1: 'mysticalagriculture:prudentium_ingot_block', 
  2: 'mysticalagriculture:prudentium_ingot', 
  3: 'mysticalagriculture:prudentium_gemstone_block', 
  4: 'mysticalagriculture:prudentium_gemstone',
  5: 'mysticalagriculture:prudentium_block',
  6: 'mysticalagriculture:prudentium_essence',
  7: 'mysticalagriculture:inferium_axe'})
//Tertium
event.remove({id: 'mysticalagriculture:tertium_axe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_axe',  [
  '  1    ',
  ' 1444  ',
  ' 1433  ',
  '  173  ',
  '  262  ',
  '  262  ',
  '   5   '
],  {
  1: 'mysticalagriculture:tertium_ingot_block', 
  2: 'mysticalagriculture:tertium_ingot', 
  3: 'mysticalagriculture:tertium_gemstone_block', 
  4: 'mysticalagriculture:tertium_gemstone',
  5: 'mysticalagriculture:tertium_block',
  6: 'mysticalagriculture:tertium_essence',
  7: 'mysticalagriculture:prudentium_axe'})
//Imperium
event.remove({id: 'mysticalagriculture:imperium_axe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_axe',  [
  '  1    ',
  ' 1444  ',
  ' 1433  ',
  '  173  ',
  '  262  ',
  '  262  ',
  '   5   '
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagriculture:tertium_axe'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_axe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_axe',  [
  ' 3   ',
  '31155',
  '3175 ',
  ' 36  ',
  ' 626 ',
  ' 646 ',
  ' 626 ',
  ' 646 ',
  '  6  '
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_axe'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_axe'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_axe',  [
  ' 3   ',
  '31155',
  '3175 ',
  ' 36  ',
  ' 626 ',
  ' 646 ',
  ' 626 ',
  ' 646 ',
  '  6  '
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_axe'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_axe'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_axe',  [
  ' 3   ',
  '31155',
  '3175 ',
  ' 36  ',
  ' 626 ',
  ' 646 ',
  ' 626 ',
  ' 646 ',
  '  6  '
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_axe'})
//Alloy Axe
event.remove({id: 'allthemodium:alloy_axe'})
event.recipes.extendedcrafting.shaped_table ('allthemodium:alloy_axe',  [
  '     3311',
  '    33311',
  '    33422',
  '    11222',
  '   11122 ',
  '  111    ',
  ' 111     ',
  ' 11      ',
  '1        '
],  {
  1: 'allthemodium:allthemodium_block', 
  2: 'allthemodium:vibranium_block', 
  3: 'allthemodium:unobtainium_block', 
  4: 'mysticaladaptations:insanium_axe'})   
})