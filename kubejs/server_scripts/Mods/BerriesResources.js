// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

//Minecraft
  //Stone
  event.remove({id: 'berries_resources:stone_to_stone_berries'})
  event.shaped('berries_resources:stone_berries', ['111','121','111'], {1: 'compressium:stone_1', 2:'minecraft:sweet_berries'})
  event.remove({id: 'berries_resources:stone_berries_to_stone'})
  event.shaped('32x minecraft:stone', ['111','111','111'], {1: 'berries_resources:stone_berries'})
  //Diorite
  event.remove({id: 'berries_resources:diorite_to_diorite_berries'})
  event.shaped('berries_resources:diorite_berries', ['111','121','111'], {1: 'compressium:diorite_1', 2:'minecraft:sweet_berries'})
  event.remove({id: 'berries_resources:diorite_berries_to_diorite'})
  event.shaped('32x minecraft:diorite', ['111','111','111'], {1: 'berries_resources:diorite_berries'})
  //Andesite
  event.remove({id: 'berries_resources:andesite_to_andesite_berries'})
  event.shaped('berries_resources:andesite_berries', ['111','121','111'], {1: 'compressium:andesite_1', 2:'minecraft:sweet_berries'})
  event.remove({id: 'berries_resources:andesite_berries_to_andesite'})
  event.shaped('32x minecraft:andesite', ['111','111','111'], {1: 'berries_resources:andesite_berries'})
  //Granite
  event.remove({id: 'berries_resources:granite_to_granite_berries'})
  event.shaped('berries_resources:granite_berries', ['111','121','111'], {1: 'compressium:granite_1', 2:'minecraft:sweet_berries'})
  event.remove({id: 'berries_resources:granite_berries_to_granite'})
  event.shaped('32x minecraft:granite', ['111','111','111'], {1: 'berries_resources:granite_berries'})
  //Sand
  event.remove({id: 'berries_resources:sand_to_sand_berries'})
  event.shaped('berries_resources:sand_berries', ['111','121','111'], {1: 'compressium:sand_1', 2:'berries_resources:stone_berries'})
  event.remove({id: 'berries_resources:sand_berries_to_sand'})
  event.shaped('32x minecraft:sand', ['111','111','111'], {1: 'berries_resources:sand_berries'})
  //Red Sand
  event.remove({id: 'berries_resources:red_sand_to_red_sand_berries'})
  event.shaped('berries_resources:red_sand_berries', ['111','121','111'], {1: 'compressium:redsand_1', 2:'berries_resources:stone_berries'})
  event.remove({id: 'berries_resources:red_sand_berries_to_red_sand'})
  event.shaped('32x minecraft:red_sand', ['111','111','111'], {1: 'berries_resources:red_sand_berries'})
  //Clay
  event.shaped('berries_resources:clay_berries', ['111','121','111'], {1: 'compressium:clay_1', 2:'berries_resources:sand_berries'})
  event.shaped('8x minecraft:clay_ball', ['111','111','111'], {1: 'berries_resources:clay_berries'})
  //Coal
  event.remove({id: 'berries_resources:coal_to_coal_berries'})
  event.shaped('berries_resources:coal_berries', ['111','121','111'], {1: '#forge:storage_blocks/coal', 2:'berries_resources:stone_berries'})
  event.remove({id: 'berries_resources:coal_berries_to_coal'})
  event.shaped('8x minecraft:coal', ['111','111','111'], {1: 'berries_resources:coal_berries'})
  //Iron
  event.remove({id: 'berries_resources:iron_ingot_to_iron_berries'})
  event.shaped('berries_resources:iron_berries', ['111','121','111'], {1: '#forge:storage_blocks/iron', 2:'berries_resources:coal_berries'})
  event.remove({id: 'berries_resources:iron_berries_to_iron_ingot'})
  event.shaped('minecraft:iron_ingot', ['111','111','111'], {1: 'berries_resources:iron_berries'})
  //Copper
  event.remove({id: 'berries_resources:copper_ingot_to_copper_berries'})
  event.shaped('berries_resources:copper_berries', ['111','121','111'], {1: '#forge:storage_blocks/copper', 2:'berries_resources:iron_berries'})
  event.shaped('minecraft:copper_ingot', ['111','111','111'], {1: 'berries_resources:copper_berries'})
  //Redstone
  event.remove({id: 'berries_resources:red_stone_to_red_stone_berries'})
  event.shaped('berries_resources:red_stone_berries', ['111','121','111'], {1: '#forge:storage_blocks/redstone', 2:'berries_resources:iron_berries'})
  event.remove({id: 'berries_resources:red_stone_berries_to_red_stone'})
  event.shaped('4x minecraft:redstone', ['111','111','111'], {1: 'berries_resources:red_stone_berries'})
  //Lapis
  event.remove({id: 'berries_resources:lapis_to_lapis_berries'})
  event.shaped('berries_resources:lapis_berries', ['111','121','111'], {1: '#forge:storage_blocks/lapis', 2:'berries_resources:iron_berries'})
  event.remove({id: 'berries_resources:lapis_berries_to_lapis'})
  event.shaped('8x minecraft:lapis_lazuli', ['111','111','111'], {1: 'berries_resources:lapis_berries'})
  //Gold
  event.remove({id: 'berries_resources:gold_ingot_to_gold_berries'})
  event.shaped('berries_resources:gold_berries', ['111','121','111'], {1: '#forge:storage_blocks/gold', 2:'berries_resources:iron_berries'})
  event.remove({id: 'berries_resources:gold_berries_to_gold_ingot'})
  event.shaped('minecraft:gold_ingot', ['111','111','111'], {1: 'berries_resources:gold_berries'})
  //Diamond
  event.remove({id: 'berries_resources:diamond_to_diamond_berries'})
  event.shaped('berries_resources:diamond_berries', ['111','121','111'], {1: '#forge:storage_blocks/diamond', 2:'berries_resources:iron_berries'})
  event.remove({id: 'berries_resources:diamond_berries_to_diamond'})
  event.shaped('minecraft:diamond', ['111','111','111'], {1: 'berries_resources:diamond_berries'})
  //Emerald
  event.remove({id: 'berries_resources:emerald_to_emerald_berries'})
  event.shaped('berries_resources:emerald_berries', ['111','121','111'], {1: '#forge:storage_blocks/emerald', 2:'berries_resources:diamond_berries'}),
  event.remove({id: 'berries_resources:emerald_berries_to_emerald'})
  event.shaped('minecraft:emerald', ['111','111','111'], {1: 'berries_resources:emerald_berries'})
  //Netherite
  event.remove({id: 'berries_resources:netherite_ingot_to_netherite_berries'})
  event.shaped('berries_resources:netherite_berries', ['111','121','111'], {1: '#forge:storage_blocks/netherite', 2:'berries_resources:emerald_berries'})
  event.remove({id: 'berries_resources:netherite_berries_to_ingot_netherite'})
  event.shaped('minecraft:netherite_ingot', ['111','111','111'], {1: 'berries_resources:netherite_berries'})
  //Nether Quartz
  event.remove({id: 'berries_resources:nether_quartz_to_nether_quartz_berries'})
  event.shaped('berries_resources:nether_quartz_berries', ['111','121','111'], {1: '#forge:storage_blocks/quartz', 2:'berries_resources:gold_berries'})
  event.remove({id: 'berries_resources:nether_quartz_berries_to_nether_quartz'})
  event.shaped('4x minecraft:quartz', ['111','111','111'], {1: 'berries_resources:nether_quartz_berries'})
  //XP
  event.remove({id: 'berries_resources:experience_bottle_to_xp_berries'})
  event.shaped('berries_resources:xp_berries', ['111','121','111'], {1: '#forge:xp', 2:'berries_resources:nether_quartz_berries'})
  event.remove({id: 'berries_resources:xp_berries_to_experience_bottle'})
  event.shaped('4x minecraft:experience_bottle', ['111','111','111'], {1: 'berries_resources:xp_berries'})
