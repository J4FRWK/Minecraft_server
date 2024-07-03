// priority: 0

ServerEvents.recipes(event => {
//Thermal Extra
  //Soul Infused
  event.shaped('3x thermal_extra:soul_infused_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:soul_infused_essence'})
  //Shellite
  event.shaped('thermal_extra:shellite_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:shellite_essence'})
  //Twinite
  event.shaped('2x thermal_extra:twinite_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:twinite_essence'})
  //Dragonsteel
  event.shaped('thermal_extra:dragonsteel_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:dragonsteel_essence'})
//Industrial Foregoing
  //Pink Slime
  event.shaped('2x industrialforegoing:pink_slime_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:pink_slime_essence'})
//RF Tools
  //Dimensional Shard
  event.shaped('2x rftoolsbase:dimensionalshard', ['111','1 1','111'], {
    1: 'mysticalagriculture:dimensional_shard_essence'})
//Evil Craft
  //Dark Gem
  event.shaped('4x evilcraft:dark_gem', ['111','1 1','111'], {
    1: 'mysticalagriculture:dark_gem_essence'})
//Ars Nouveau
  //Source Gem
  event.shaped('8x ars_nouveau:source_gem', ['111','1 1','111'], {
    1: 'mysticalagriculture:source_gem_essence'})
//ATM
  //AlltheModium
  event.shaped('allthemodium:allthemodium_ingot', ['111','111','111'], {
    1: 'mysticalagriculture:allthemodium_essence'})
  event.remove({id: 'mysticalagriculture:allthemodium_seeds_infusion'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "minecraft:netherite_block"}, "ingredients":[
  {"item": "allthemodium:allthemodium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:allthemodium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:allthemodium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:allthemodium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"}],
    "result": {"item": "mysticalagriculture:allthemodium_seeds"}})
  //Vibranium
  event.shaped('allthemodium:vibranium_ingot', ['111','111','111'], {
    1: 'mysticalagriculture:vibranium_essence'})
  event.remove({id: 'mysticalagriculture:vibranium_seeds_infusion'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "minecraft:netherite_block"}, "ingredients":[
  {"item": "allthemodium:vibranium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:vibranium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:vibranium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:vibranium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"}],
    "result": {"item": "mysticalagriculture:vibranium_seeds"}})
  //Unobtainium
  event.shaped('allthemodium:unobtainium_ingot', ['111','111','111'], {
    1: 'mysticalagriculture:unobtainium_essence'})
  event.remove({id: 'mysticalagriculture:unobtainium_seeds_infusion'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "minecraft:netherite_block"}, "ingredients":[
  {"item": "allthemodium:unobtainium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:unobtainium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:unobtainium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"},
  {"item": "allthemodium:unobtainium_block"},
  {"item": "mysticalagriculture:awakened_supremium_essence"}],
    "result": {"item": "mysticalagriculture:unobtainium_seeds"}})
//Cyclic
  //Crystallized Amber
  event.shaped('3x cyclic:gem_amber', ['111','1 1','111'], {
    1: 'mysticalagriculture:crystallized_amber_essence'})
  //Crystallized Obsidian
  event.shaped('2x cyclic:gem_obsidian', ['111','1 1','111'], {
    1: 'mysticalagriculture:crystallized_obsidian_essence'})
//ArmorPlus
  //Lava Crystal
  event.shaped('2x armorplus:lava_crystal', ['111','1 1','111'], {
    1: 'mysticalagriculture:lava_crystal_essence'})
  //Frost Crystal
  event.shaped('2x armorplus:frost_crystal', ['111','1 1','111'], {
    1: 'mysticalagriculture:frost_crystal_essence'})
//Botania/Mythic
  //Dragonstone
  event.shaped('2x botania:dragonstone', ['111','1 1','111'], {
    1: 'mysticalagriculture:dragonstone_essence'})
  //Alfsteel
  event.shaped('mythicbotany:alfsteel_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:alfsteel_essence'})
//Thermal
  //Cinnabar
  event.shaped('4x thermal:cinnabar', ['111','1 1','111'], {
    1: 'mysticalagriculture:cinnabar_essence'})
//Undergarden
  //Froststeel
  event.shaped('4x undergarden:froststeel_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:froststeel_essence'})
  //Cloggrum
  event.shaped('4x undergarden:cloggrum_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:cloggrum_essence'})
  //Forgotten
  event.shaped('undergarden:forgotten_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:forgotten_essence'})
  //Utherium Crystal
  event.shaped('4x undergarden:utherium_crystal', ['111','1 1','111'], {
    1: 'mysticalagriculture:utherium_crystal_essence'})
  //Regalium Crystal
  event.shaped('2x undergarden:regalium_crystal', ['111','1 1','111'], {
    1: 'mysticalagriculture:regalium_crystal_essence'})
//Ad Astra
  //Ice Shard
  event.shaped('6x ad_astra:ice_shard', ['111','1 1','111'], {
    1: 'mysticalagriculture:ice_shard_essence'})
  //Desh
  event.shaped('4x ad_astra:desh_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:desh_essence'})
  //Ostrum
  event.shaped('2x ad_astra:ostrum_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:ostrum_essence'})
  //Calorite
  event.shaped('ad_astra:calorite_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:calorite_essence'})
