ServerEvents.recipes(event => {
//Obsidian
  event.remove({id: 'cyclic:shears_obsidian'})
  event.smithing('cyclic:shears_obsidian', 'minecraft:shears', 'minecraft:netherite_block')
//Inferium
event.remove({id: 'mysticalagriculture:inferium_shears'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:inferium_shears',  [
  '   322 ',
  '  314 2',
  '  24 42',
  ' 52 413',
  '657223 ',
  ' 655   ',
  '6 6    '
],  {
  1: 'mysticalagriculture:inferium_ingot_block', 
  2: 'mysticalagriculture:inferium_ingot', 
  3: 'mysticalagriculture:inferium_gemstone_block', 
  4: 'mysticalagriculture:inferium_gemstone',
  5: 'mysticalagriculture:inferium_block',
  6: 'mysticalagriculture:inferium_essence',
  7: 'cyclic:shears_obsidian'})
//Prudentium
event.remove({id: 'mysticalagriculture:prudentium_shears'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:prudentium_shears',  [
  '   322 ',
  '  314 2',
  '  24 42',
  ' 52 413',
  '657223 ',
  ' 655   ',
  '6 6    '
],  {
  1: 'mysticalagriculture:prudentium_ingot_block', 
  2: 'mysticalagriculture:prudentium_ingot', 
  3: 'mysticalagriculture:prudentium_gemstone_block', 
  4: 'mysticalagriculture:prudentium_gemstone',
  5: 'mysticalagriculture:prudentium_block',
  6: 'mysticalagriculture:prudentium_essence',
  7: 'mysticalagriculture:inferium_shears'})
//Tertium
event.remove({id: 'mysticalagriculture:tertium_shears'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:tertium_shears',  [
  '   322 ',
  '  314 2',
  '  24 42',
  ' 52 413',
  '657223 ',
  ' 655   ',
  '6 6    '
],  {
  1: 'mysticalagriculture:tertium_ingot_block', 
  2: 'mysticalagriculture:tertium_ingot', 
  3: 'mysticalagriculture:tertium_gemstone_block', 
  4: 'mysticalagriculture:tertium_gemstone',
  5: 'mysticalagriculture:tertium_block',
  6: 'mysticalagriculture:tertium_essence',
  7: 'mysticalagriculture:prudentium_shears'})
//Imperium
event.remove({id: 'mysticalagriculture:imperium_shears'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:imperium_shears',  [
  '   322 ',
  '  314 2',
  '  24 42',
  ' 52 413',
  '657223 ',
  ' 655   ',
  '6 6    '
],  {
  1: 'mysticalagriculture:imperium_ingot_block', 
  2: 'mysticalagriculture:imperium_ingot', 
  3: 'mysticalagriculture:imperium_gemstone_block', 
  4: 'mysticalagriculture:imperium_gemstone',
  5: 'mysticalagriculture:imperium_block',
  6: 'mysticalagriculture:imperium_essence',
  7: 'mysticalagriculture:tertium_shears'})
//Supremium
event.remove({id: 'mysticalagriculture:supremium_shears'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:supremium_shears',  [
  '     322 ',
  '    314 2',
  '    24 42',
  '   52 413',
  '  657223 ',
  '   655   ',
  '  6 6    ',
  '36       ',
  '33       '
],  {
  1: 'mysticalagriculture:supremium_ingot_block', 
  2: 'mysticalagriculture:supremium_ingot', 
  3: 'mysticalagriculture:supremium_gemstone_block', 
  4: 'mysticalagriculture:supremium_gemstone',
  5: 'mysticalagriculture:supremium_block',
  6: 'mysticalagriculture:supremium_essence',
  7: 'mysticalagriculture:imperium_shears'})
//Awakened Supremium
event.remove({id: 'mysticalagriculture:awakened_supremium_shears'})
event.recipes.extendedcrafting.shaped_table ('mysticalagriculture:awakened_supremium_shears',  [
  '     322 ',
  '    314 2',
  '    24 42',
  '   52 413',
  '  657223 ',
  '   655   ',
  '  6 6    ',
  '36       ',
  '33       '
],  {
  1: 'mysticalagriculture:awakened_supremium_ingot_block', 
  2: 'mysticalagriculture:awakened_supremium_ingot', 
  3: 'mysticalagriculture:awakened_supremium_gemstone_block', 
  4: 'mysticalagriculture:awakened_supremium_gemstone',
  5: 'mysticalagriculture:awakened_supremium_block',
  6: 'mysticalagriculture:awakened_supremium_essence',
  7: 'mysticalagriculture:supremium_shears'})
//Insanium
event.remove({id: 'mysticaladaptations:insanium_shears'})
event.recipes.extendedcrafting.shaped_table ('mysticaladaptations:insanium_shears',  [
  '     322 ',
  '    314 2',
  '    24 42',
  '   52 413',
  '  657223 ',
  '   655   ',
  '  6 6    ',
  '36       ',
  '33       '
],  {
  1: 'mysticalagradditions:insanium_ingot_block', 
  2: 'mysticalagradditions:insanium_ingot', 
  3: 'mysticalagradditions:insanium_gemstone_block', 
  4: 'mysticalagradditions:insanium_gemstone',
  5: 'mysticalagradditions:insanium_block',
  6: 'mysticalagradditions:insanium_essence',
  7: 'mysticalagriculture:awakened_supremium_shears'})
})