//Botania
  //Manasteel
  event.remove({id: 'berries_resources:manasteel_ingot_to_manasteel_berries'})
  event.shaped('berries_resources:manasteel_berries', ['111','121','111'], {1: '#forge:storage_blocks/manasteel', 2:'berries_resources:iron_berries'})
  event.remove({id: 'berries_resources:manasteel_berries_to_manasteel_ingot'})
  event.shaped('botania:manasteel_ingot', ['111','111','111'], {1: 'berries_resources:manasteel_berries'})
  //Terrasteel
  event.remove({id: 'berries_resources:terrasteel_ingot_to_terrasteel_berries'})
  event.shaped('berries_resources:terrasteel_berries', ['111','121','111'], {1: '#forge:storage_blocks/terrasteel', 2:'berries_resources:manasteel_berries'})
  event.remove({id: 'berries_resources:terrasteel_berries_to_terrasteel_ingot'})
  event.shaped('botania:terrasteel_ingot', ['111','111','111'], {1: 'berries_resources:terrasteel_berries'})
  //Elementium
  event.remove({id: 'berries_resources:elementium_ingot_to_elementium_berries'})
  event.shaped('berries_resources:elementium_berries', ['111','121','111'], {1: '#forge:storage_blocks/elementium', 2:'berries_resources:terrasteel_berries'})
  event.remove({id: 'berries_resources:elementium_berries_to_elementium_ingot'})
  event.shaped('botania:elementium_ingot', ['111','111','111'], {1: 'berries_resources:elementium_berries'})
  //Gaia Spirit
  event.remove({id: 'berries_resources:gaia_spirit_ingot_to_gaia_spirit_berries'})
  event.shaped('berries_resources:gaia_spirit_berries', ['111','121','111'], {1: 'botania:gaia_ingot', 2:'berries_resources:elementium_berries'})
  event.remove({id: 'berries_resources:gaia_spirit_berries_to_gaia_spirit_ingot'})
  event.shaped('botania:life_essence', ['111','111','111'], {1: 'berries_resources:gaia_spirit_berries'})
