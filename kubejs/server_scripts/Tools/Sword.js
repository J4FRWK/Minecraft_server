ServerEvents.recipes(event => {
//Netherite
  event.remove({id: 'minecraft:netherite_sword_smithing'})
  event.smithing('minecraft:netherite_sword', 'minecraft:diamond_sword', 'minecraft:netherite_block')
//AlltheModium//
  event.remove({id: 'allthemodium:allthemodium_sword'})
  event.recipes.extendedcrafting.shaped_table ('allthemodium:allthemodium_sword',  [
    '     25',
    '    142',
    '5  141 ',
    ' 2131  ',
    ' 461   ',
    '4142   ',
    '54  5  '
  ],  {
    1: 'allthemodium:allthemodium_rod', 
    2: 'allthemodium:allthemodium_plate', 
    3: 'allthemodium:allthemodium_gear', 
    4: 'allthemodium:allthemodium_ingot',
    5: 'allthemodium:allthemodium_block',
    6: 'minecraft:netherite_sword'})
//Inferium
  event.remove({id: 'mysticalagriculture:inferium_sword'})
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_sword',  [
    '     13',
    '    121',
    '3  421 ',
    ' 2424  ',
    ' 674   ',
    '6262   ',
    '56  3  '
  ],  {
    1: 'mysticalagriculture:inferium_ingot_block', 
    2: 'mysticalagriculture:inferium_ingot', 
    3: 'mysticalagriculture:inferium_gemstone_block', 
    4: 'mysticalagriculture:inferium_gemstone',
    5: 'mysticalagriculture:inferium_block',
    6: 'mysticalagriculture:inferium_essence',
    7: 'allthemodium:allthemodium_sword'})
//Prudentium
  event.remove({id: 'mysticalagriculture:prudentium_sword'})
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_sword',  [
    '     13',
    '    121',
    '3  421 ',
    ' 2424  ',
    ' 674   ',
    '6262   ',
    '56  3  '
  ],  {
    1: 'mysticalagriculture:prudentium_ingot_block', 
    2: 'mysticalagriculture:prudentium_ingot', 
    3: 'mysticalagriculture:prudentium_gemstone_block', 
    4: 'mysticalagriculture:prudentium_gemstone',
    5: 'mysticalagriculture:prudentium_block',
    6: 'mysticalagriculture:prudentium_essence',
    7: 'mysticalagriculture:inferium_sword'})
//Tertium
  event.remove({id: 'mysticalagriculture:tertium_sword'})
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_sword',  [
    '     13',
    '    121',
    '3  421 ',
    ' 2424  ',
    ' 674   ',
    '6262   ',
    '56  3  '
  ],  {
    1: 'mysticalagriculture:tertium_ingot_block', 
    2: 'mysticalagriculture:tertium_ingot', 
    3: 'mysticalagriculture:tertium_gemstone_block', 
    4: 'mysticalagriculture:tertium_gemstone',
    5: 'mysticalagriculture:tertium_block',
    6: 'mysticalagriculture:tertium_essence',
    7: 'mysticalagriculture:prudentium_sword'})
//Imperium
  event.remove({id: 'mysticalagriculture:imperium_sword'})
  event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_sword',  [
    '     13',
    '    121',
    '3  421 ',
    ' 2424  ',
    ' 674   ',
    '6262   ',
    '56  3  '
  ],  {
    1: 'mysticalagriculture:imperium_ingot_block', 
    2: 'mysticalagriculture:imperium_ingot', 
    3: 'mysticalagriculture:imperium_gemstone_block', 
    4: 'mysticalagriculture:imperium_gemstone',
    5: 'mysticalagriculture:imperium_block',
    6: 'mysticalagriculture:imperium_essence',
    7: 'mysticalagriculture:tertium_sword'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_sword'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_sword',  [
  '       34',
  '      313',
  '     653 ',
  '    356  ',
  ' 2 313   ',
  '  243    ',
  ' 672     ',
  '646 2    ',
  '46       '
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_sword'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_sword'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_sword',  [
  '       34',
  '      313',
  '     653 ',
  '    356  ',
  ' 2 313   ',
  '  243    ',
  ' 672     ',
  '646 2    ',
  '46       '
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_sword'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_sword'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_sword',  [
  '       34',
  '      313',
  '     653 ',
  '    356  ',
  ' 2 313   ',
  '  243    ',
  ' 672     ',
  '646 2    ',
  '46       '
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_sword'})
//Alloy Sword
event.remove({id: 'allthemodium:alloy_sword'})
event.recipes.extendedcrafting.shaped_table ('allthemodium:alloy_sword',  [
  '       33',
  '      332',
  '     332 ',
  ' 1  322  ',
  ' 1 322   ',
  '  142    ',
  ' 111     ',
  ' 11 11   ',
  '1        '
],  {
  1: 'allthemodium:allthemodium_block', 
  2: 'allthemodium:vibranium_block', 
  3: 'allthemodium:unobtainium_block', 
  4: 'mysticaladaptations:insanium_sword'})   
  
})