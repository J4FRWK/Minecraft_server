// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
//Output
  event.remove({id: 'extendedcrafting:black_iron_ingot'}),
  event.remove({id: 'extendedcrafting:redstone_ingot'}),
  event.remove({id: 'extendedcrafting:ender_ingot'}),
  event.remove({id: 'extendedcrafting:luminessence'})
  event.remove({output: 'extendedcrafting:ender_crafter'})
  event.remove({output: 'extendedcrafting:ender_alternator'}),
  event.remove({output: 'extendedcrafting:basic_table'}),
  event.remove({output: 'extendedcrafting:advanced_table'}),
  event.remove({output: 'extendedcrafting:elite_table'}),
  event.remove({output: 'extendedcrafting:ultimate_table'}),
  event.remove({output: 'extendedcrafting:compressor'}),
  event.remove({output: 'extendedcrafting:flux_crafter'}),
  event.remove({output: 'extendedcrafting:flux_alternator'})
//ID
  event.remove({id: 'extendedcrafting:crystaltine_ingot'}),
  event.remove({id: 'extendedcrafting:enhanced_redstone_ingot'}),
  event.remove({id: 'extendedcrafting:enhanced_ender_ingot'}),
  event.remove({id: 'extendedcrafting:ender_star'}),
  event.remove({id: 'extendedcrafting:flux_star'})
  event.remove({id: 'extendedcrafting:auto_flux_crafter'})
  event.remove({id: 'extendedcrafting:auto_ender_crafter'})
  event.remove({id: 'extendedcrafting:handheld_table'})
})