//Immersive
  //HOP Graphite
  event.remove({id: 'berries_resources:hop_graphite_berries'})
  event.shaped('berries_resources:hop_graphite_berries', ['111','323','111'], {1: '#forge:ingots/hop_graphite', 2:'berries_resources:coal_berries', 3:'compressium:coal_2'})
  event.shaped('immersiveengineering:ingot_hop_graphite', ['111','111','111'], {1: 'berries_resources:hop_graphite_berries'})
  //Aluminium
  event.remove({id: 'berries_resources:aluminium_berries'})
  event.shaped('berries_resources:aluminum_berries', ['111','121','111'], {1: '#forge:storage_blocks/aluminum', 2:'berries_resources:copper_berries'})
  event.shaped('immersiveengineering:ingot_aluminum', ['111','111','111'], {1: 'berries_resources:aluminum_berries'})
  //Uranium
  event.remove({id: 'berries_resources:uranium_berries'})
  event.shaped('berries_resources:uranium_berries', ['111','323','111'], {1: '#forge:storage_blocks/uranium', 2:'berries_resources:lead_berries', 3: 'thermal:lead_block'})
  event.shaped('immersiveengineering:ingot_uranium', ['111','111','111'], {1: 'berries_resources:uranium_berries'})
//Mekanism
  //Osmium
  event.remove({id: 'berries_resources:osmium_berries'})
  event.shaped('berries_resources:osmium_berries', ['111','121','111'], {1: '#forge:storage_blocks/osmium', 2:'berries_resources:iron_berries'})
  event.shaped('mekanism:ingot_osmium', ['111','111','111'], {1: 'berries_resources:osmium_berries'})
  //Refined Glowstone
  event.remove({id: 'berries_resources:refined_glowstone_berries'})
  event.shaped('berries_resources:refined_glowstone_berries', ['111','121','111'], {1: '#forge:storage_blocks/refined_glowstone', 2:'berries_resources:osmium_berries'})
  event.shaped('mekanism:ingot_refined_glowstone', ['111','111','111'], {1: 'berries_resources:refined_glowstone_berries'})
  //Refined Obsidian
  event.remove({id: 'berries_resources:refined_obsidian_berries'})
  event.shaped('berries_resources:refined_obsidian_berries', ['111','121','111'], {1: '#forge:storage_blocks/refined_obsidian', 2:'berries_resources:osmium_berries'})
  event.shaped('mekanism:ingot_refined_obsidian', ['111','111','111'], {1: 'berries_resources:refined_obsidian_berries'})
  
