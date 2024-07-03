// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Normal
  event.remove({output: 'minecraft:golden_apple'})
  event.remove({output: 'minecraft:piston'})
  event.remove({output: 'minecraft:bucket'})
//id
  event.remove({id: 'minecraft:diorite'})
  event.remove({id: 'minecraft:andesite'})
  event.remove({id: 'minecraft:granite'})
  event.remove({id: 'minecraft:flint_and_steel'})
  event.remove({id: 'minecraft:ens_crying_obsidian'})

  event.shaped('8x minecraft:crying_obsidian',   ['111','121', '111'], {
    1: 'mysticalagriculture:obsidian_essence', 2: 'mysticalagriculture:nether_essence'})
})

//Add
  //Shaped
ServerEvents.recipes(event => {
  event.shaped('16x minecraft:stick', 
  ['1','1'], {
    1: '#minecraft:logs'}),
  event.shaped('minecraft:golden_apple', 
  ['111','121', '111'], {
    1: 'minecraft:gold_nugget',
    2: 'minecraft:apple'}),
  event.shaped('8x minecraft:golden_apple', 
  ['111','121', '111'], {
    1: '#forge:ingots/gold',
    2: 'minecraft:apple'}),
  event.shaped('minecraft:hopper', 
  ['121','121', ' 1 '], {
    2: '#minecraft:logs',
    1: '#forge:ingots/iron'}),
  event.shaped('2x minecraft:piston', 
  ['111','232', '242'], {    
    1: '#minecraft:logs',
    2: '#forge:cobblestone',
    3: '#forge:rods/iron',
    4: '#forge:dusts/redstone'}),
  event.shaped('8x minecraft:diorite', 
  ['111','121', '111'], {    
    1: 'minecraft:cobblestone',
    2: '#forge:gems/quartz'}),
  event.shaped('8x minecraft:andesite', 
  ['111','121', '111'], {    
    1: 'minecraft:granite',
    2: 'minecraft:cobblestone'}),
  event.shaped('8x minecraft:granite', 
  ['111','121', '111'], {    
    1: 'minecraft:diorite',
    2: '#forge:gems/quartz'}),
  event.shaped('minecraft:honey_block', 
  ['111','111','111'], {    
    1: 'minecraft:honeycomb'}),
  event.shaped('minecraft:bucket', 
  ['   ','1 1',' 1 '], {    
    1: '#forge:plates/iron'}),
  //Shapeless
  event.shapeless('9x minecraft:honeycomb', ['minecraft:honey_block']),

  //Smelting
  event.smelting('minecraft:leather', '9x minecraft:rotten_flesh' )

  //Mob Spawner
  event.shaped('minecraft:spawner', 
  ['121','232','121'], {1: 'minecraft:iron_bars', 2:'thermal_extra:dragonsteel_nugget', 3:'minecraft:totem_of_undying'})

  //Paper
  event.custom({"type": "thermal:pulverizer", "ingredient": {"tag": "forge:storage_blocks/sugar_cane"},
  "result": [{"item": "minecraft:paper", "count": 15}]})
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:storage_blocks/sugar_cane"}},"output":{"item":"minecraft:paper", "count": 15}})
  event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"tag":"forge:storage_blocks/sugar_cane"},"result":{"item":"minecraft:paper", "count": 15},"secondaries":[]})

})