//Blue Skies
  //Horizonite
  event.shaped('4x blue_skies:horizonite_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:horizonite_essence'})
  //Falsite
  event.shaped('2x blue_skies:falsite_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:falsite_essence'})
  //Ventium
  event.shaped('blue_skies:ventium_ingot', ['111','1 1','111'], {
    1: 'mysticalagriculture:ventium_essence'})
  //Pyrope
  event.shaped('8x blue_skies:pyrope_gem', ['111','1 1','111'], {
    1: 'mysticalagriculture:pyrope_essence'})
  //Moonstone
  event.shaped('8x blue_skies:moonstone', ['111','1 1','111'], {
    1: 'mysticalagriculture:moonstone_essence'})
  //Aquite
  event.shaped('4x blue_skies:aquite', ['111','1 1','111'], {
    1: 'mysticalagriculture:aquite_essence'})
  //Charoite
  event.shaped('2x blue_skies:charoite', ['111','1 1','111'], {
    1: 'mysticalagriculture:charoite_essence'})
  //Diopside
  event.shaped('blue_skies:diopside_gem', ['111','1 1','111'], {  
    1: 'mysticalagriculture:diopside_essence'})
//Flux Network
  //Flux
  event.shaped('4x fluxnetworks:flux_dust', ['111','1 1','111'], {  
    1: 'mysticalagriculture:flux_essence'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "fluxnetworks:flux_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "fluxnetworks:flux_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "fluxnetworks:flux_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "fluxnetworks:flux_block"},
  {"item": "mysticalagriculture:supremium_essence"}],
    "result": {"item": "mysticalagriculture:flux_seeds"}})
//The TwilightForest
  //Carminite
  event.shaped('2x twilightforest:carminite', ['111','1 1','111'], {  
    1: 'mysticalagriculture:carminite_essence'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "twilightforest:carminite_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "twilightforest:carminite_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "twilightforest:carminite_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "twilightforest:carminite_block"},
  {"item": "mysticalagriculture:supremium_essence"}],
    "result": {"item": "mysticalagriculture:carminite_seeds"}})
//Spirit
  //Soul Steel
  event.shaped('spirit:soul_steel_ingot', ['111','1 1','111'], {  
    1: 'mysticalagriculture:soul_steel_essence'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "spirit:soul_steel_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "spirit:soul_steel_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "spirit:soul_steel_block"},
  {"item": "mysticalagriculture:supremium_essence"},
  {"item": "spirit:soul_steel_block"},
  {"item": "mysticalagriculture:supremium_essence"}],
    "result": {"item": "mysticalagriculture:soul_steel_seeds"}})
//Mystical
  //Shard
  event.shaped('4x mysticalagriculture:prosperity_shard', ['111','1 1','111'], {  
    1: 'mysticalagriculture:shard_essence'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "mysticalagriculture:prosperity_ore"},
  {"item": "mysticalagriculture:inferium_essence"},
  {"item": "mysticalagradditions:nether_prosperity_ore"},
  {"item": "mysticalagriculture:inferium_essence"},
  {"item": "mysticalagradditions:end_prosperity_ore"},
  {"item": "mysticalagriculture:inferium_essence"},
  {"item": "mysticalagriculture:prosperity_block"},
  {"item": "mysticalagriculture:inferium_essence"}],
    "result": {"item": "mysticalagriculture:shard_seeds"}})

  //AntiMatter
  event.shaped('mekanism:pellet_antimatter', ['111','111','111'], {  
    1: 'mysticalagriculture:antimatter_essence'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "mekaevolution:infinite_control_circuit"},
  {"item": "mysticalagradditions:insanium_essence"},
  {"item": "mekaevolution:infinite_control_circuit"},
  {"item": "mysticalagradditions:insanium_essence"},
  {"item": "mekaevolution:infinite_control_circuit"},
  {"item": "mysticalagradditions:insanium_essence"},
  {"item": "mekaevolution:infinite_control_circuit"},
  {"item": "mysticalagradditions:insanium_essence"}],
    "result": {"item": "mysticalagriculture:antimatter_seeds"}})
  //Infinity
  event.shaped('avaritia:infinity_nugget', ['111','111','111'], {  
    1: 'mysticalagriculture:infinity_essence'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
  {"item": "avaritia:infinity"},
  {"item": "mysticalagradditions:creative_essence"},
  {"item": "avaritia:infinity"},
  {"item": "mysticalagradditions:creative_essence"},
  {"item": "avaritia:infinity"},
  {"item": "mysticalagradditions:creative_essence"},
  {"item": "avaritia:infinity"},
  {"item": "mysticalagradditions:creative_essence"}],
    "result": {"item": "mysticalagriculture:infinity_seeds"}})
  //Ultimate
  event.shaped('extendedcrafting:the_ultimate_nugget', ['111','111','111'], {  
    1: 'mysticalagriculture:ultimate_essence'})
  event.custom({"type": "mysticalagriculture:infusion",
  "input": {"item": "mysticalagriculture:prosperity_seed_base"}, "ingredients":[
    {"item": "extendedcrafting:the_ultimate_block"},
    {"item": "mysticalagradditions:creative_essence"},
    {"item": "extendedcrafting:the_ultimate_block"},
    {"item": "mysticalagradditions:creative_essence"},
    {"item": "extendedcrafting:the_ultimate_block"},
    {"item": "mysticalagradditions:creative_essence"},
    {"item": "extendedcrafting:the_ultimate_block"},
    {"item": "mysticalagradditions:creative_essence"}],
    "result": {"item": "mysticalagriculture:ultimate_seeds"}})

    
})