//Thermal
  //Steel
  event.remove({id: 'berries_resources:steel_berries'})
  event.shaped('berries_resources:steel_berries', ['111','323','111'], {1: '#forge:storage_blocks/steel', 2:'berries_resources:iron_berries', 3:'compressium:coal_2'})
  event.shaped('thermal:steel_ingot', ['111','111','111'], {1: 'berries_resources:steel_berries'})
  //Silver
  event.remove({id: 'berries_resources:silver_berries'})
  event.shaped('berries_resources:silver_berries', ['111','121','111'], {1: '#forge:storage_blocks/silver', 2:'berries_resources:gold_berries'})
  event.shaped('thermal:silver_ingot', ['111','111','111'], {1: 'berries_resources:silver_berries'})
  //Electrum
  event.remove({id: 'berries_resources:electrum_berries'})
  event.shaped('berries_resources:electrum_berries', ['111','323','111'], {1: '#forge:storage_blocks/electrum', 2:'berries_resources:silver_berries', 3: 'compressium:gold_2'})
  event.shaped('thermal:electrum_ingot', ['111','111','111'], {1: 'berries_resources:electrum_berries'})
  //Nickel
  event.remove({id: 'berries_resources:nickel_berries'})
  event.shaped('berries_resources:nickel_berries', ['111','121','111'], {1: '#forge:storage_blocks/nickel', 2:'berries_resources:copper_berries'})
  event.shaped('thermal:nickel_ingot', ['111','111','111'], {1: 'berries_resources:nickel_berries'})
  //Tin
  event.remove({id: 'berries_resources:tin_berries'})
  event.shaped('berries_resources:tin_berries', ['111','121','111'], {1: '#forge:storage_blocks/tin', 2:'berries_resources:copper_berries'})
  event.shaped('thermal:tin_ingot', ['111','111','111'], {1: 'berries_resources:tin_berries'})
  //Constantan
  event.remove({id: 'berries_resources:constantan_berries'})
  event.shaped('berries_resources:constantan_berries', ['111','323','111'], {1: '#forge:storage_blocks/constantan', 2:'berries_resources:nickel_berries', 3: 'compressium:copper_2'})
  event.shaped('thermal:constantan_ingot', ['111','111','111'], {1: 'berries_resources:constantan_berries'})
  //Bronze
  event.remove({id: 'berries_resources:bronze_berries'})
  event.shaped('berries_resources:bronze_berries', ['111','323','111'], {1: '#forge:storage_blocks/bronze', 2:'berries_resources:tin_berries', 3: 'compressium:copper_2'})
  event.shaped('thermal:bronze_ingot', ['111','111','111'], {1: 'berries_resources:bronze_berries'})
  //Lead
  event.remove({id: 'berries_resources:lead_berries'})
  event.shaped('berries_resources:lead_berries', ['111','121','111'], {1: '#forge:storage_blocks/lead', 2:'berries_resources:iron_berries'})
  event.shaped('thermal:lead_ingot', ['111','111','111'], {1: 'berries_resources:lead_berries'})
//AllTheOres
  //Zinc
  event.remove({id: 'berries_resources:zinc_berries'})
  event.shaped('berries_resources:zinc_berries', ['111','121','111'], {1: '#forge:storage_blocks/zinc', 2:'berries_resources:copper_berries'})
  event.shaped('alltheores:zinc_ingot', ['111','111','111'], {1: 'berries_resources:zinc_berries'})
  //Brass
  event.remove({id: 'berries_resources:brass_berries'})
  event.shaped('berries_resources:brass_berries', ['111','323','111'], {1: '#forge:storage_blocks/brass', 2:'berries_resources:zinc_berries', 3: 'compressium:copper_2'})
  event.shaped('alltheores:brass_ingot', ['111','111','111'], {1: 'berries_resources:brass_berries'})
//TheTwilightForest
  //Ironwood
  event.remove({id: 'berries_resources:iron_wood_ingot_to_iron_wood_berries'})
  event.shaped('berries_resources:iron_wood_berries', ['111','121','111'], {1: '#forge:storage_blocks/ironwood', 2:'berries_resources:diamond_berries'})
  //KnightMetal
  event.remove({id: 'berries_resources:knight_metal_ingot_to_knight_metal_berries'})
  event.shaped('berries_resources:knight_metal_berries', ['111','121','111'], {1: '#forge:storage_blocks/knightmetal', 2:'berries_resources:iron_wood_berries'})
  //Fiery
  event.remove({id: 'berries_resources:fiery_ingot_to_fiery_berries'})
  event.shaped('berries_resources:fiery_berries', ['111','121','111'], {1: '#forge:storage_blocks/fiery', 2:'berries_resources:knight_metal_berries'})