//Add
ServerEvents.recipes(event => {

  //The Ultimate Ingot
  event.recipes.extendedcrafting.shapeless_table ('extendedcrafting:the_ultimate_ingot', [
    //Minecraft
    'minecraft:copper_ingot', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:netherite_ingot',
    //AdAstra
    'ad_astra:calorite_ingot', 'ad_astra:ostrum_ingot', 'ad_astra:desh_ingot',
    //AllTheOres
    'alltheores:brass_ingot', 'alltheores:iridium_ingot', 'alltheores:platinum_ingot', 'alltheores:zinc_ingot',
    //AllTheModium
    'allthemodium:vibranium_allthemodium_alloy_ingot', 'allthemodium:unobtainium_vibranium_alloy_ingot', 'allthemodium:unobtainium_allthemodium_alloy_ingot',
    'allthemodium:unobtainium_ingot', 'allthemodium:vibranium_ingot', 'allthemodium:allthemodium_ingot',
    //ArmorPlus
    'armorplus:en_iron', 'armorplus:en_gold', 'armorplus:en_netherite',
    //Avaritia Lite
    'avaritia:crystal_matrix_ingot','avaritia:neutronium_ingot', 'avaritia:infinity_ingot',
    //Blue Skies
    'blue_skies:ventium_ingot', 'blue_skies:falsite_ingot', 'blue_skies:horizonite_ingot',
    //Botania
    'botania:manasteel_ingot', 'botania:terrasteel_ingot', 'botania:elementium_ingot', 'botania:gaia_ingot', 'botanicadds:gaiasteel_ingot',
    //Extended Crafting
    'extendedcrafting:black_iron_ingot', 'extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot', 'extendedcrafting:ender_ingot',
    'extendedcrafting:ender_ingot', 'extendedcrafting:crystaltine_ingot', 'extendedcrafting:enhanced_ender_ingot',
    //Immersive Engineering
    'immersiveengineering:ingot_hop_graphite', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:ingot_uranium',
    //Industrial Foregoing
    'industrialforegoing:pink_slime_ingot',
    //Mekanism
    'mekanism:ingot_osmium', 'mekanism:ingot_refined_glowstone', 'mekanism:ingot_refined_obsidian',
    //Mystical Agriculture
    'mysticalagriculture:soulium_ingot', 'mysticalagriculture:prosperity_ingot', 'mysticalagriculture:inferium_ingot', 'mysticalagriculture:prudentium_ingot',
    'mysticalagriculture:tertium_ingot', 'mysticalagriculture:imperium_ingot', 'mysticalagriculture:supremium_ingot', 'mysticalagriculture:awakened_supremium_ingot',
    'mysticalagradditions:insanium_ingot',
    //Powah
    'powah:steel_energized',
    //PneumaticCraft: Repressiuzed
    'pneumaticcraft:ingot_iron_compressed',
    //Spirit
    'spirit:soul_steel_ingot',
    //The Twilight Forest
    'twilightforest:knightmetal_ingot', 'twilightforest:fiery_ingot', 'twilightforest:ironwood_ingot',
    //The Undergarden
    'undergarden:forgotten_ingot', 'undergarden:froststeel_ingot', 'undergarden:cloggrum_ingot',
    //Thermal Series
    'thermal:constantan_ingot', 'thermal:invar_ingot', 'thermal:electrum_ingot', 'thermal:bronze_ingot', 'thermal:nickel_ingot', 'thermal:silver_ingot', 'thermal:lead_ingot',
    'thermal:tin_ingot', 'thermal:enderium_ingot', 'thermal:lumium_ingot', 'thermal:signalum_ingot', 'thermal:rose_gold_ingot', 'thermal:steel_ingot',
    'redstone_arsenal:flux_ingot',
    'thermal_extra:dragonsteel_ingot', 'thermal_extra:twinite_ingot', 'thermal_extra:shellite_ingot', 'thermal_extra:soul_infused_ingot'
]),
  
 //General Crafting
  event.shaped('extendedcrafting:ender_crafter', ['111','323','333'], {1: 'mysticalagriculture:supremium_essence', 2: 'mysticalagriculture:awakening_altar', 3: '#forge:ingots/supremium'}),
  event.shaped('extendedcrafting:ender_alternator', [' 2 ',' 2 ','212'], {1: 'mysticalagriculture:awakening_pedestal', 2: '#forge:ingots/supremium'}),
  
 //Ender Crafter 
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["111","121","111"], "key": {
      "1": {"item": "minecraft:ender_pearl"},
      "2": {"item": "botanicadds:gaiasteel_ingot"}},
        "result": {"item": "extendedcrafting:ender_ingot"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["111","121","111"], "key": {
      "1": {"item": "minecraft:redstone"},
      "2": {"item": "botanicadds:gaiasteel_ingot"}},
        "result": {"item": "extendedcrafting:redstone_ingot"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["111","121","111"],"key": {
      "1": {"item": "immersiveengineering:ingot_hop_graphite"},
      "2": {"item": "botanicadds:gaiasteel_ingot"}},
        "result": {"item": "extendedcrafting:black_iron_ingot"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["111","232","111"], "key": {
      "1": {"item": "minecraft:glowstone_dust"},
      "2": {"item": "botanicadds:gaiasteel_ingot"},
      "3": {"item": "minecraft:redstone"}},
        "result": {"item": "extendedcrafting:luminessence"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["121","232","141"], "key": {
      "1": {"item": "extendedcrafting:basic_component"},
      "2": {"item": "extendedcrafting:basic_catalyst"},
      "3": {"item": "refinedstorage:crafting_grid"},
      "4": {"item": "extendedcrafting:black_iron_slate"}},
        "result": {"item": "extendedcrafting:basic_table"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["121","232","141"], "key": {
      "1": {"item": "extendedcrafting:basic_component"},
      "2": {"item": "extendedcrafting:basic_catalyst"},
      "3": {"item": "ae2:crafting_terminal"},
      "4": {"item": "extendedcrafting:black_iron_slate"}},
        "result": {"item": "extendedcrafting:basic_table"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["121","232","141"], "key": {
      "1": {"item": "extendedcrafting:advanced_component"},
      "2": {"item": "extendedcrafting:advanced_catalyst"},
      "3": {"item": "extendedcrafting:basic_table"},
      "4": {"item": "extendedcrafting:black_iron_slate"}},
        "result": {"item": "extendedcrafting:advanced_table"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["121","232","141"], "key": {
      "1": {"item": "extendedcrafting:elite_component"},
      "2": {"item": "extendedcrafting:elite_catalyst"},
      "3": {"item": "extendedcrafting:advanced_table"},
      "4": {"item": "extendedcrafting:black_iron_slate"}},
        "result": {"item": "extendedcrafting:elite_table"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["121","232","141"], "key": {
      "1": {"item": "extendedcrafting:ultimate_component"},
      "2": {"item": "extendedcrafting:ultimate_catalyst"},
      "3": {"item": "extendedcrafting:elite_table"},
      "4": {"item": "extendedcrafting:black_iron_slate"}},
        "result": {"item": "extendedcrafting:ultimate_table"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["121","232","141"], "key": {
      "1": {"item": "extendedcrafting:ultimate_component"},
      "2": {"item": "extendedcrafting:ultimate_catalyst"},
      "3": {"item": "extendedcrafting:ultimate_table"},
      "4": {"item": "extendedcrafting:black_iron_slate"}},
        "result": {"item": "extendedcrafting:compressor"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["111","323","333"], "key": {
      "1": {"item": "extendedcrafting:ender_ingot"},
      "2": {"item": "extendedcrafting:ender_crafter"},
      "3": {"item": "extendedcrafting:redstone_ingot"}},
        "result": {"item": "extendedcrafting:flux_crafter"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": [" 1 "," 2 ","111"], "key": {
      "1": {"item": "extendedcrafting:redstone_ingot"},
      "2": {"item": "extendedcrafting:ender_alternator"}},
        "result": {"item": "extendedcrafting:flux_alternator"}}),
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["111","121","111"], "key": {
      "1": {"item": "thermal:enderium_ingot"},
      "2": {"item": "minecraft:nether_star"}},
        "result": {"item": "extendedcrafting:ender_star"}}),
//Flux Crafter
  event.custom({
    "type": "extendedcrafting:shaped_flux_crafter", "powerRequired": 100000, "pattern": ["111","121","111"], "key": {
      "1": {"item": "extendedcrafting:redstone_ingot"},
      "2": {"item": "extendedcrafting:flux_star"}},
        "result": {"item": "extendedcrafting:enhanced_redstone_ingot"}}),
  event.custom({
    "type": "extendedcrafting:shaped_flux_crafter", "powerRequired": 100000, "pattern": ["111","121","111"], "key": {
      "1": {"item": "extendedcrafting:ender_ingot"},
      "2": {"item": "extendedcrafting:ender_star"}},
        "result": {"item": "extendedcrafting:enhanced_ender_ingot"}}),
  event.custom({
    "type": "extendedcrafting:shaped_flux_crafter", "powerRequired": 100000, "pattern": ["111","121","111"], "key": {
      "1": {"item": "avaritia:crystal_matrix_ingot"},
      "2": {"item": "botanicadds:gaiasteel_ingot"}},
        "result": {"item": "extendedcrafting:crystaltine_ingot"}}),
  event.custom({
    "type": "extendedcrafting:shaped_flux_crafter", "powerRequired": 100000, "pattern": ["111","121","111"], "key": {
      "1": {"item": "extendedcrafting:redstone_ingot"},
      "2": {"item": "extendedcrafting:ender_star"}},
        "result": {"item": "extendedcrafting:flux_star"}})
  //Auto Flux Crafter
  event.custom({
    "type": "extendedcrafting:shaped_flux_crafter", "powerRequired": 1000000, "powerRate": 4000, "pattern": ["ABA","CDC","ABA"],
    "key": {"A": {"item": "extendedcrafting:black_iron_ingot"},
            "B": {"item": "extendedcrafting:enhanced_redstone_catalyst"},
            "C": {"item": "extendedcrafting:enhanced_ender_catalyst"},
            "D": {"item": "extendedcrafting:flux_crafter"}},
    "result": {"item": "extendedcrafting:auto_flux_crafter"}})
  //Auto Ender Crafter
  event.custom({
    "type": "extendedcrafting:shaped_ender_crafter", "pattern": ["ABA", "CDC", "ABA"],
    "key": {"A": {"item": "extendedcrafting:black_iron_ingot"},
            "B": {"item": "extendedcrafting:redstone_catalyst"},
            "C": {"item": "extendedcrafting:crystaltine_catalyst"},
            "D": {"item": "extendedcrafting:ender_crafter"}},
    "result": {"item": "extendedcrafting:auto_ender_crafter"}})
})