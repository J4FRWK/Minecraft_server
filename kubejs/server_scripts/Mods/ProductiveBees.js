// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'productivebees:oak_wood_nest'}),
  event.remove({output: 'productivebees:spruce_wood_nest'}),
  event.remove({output: 'productivebees:dark_oak_wood_nest'}),
  event.remove({output: 'productivebees:birch_wood_nest'}),
  event.remove({output: 'productivebees:jungle_wood_nest'}),
  event.remove({output: 'productivebees:acacia_wood_nest'}),
  event.remove({output: 'productivebees:stone_nest'}),
  event.remove({output: 'productivebees:coarse_dirt_nest'}),
  event.remove({output: 'productivebees:sand_nest'}),
  event.remove({output: 'productivebees:snow_nest'}),
  event.remove({output: 'productivebees:gravel_nest'}),
  event.remove({output: 'productivebees:slimy_nest'}),
  event.remove({output: 'productivebees:end_stone_nest'}),
  event.remove({output: 'productivebees:bumble_bee_nest'}),
  event.remove({output: 'productivebees:obsidian_nest'}),
  event.remove({output: 'productivebees:nether_gold_nest'}),
  event.remove({output: 'productivebees:nether_quartz_nest'}),
  event.remove({output: 'productivebees:nether_brick_nest'}),
  event.remove({output: 'productivebees:soul_sand_nest'}),
  event.remove({output: 'productivebees:glowstone_nest'}),
  event.remove({output: 'productivebees:sugar_cane_nest'}),
  event.remove({output: 'productivebees:bamboo_hive'})
  event.remove({id: 'the_bumblezone:carvable_wax/from_honeycomb'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('productivebees:oak_wood_nest', 
  ['111','121','111'], {
    1: 'minecraft:oak_log', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:spruce_wood_nest', 
  ['111','121','111'], {
    1: 'minecraft:spruce_log', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:dark_oak_wood_nest', 
  ['111','121','111'], {
    1: 'minecraft:dark_oak_log', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:birch_wood_nest', 
  ['111','121','111'], {
    1: 'minecraft:birch_log', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:jungle_wood_nest', 
  ['111','121','111'], {
    1: 'minecraft:jungle_log', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:acacia_wood_nest', 
  ['111','121','111'], {
    1: 'minecraft:acacia_log', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:stone_nest', 
  ['111','121','111'], {
    1: 'minecraft:stone', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:coarse_dirt_nest', 
  ['111','121','111'], {
    1: 'minecraft:dirt', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:sand_nest', 
  ['111','121','111'], {
    1: 'minecraft:sand', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:snow_nest', 
  ['111','121','111'], {
    1: 'minecraft:snow_block', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:gravel_nest', 
  ['111','121','111'], {
    1: 'minecraft:gravel', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:slimy_nest', 
  ['111','121','111'], {
    1: 'minecraft:slime_block', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:end_stone_nest', 
  ['111','121','111'], {
    1: 'minecraft:end_stone', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:bumble_bee_nest', 
  ['111','121','111'], {
    1: 'minecraft:grass_block', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:obsidian_nest', 
  ['111','121','111'], {
    1: 'minecraft:obsidian', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:nether_gold_nest', 
  ['111','121','111'], {
    1: '#forge:ingots/gold', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:nether_quartz_nest', 
  ['111','121','111'], {
    1: '#forge:gems/quartz', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:nether_brick_nest', 
  ['111','121','111'], {
    1: 'minecraft:nether_bricks', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:soul_sand_nest', 
  ['111','121','111'], {
    1: 'minecraft:soul_sand', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:glowstone_nest', 
  ['111','121','111'], {
    1: '#forge:storage_blocks/glowstone', 
    2: 'productivebees:honey_treat'}),
  event.shaped('productivebees:sugar_cane_nest', 
  ['111','121','111'], {
    1: 'minecraft:sugar_cane', 
    2: 'productivebees:honey_treat'})


  event.remove({id: 'centrifugetiersreproduced:compressium/creative_centrifuge'})
  event.shaped('centrifugetiersreproduced:creative_centrifuge', ['121','232','121'], {1: 'compressium:netherite_3', 2: 'compressium:cobblestone_5', 3: 'centrifugetiersreproduced:cosmic_centrifuge'})
})