//General Remove Recipe until added back in
event.remove({id: 'berries_resources:brass_ingot_to_brass_berries'})
event.remove({id: 'berries_resources:copper_ingot_to_copper_berries'})
event.remove({id: 'berries_resources:copper_berries_to_copper_ingot'})
event.remove({id: 'berries_resources:zinc_ingot_to_zinc_berries'})
event.remove({id: 'berries_resources:aluminum_ingot_to_aluminum_berries'})
event.remove({id: 'berries_resources:immersive_engineering_aluminum_berries_to_aluminum_ingot'})
event.remove({id: 'berries_resources:constantan_ingot_to_constantan_berries'})
event.remove({id: 'berries_resources:immersive_engineering_constantan_berries_to_constantan_ingot'})
event.remove({id: 'berries_resources:electrum_ingot_to_electrum_berries'})
event.remove({id: 'berries_resources:immersive_engineering_electrum_berries_to_electrum_ingot'})
event.remove({id: 'berries_resources:hop_graphite_ingot_to_hop_graphite_berries'})
event.remove({id: 'berries_resources:immersive_engineering_hop_graphite_berries_to_hop_graphite_ingot'})
event.remove({id: 'berries_resources:lead_ingot_to_lead_berries'})
event.remove({id: 'berries_resources:immersive_engineering_lead_berries_to_lead_ingot'})
event.remove({id: 'berries_resources:nickel_ingot_to_nickel_berries'})
event.remove({id: 'berries_resources:immersive_engineering_nickel_berries_to_nickel_ingot'})
event.remove({id: 'berries_resources:silver_ingot_to_silver_berries'})
event.remove({id: 'berries_resources:immersive_engineering_silver_berries_to_silver_ingot'})
event.remove({id: 'berries_resources:steel_ingot_to_steel_berries'})
event.remove({id: 'berries_resources:immersive_engineering_steel_berries_to_steel_ingot'})
event.remove({id: 'berries_resources:uranium_ingot_to_uranium_berries'})
event.remove({id: 'berries_resources:mekanism_uranium_berries_to_uranium_ingot'})
event.remove({id: 'berries_resources:clay_to_clay_berries'})
event.remove({id: 'berries_resources:clay_berries_to_clay'})
event.remove({id: 'berries_resources:bronze_ingot_to_bronze_berries'})
event.remove({id: 'berries_resources:mekanism_bronze_berries_to_bronze_ingot'})
event.remove({id: 'berries_resources:tin_ingot_to_tin_berries'})
event.remove({id: 'berries_resources:mekanism_tin_berries_to_tin_ingot'})
event.remove({id: 'berries_resources:osmium_ingot_to_osmium_berries'})
event.remove({id: 'berries_resources:mekanism_osmium_berries_to_osmium_ingot'})
event.remove({id: 'berries_resources:refined_glowstone_ingot_to_refined_glowstone_berries'})
event.remove({id: 'berries_resources:mekanism_refined_glowstone_berries_to_refined_glowstone_ingot'})
event.remove({id: 'berries_resources:refined_obsidian_ingot_to_refined_obsidian_berries'})
event.remove({id: 'berries_resources:mekanism_refined_obsidian_berries_to_refined_obsidian_ingot'})
event.remove({output: 'berries_resources:fire_ruby_berries'})
event.remove({output: 'berries_resources:ice_sapphire_berries'})
event.remove({output: 'berries_resources:air_malachite_berries'})
event.remove({output: 'berries_resources:haste_peridot_berries'})
event.remove({output: 'berries_resources:dive_aquamarine_berries'})
event.remove({output: 'berries_resources:heart_rhodonite_berries'})
event.remove({output: 'berries_resources:kinetic_opal_berries'})
event.remove({output: 'berries_resources:lucky_citrine_berries'})
event.remove({output: 'berries_resources:power_pyrite_berries'})
event.remove({output: 'berries_resources:spirit_garnet_berries'})



})