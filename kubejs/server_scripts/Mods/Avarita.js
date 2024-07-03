// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  event.shapeless('9x avaritia:infinity_ingot', ['avaritia:infinity'])
  event.shapeless('9x avaritia:neutron_ingot', ['avaritia:neutron'])
  //Neutron Compressor
  event.remove({id: 'avaritia:neutron_compressor'})
  //Diamond Lattice
  event.remove({id: 'avaritia:diamond_lattice'})
  event.custom({    "type": "extendedcrafting:shaped_flux_crafter", "powerRequired": 1000000, "pattern": ["1 1"," 1 ","1 1"], "key": {
      "1": {"item": "minecraft:diamond"}}, 
        "result": {"item": "avaritia:diamond_lattice"}})
  //crystal Matrix Ingot
  event.remove({id: 'avaritia:crystal_matrix_ingot'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:crystal_matrix_ingot',  [
    '11111',
    '12221',
    '12321',
    '12221',
    '11111'],  {
    1: 'avaritia:diamond_lattice', 
    2: 'minecraft:nether_star',
    3: 'thermal_extra:dragonsteel_block'})
})
//Add

ServerEvents.recipes(event => {
  //Infinity Catalyst
  event.remove({id: 'avaritia:infinity_catalyst'})
  event.recipes.extendedcrafting.shapeless_table ('avaritia:infinity_catalyst', [
    //Avaritia
    'avaritia:ultimate_stew', 'avaritia:cosmic_meatballs', 'avaritia:record_fragment', 'avaritia:endest_pearl',
    'avaritia:neutron_nugget', 'avaritia:crystal_matrix_ingot', 'avaritia:diamond_lattice',
    //Ingot Blocks
    'minecraft:netherite_block', 'pneumaticcraft:compressed_iron_block', 'blue_skies:diopside_block', 'undergarden:forgotten_block', 
    'thermal:enderium_block', 'ad_astra:calorite_block', 'twilightforest:carminite_block',
    //Stars/Ingots
    'allthemodium:allthemodium_ingot', 'minecraft:nether_star', 'allthemodium:vibranium_ingot', 'extendedcrafting:ender_star', 
    'allthemodium:unobtainium_ingot', 'extendedcrafting:flux_star', 'botania:gaia_ingot',  
    //Machine
    'refinedstorage:controller', 'extendedcrafting:crafting_core', 'mekanism:steel_casing', 'rftoolsbase:machine_frame',
    'thermal:machine_frame', 'avaritia:double_compressed_crafting_table', 'ae2:controller',
    //Mystical Agriculture
    'mysticalagriculture:inferium_essence','mysticalagriculture:prudentium_essence', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:imperium_essence',
    'mysticalagriculture:supremium_essence', 'mysticalagriculture:awakened_supremium_essence', 'mysticalagradditions:insanium_essence',
    //Random
    'compressium:cobblestone_4', 'compressium:sand_4', 'compressium:gravel_4', 'compressium:netherrack_4',
    'compressium:soulsand_4', 'compressium:endstone_4', 'compressium:dirt_4',
    //Mob Drops
    'reliquary:frozen_core', 'reliquary:eye_of_the_storm', 'reliquary:guardian_spike', 'reliquary:nebulous_heart', 'reliquary:slime_pearl', 'reliquary:squid_beak',
    'reliquary:bat_wing'
]),
  //Infinity Ingot
event.remove({id: 'avaritia:infinity_ingot'})
event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_ingot',  [
  '1111111',
  '1334331',
  '1442441',
  '1334331',
  '1111111'], {
  1: 'avaritia:neutron_ingot', 
  2: 'avaritia:neutron', 
  3: 'avaritia:infinity_catalyst', 
  4: 'mysticalagradditions:insanium_ingot'}),
  //Ultimate Stew
  event.remove({id: 'avaritia:ultimate_stew'})
  event.recipes.extendedcrafting.shapeless_table ('avaritia:ultimate_stew', ['avaritia:neutron_pile',
    //Minecraft
    'minecraft:wheat', 'minecraft:carrot', 'minecraft:potato', 'minecraft:beetroot', 'minecraft:sweet_berries', 'minecraft:glow_berries', 'minecraft:apple', 'minecraft:melon_slice',
    'minecraft:pumpkin', 'minecraft:sugar_cane', 'minecraft:cactus', 'minecraft:bamboo', 'minecraft:kelp', 'minecraft:red_mushroom', 'minecraft:brown_mushroom', 
    'minecraft:warped_fungus', 'minecraft:crimson_fungus', 'minecraft:chorus_flower',
    //Blue Skies
    'blue_skies:scalefruit', 'blue_skies:fiery_beans', 'blue_skies:pine_fruit', 'blue_skies:winter_leaves', 'blue_skies:brewberry',
    //Immersive Engineering
    'immersiveengineering:hemp_fiber',
    //The Twilight Forest
    'twilightforest:hydra_chop', 'twilightforest:maze_wafer', 'twilightforest:experiment_115',
    //The Undergarden
    'undergarden:underbeans', 'undergarden:droopvine_item',
    //Thermal
    'thermal:tea', 'thermal:barley', 'thermal:strawberry', 'thermal:radish', 'thermal:coffee', 'thermal:spinach', 'thermal:amaranth', 'thermal:tomato', 'thermal:peanut',
    'thermal:corn', 'thermal:sadiroot', 'thermal:rice', 'thermal:bell_pepper', 'thermal:green_bean', 'thermal:flax', 'thermal:onion', 'thermal:eggplant', 'thermal:hops']),
  //Cosmic Meatballs
  event.remove({id: 'avaritia:cosmic_meatballs'})
  event.recipes.extendedcrafting.shapeless_table ('avaritia:cosmic_meatballs', [
    //Minecraft
    'avaritia:neutron_pile', 'minecraft:beef', 'minecraft:porkchop', 'minecraft:mutton', 'minecraft:chicken', 'minecraft:rabbit', 'minecraft:cod', 'minecraft:salmon',
    'minecraft:tropical_fish', 'minecraft:pufferfish', 'minecraft:dried_kelp', 'minecraft:poisonous_potato', 'minecraft:rotten_flesh', 'minecraft:spider_eye', 
    'minecraft:chorus_fruit',
    //Blue Skies
    'blue_skies:carabeef', 'blue_skies:venison', 'blue_skies:monitor_tail', 'blue_skies:grittle_flatfish', 'blue_skies:municipal_monkfish', 'blue_skies:charscale_moki', 
    'blue_skies:horizofin_tunid',
    //Croptopia
    'croptopia:calamari', 'croptopia:glowing_calamari', 'croptopia:roe',
    //Ex Nihilo Sequentia
    'exnihilosequentia:silkworm',
    //Nethers Delight
    'nethersdelight:hoglin_loin', //'nethersdelight:strider_slice',
    //The Twilight Forest
    'twilightforest:raw_venison', 'twilightforest:raw_meef',
    //The Undergarden
    'undergarden:raw_dweller_meat', 'undergarden:raw_gwibling', 'undergarden:raw_gloomper_leg'    ])

  //Sword of the Cosmos
  event.remove({id: 'avaritia:infinity_sword'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_sword',  [
  '       44',
  '      444',
  '     444 ',
  '    444  ',
  ' 2 444   ',
  '  254    ',
  '  12     ',
  ' 1  2    ',
  '3        '],  {
  1: 'avaritia:neutron_ingot', 
  2: 'avaritia:crystal_matrix_ingot', 
  3: 'avaritia:infinity_catalyst',
  4: 'avaritia:infinity_ingot',
  5: 'allthemodium:alloy_sword'}),
  //World Breaker
  event.remove({id: 'avaritia:infinity_pickaxe'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_pickaxe',  [
  ' 3333333 ',
  '333323333',
  '33  4  33',
  '    1    ',
  '    1    ',
  '    1    ',
  '    1    ',
  '    1    ',
  '    1    '],  {
  1: 'avaritia:neutron_ingot', 
  2: 'avaritia:crystal_matrix', 
  3: 'avaritia:infinity_ingot',
  4: 'allthemodium:alloy_pick'}),
  //Planet Eater
  event.remove({id: 'avaritia:infinity_shovel'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_shovel',  [
    '      222',
    '     2232',
    '      422',
    '     1 2 ',
    '    1    ',
    '   1     ',
    '  1      ',
    ' 1       ',
    '1        '],  {
    1: 'avaritia:neutron_ingot', 
    2: 'avaritia:infinity_ingot',
    3: 'avaritia:infinity',
    4: 'allthemodium:alloy_shovel'}),
  //Nature's Ruin
  event.remove({id: 'avaritia:infinity_axe'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_axe',  [
    ' 2   ',
    '22222',
    '2232 ',
    ' 21  ',
    '  1  ',
    '  1  ',
    '  1  ',
    '  1  ',
    '  1  '],  {
    1: 'avaritia:neutron_ingot', 
    2: 'avaritia:infinity_ingot',
    3: 'allthemodium:alloy_axe'}),
  //Hoe of the Green Earth
  event.remove({id: 'avaritia:infinity_hoe'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_hoe',  [
    '     1 ',
    ' 222222',
    '2222322',
    '2    22',
    '     1 ',
    '     1 ',
    '     1 ',
    '     1 ',
    '     1 '],  {
    1: 'avaritia:neutron_ingot', 
    2: 'avaritia:infinity_ingot',
    3: 'mysticaladaptations:insanium_hoe'}),
  //Longbow of the Heavens
  event.remove({id: 'avaritia:infinity_bow'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:infinity_bow',  [
    '   11',
    '  1 2',
    ' 1  2',
    '1   2',
    '3  42',
    '1   2',
    ' 1  2',
    '  1 2',
    '   11'],  {
    1: 'avaritia:infinity_ingot',
    2: '#thermal:rockwool',
    3: 'avaritia:crystal_matrix',
    4: 'mysticaladaptations:insanium_bow'}),
  //Skullfire
  event.remove({id: 'avaritia:skull_fire_sword'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:skull_fire_sword',  [
    '       12',
    '      121',
    '     121 ',
    '    121  ',
    ' 3 121   ',
    '  321    ',
    '  43     ',
    ' 4  3    ',
    '5        '],  {
    1: 'avaritia:crystal_matrix_ingot', 
    2: 'minecraft:blaze_powder',
    3: '#forge:bones',
    4: '#minecraft:logs',
    5: 'minecraft:nether_star'}),
  //Neutronium Collector
  event.remove({id: 'avaritia:neutron_collector'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:neutron_collector',  [
  '33333',
  '42224',
  '42124',
  '42224',
  '33333'],  {
  1: 'extendedcrafting:flux_crafter', 
  2: 'avaritia:crystal_matrix_ingot', 
  3: 'mysticalagriculture:supremium_ingot',
  4: 'minecraft:nether_star'}),
  //Endest Pearl
  event.remove({id: 'avaritia:endest_pearl'})
  event.recipes.extendedcrafting.shaped_table ('avaritia:endest_pearl',  [
  '11211',
  '12321',
  '23432',
  '12321',
  '11211'],  {
  1: '#forge:end_stones', 
  2: '#forge:ender_pearls', 
  3: '#forge:storage_blocks/enderium',
  4: 'extendedcrafting:flux_star'})
  event.remove({id: 'avaritia:extreme_crafting_table'})

  //Infinity Nugget
  event.shapeless('9x avaritia:infinity_nugget', ['avaritia:infinity_ingot'])
  event.shaped('avaritia:infinity_ingot', ['111','111','111'], {1: 'avaritia:infinity_nugget'})
  
})