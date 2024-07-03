// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
//Philosophers Stone
  event.remove({id: 'projecte:philosophers_stone'})
  event.remove({id: 'projecte:philosophers_stone_alt'})
//Collector
  event.remove({id: 'projecte:collector_mk1'})
  event.remove({id: 'projectexpansion:collector/mk1_conversion'})
  event.remove({id: 'projecte:collector_mk2'})
  event.remove({id: 'projectexpansion:collector/mk2_conversion'})
  event.remove({id: 'projecte:collector_mk3'})
  event.remove({id: 'projectexpansion:collector/mk3_conversion'})
//Relay
  event.remove({id: 'projecte:relay_mk1'})
  event.remove({id: 'projectexpansion:relay/mk1_conversion'})
  event.remove({id: 'projecte:relay_mk2'})
  event.remove({id: 'projectexpansion:relay/mk2_conversion'})
  event.remove({id: 'projecte:relay_mk3'})
  event.remove({id: 'projectexpansion:relay/mk3_conversion'})
//Matter Upgrader
  event.remove({id: 'projectexpansion:matter_upgrader_1'})
  event.remove({id: 'projectexpansion:matter_upgrader_2'})

//Final Star
event.remove({id: 'projectexpansion:star/final_star'})
event.shaped('projectexpansion:final_star', ['111', '121', '111'], {
  1: 'projectexpansion:final_star_shard', 2: 'mysticalagradditions:creative_essence'})
//Final Star Shard
event.remove({id: 'projectexpansion:star/final_star_shard'})
event.shaped('projectexpansion:final_star_shard', ['111', '121', '111'], {
  1: 'projectexpansion:colossal_star_omega', 2: 'extendedcrafting:ultimate_singularity'})

//Philosophers Stone
event.recipes.extendedcrafting.shaped_table ('projecte:philosophers_stone',  [
    '114222411',
    '145626541',
    '455323554',
    '263373362',
    '222787222',
    '263373362',
    '455323554',
    '145626541',
    '114222411',
  ],  {
    1: 'undergarden:forgotten_block', 
    2: 'projecte:high_covalence_dust',
    3: 'projecte:medium_covalence_dust',
    4: 'projecte:low_covalence_dust',
    5: 'extendedcrafting:luminessence',
    6: 'extendedcrafting:the_ultimate_ingot',
    7: 'allthemodium:piglich_heart',
    8: 'compressium:cobblestone_9'})

//Klein Star (Tier 1)
  event.remove({id: 'projecte:klein_star_ein'})
  event.shaped('projecte:klein_star_ein', ['11 ', '12 '], {
    1: 'projecte:mobius_fuel', 2: '#forge:ingots/aluminum'})
//Klein Star (Tier 2)
event.remove({id: 'projecte:klein_star_zwei'})
event.shaped('projecte:klein_star_zwei', ['11 ', '12 '], {
  1: 'projecte:klein_star_ein', 2: '#forge:ingots/tin'})
//Klein Star (Tier 3)
event.remove({id: 'projecte:klein_star_drei'})
event.shaped('projecte:klein_star_drei', ['11 ', '12 '], {
  1: 'projecte:klein_star_zwei', 2: '#forge:ingots/zinc'})
//Klein Star (Tier 4)
event.remove({id: 'projecte:klein_star_vier'})
event.shaped('projecte:klein_star_vier', ['11 ', '12 '], {
  1: 'projecte:klein_star_drei', 2: '#forge:ingots/lead'})
//Klein Star (Tier 5)
event.remove({id: 'projecte:klein_star_sphere'})
event.shaped('projecte:klein_star_sphere', ['11 ', '12 '], {
  1: 'projecte:klein_star_vier', 2: '#forge:ingots/brass'})
//Klein Star (Tier 6)
event.remove({id: 'projecte:klein_star_omega'})
event.shaped('projecte:klein_star_omega', ['11 ', '12 '], {
  1: 'projecte:klein_star_sphere', 2: '#forge:ingots/silver'})

//Magnum Star (Tier 7)
event.remove({id: 'projectexpansion:star/magnum/ein'})
event.shaped('projectexpansion:magnum_star_ein', ['11 ', '12 '], {
  1: 'projecte:klein_star_omega', 2: '#forge:ingots/nickel'})
//Magnum Star (Tier 8)
event.remove({id: 'projectexpansion:star/magnum/zwei'})
event.shaped('projectexpansion:magnum_star_zwei', ['11 ', '12 '], {
  1: 'projectexpansion:magnum_star_ein', 2: '#forge:ingots/compressed_iron'})
//Magnum Star (Tier 9)
event.remove({id: 'projectexpansion:star/magnum/drei'})
event.shaped('projectexpansion:magnum_star_drei', ['11 ', '12 '], {
  1: 'projectexpansion:magnum_star_zwei', 2: '#forge:ingots/steel'})
//Magnum Star (Tier 10)
event.remove({id: 'projectexpansion:star/magnum/vier'})
event.shaped('projectexpansion:magnum_star_vier', ['11 ', '12 '], {
  1: 'projectexpansion:magnum_star_drei', 2: '#forge:ingots/hop_graphite'})
//Magnum Star (Tier 11)
event.remove({id: 'projectexpansion:star/magnum/sphere'})
event.shaped('projectexpansion:magnum_star_sphere', ['11 ', '12 '], {
  1: 'projectexpansion:magnum_star_vier', 2: '#forge:ingots/osmium'})
//Magnum Star (Tier 12)
event.remove({id: 'projectexpansion:star/magnum/omega'})
event.shaped('projectexpansion:magnum_star_omega', ['11 ', '12 '], {
  1: 'projectexpansion:magnum_star_sphere', 2: 'blue_skies:horizonite_ingot'})

//Colossal Star (Tier 13)
event.remove({id: 'projectexpansion:star/colossal/ein'})
event.shaped('projectexpansion:colossal_star_ein', ['11 ', '12 '], {
  1: 'projectexpansion:magnum_star_omega', 2: '#forge:ingots/desh'})
//Colossal Star (Tier 14)
event.remove({id: 'projectexpansion:star/colossal/zwei'})
event.shaped('projectexpansion:colossal_star_zwei', ['11 ', '12 '], {
  1: 'projectexpansion:colossal_star_ein', 2: '#forge:ingots/ostrum'})
//Colossal Star (Tier 15)
event.remove({id: 'projectexpansion:star/colossal/drei'})
event.shaped('projectexpansion:colossal_star_drei', ['11 ', '12 '], {
  1: 'projectexpansion:colossal_star_zwei', 2: '#forge:ingots/forgotten_metal'})
//Colossal Star (Tier 16)
event.remove({id: 'projectexpansion:star/colossal/vier'})
event.shaped('projectexpansion:colossal_star_vier', ['11 ', '12 '], {
  1: 'projectexpansion:colossal_star_drei', 2: '#forge:ingots/calorite'})
//Colossal Star (Tier 17)
event.remove({id: 'projectexpansion:star/colossal/sphere'})
event.shaped('projectexpansion:colossal_star_sphere', ['11 ', '12 '], {
  1: 'projectexpansion:colossal_star_vier', 2: 'blue_skies:ventium_ingot'})
//Colossal Star (Tier 18)
event.remove({id: 'projectexpansion:star/colossal/omega'})
event.shaped('projectexpansion:colossal_star_omega', ['11 ', '12 '], {
  1: 'projectexpansion:colossal_star_sphere', 2: '#forge:ingots/platinum'})

//Collector
event.remove({id: 'projectexpansion:collector/basic'})
event.shaped('projectexpansion:basic_collector', ['121', '131', '141'], {
  1: '#forge:storage_blocks/glowstone', 2: 'projecte:klein_star_drei', 3: 'projecte:aeternalis_fuel_block', 4: 'minecraft:furnace'})

//Relay
event.remove({id: 'projectexpansion:relay/basic'})
event.shaped('projectexpansion:basic_relay', ['121', '131', '111'], {
  1: '#forge:obsidian', 2: 'projecte:klein_star_drei', 3: 'projecte:aeternalis_fuel_block'})

//EMC Link
event.remove({id: 'projectexpansion:emc_link/basic'})
event.shaped('projectexpansion:basic_emc_link', ['141', '323', '141'], {
  1: 'projecte:low_covalence_dust', 2: 'projecte:klein_star_drei', 3: 'projecte:medium_covalence_dust', 4: 'projecte:high_covalence_dust'})

//Covalence Dust
//Low
  event.remove({id: 'projecte:low_covalence_dust'})
  event.shaped('8x projecte:low_covalence_dust', ['123','456','789'], {
    1: '#forge:dusts/glowstone', 2: '#forge:dusts/redstone', 3: '#forge:dusts/amethyst', 4: '#forge:dusts/wood', 5: 'ae2:sky_dust',
    6: '#forge:dusts/quartz', 7: '#forge:dusts/coal', 8: '#forge:dusts/zinc', 9: '#forge:dusts/brass'})
//Medium
  event.remove({id: 'projecte:medium_covalence_dust'})
  event.shaped('4x projecte:medium_covalence_dust', ['123','456','789'], {
    1: 'projecte:low_covalence_dust', 2: '#forge:dusts/ender_pearl', 3: '#forge:dusts/refined_obsidian', 4: 'mysticalagriculture:soul_dust', 5: 'redstone_arsenal:flux_dust',
    6: '#forge:dusts/obsidian', 7: '#forge:dusts/fluorite', 8: '#forge:dusts/platinum', 9: '#forge:dusts/iridium'})
//High
  event.remove({id: 'projecte:high_covalence_dust'})
  event.shaped('2x projecte:high_covalence_dust', ['123','456','789'], {
    1: 'projecte:medium_covalence_dust', 2: 'fluxnetworks:flux_dust', 3: 'botania:pixie_dust', 4: 'waystones:warp_dust', 5: '#forge:dusts/allthemodium',
    6: '#forge:dusts/unobtainium', 7: '#forge:dusts/vibranium', 8: 'mysticalagriculture:cognizant_dust', 9: '#forge:dusts/netherite'})


//Condenser MK1
  event.remove({id: 'projecte:condenser_mk1'})
  event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
      "ABCDDDCEA",
      "BFFFGFFFE",
      "CFHHIHHFC",
      "JFHKKKHFJ",
      "JGILMLIGJ",
      "JFHKKKHFJ",
      "CFHHIHHFC",
      "EFFFGFFFB",
      "AECDDDCBA"],
    "key": {
      "A": {"item": "pocketstorage:psu_4"},
      "B": {"item": "rftoolsstorage:storage_module3"},
      "C": {"item": "projecte:alchemical_chest"},
      "D": {"item": "ae2additions:cell_component_65536"},
      "E": {"item": "enderstorage:ender_chest"},
      "F": {"item": "armorplus:en_netherite"},
      "G": {"item": "thermalendergy:endergy_upgrade_3"},
      "H": {"item": "mysticalagradditions:insanium_essence"},
      "I": {"item": "functionalstorage:netherite_upgrade"},
      "J": {"item": "extradisks:1048576k_storage_part"},
      "K": {"item": "mekaevolution:infinite_control_circuit"},
      "L": {"item": "storagenetwork:master"},
      "M": {"item": "projecte:transmutation_table"}},
    "result": {"item": "projecte:condenser_mk1"}})

//Condenser MK2
  event.remove({id: 'projecte:condenser_mk2'})
  event.custom({"type": "extendedcrafting:shaped_table","pattern": [
      "ABBCCCBBA",
      "ABDDDDDBA",
      "EEEEEEEEE",
      "EFGHHHGFE",
      "EGFHIHFGE",
      "EFGHHHGFE",
      "EEEEEEEEE",
      "ABDDDDDBA",
      "ABBCCCBBA"],
    "key": {
      "A": {"item": "extendedcrafting:crystaltine_ingot"},
      "B": {"item": "avaritia:neutron"},
      "C": {"item": "avaritia:infinity_ingot"},
      "D": {"item": "avaritia:infinity_catalyst"},
      "E": {"item": "extendedcrafting:the_ultimate_ingot"},
      "F": {"item": "compressium:cobblestone_9"},
      "G": {"item": "projecte:condenser_mk1"},
      "H": {"item": "minecraft:nether_star"},
      "I": {"item": "projecte:transmutation_tablet"}},
    "result": {"item": "projecte:condenser_mk2"}})

//Transmutation Interface
event.remove({id: 'projectexpansion:transmutation_interface'})
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
    "AAAABAAAA",
    "AAAABAAAA",
    "BBBCDCBBB",
    "EFFDFDFFE",
    "GFDHGHDFG",
    "EFFDFDFFE",
    "BBBCDCBBB",
    "AAAABAAAA",
    "AAAABAAAA"],
  "key": {
    "A": {"item": "avaritia:neutron"},
    "B": {"item": "avaritia:infinity_ingot"},
    "C": {"item": "mysticalagradditions:creative_essence"},
    "D": {"item": "projecte:condenser_mk2"},    
    "E": {"item": "compressium:cobblestone_9"},
    "F": {"item": "extendedcrafting:the_ultimate_ingot"},
    "G": {"item": "extendedcrafting:ultimate_singularity"},
    "H": {"item": "projecte:transmutation_tablet"}},
  "result": {"item": "projectexpansion:transmutation_interface"}})

//Transmutation Table
event.remove({id: 'projecte:transmutation_table'})
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
      "AAAABAAAA",
      "ACCDBDCCA",
      "ACEFBFECA",
      "ADFGBGFDA",
      "BBBBHBBBB",
      "ADFGBGFDA",
      "ACEFBFECA",
      "ACCDBDCCA",
      "AAAABAAAA"],
    "key": {
      "A": {"item": "minecraft:netherite_ingot"},
      "B": {"item": "minecraft:nether_star"},
      "C": {"item": "pneumaticcraft:upgrade_matrix"},
      "D": {"item": "mekaevolution:infinite_control_circuit"},
      "E": {"item": "mysticalagradditions:insanium_essence"},
      "F": {"item": "powah:capacitor_nitro"},
      "G": {"item": "compressium:cobblestone_9"},
      "H": {"item": "projecte:philosophers_stone"}},
    "result": {"item": "projecte:transmutation_table"}})

//Transmutation Tablet
event.remove({id: 'projecte:transmutation_tablet'})
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
    "AAABBBAAA",
    "ACCDDDCCA",
    "ACEFGFECA",
    "BHFIIIFHB",
    "BHGIJIGHB",
    "BHFIIIFHB",
    "ACEFGFECA",
    "ACCDDDCCA",
    "AAABBBAAA"],
  "key": {
    "A": {"item": "avaritia:neutron"},
    "B": {"item": "avaritia:infinity_catalyst"},
    "C": {"item": "extendedcrafting:luminessence"},
    "D": {"item": "mysticalagradditions:insanium_essence"},
    "E": {"item": "mekaevolution:infinite_control_circuit"},
    "F": {"item": "botanicadds:gaiasteel_block"},
    "G": {"item": "compressium:cobblestone_9"},
    "H": {"item": "minecraft:nether_star"},
    "I": {"item": "extendedcrafting:the_ultimate_ingot"},
    "J": {"item": "projecte:transmutation_table"}},
  "result": {"item": "projecte:transmutation_tablet"}})

//Tome of Knowledge
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
    "AAABBBAAA",
    "ACCBDBCCA",
    "AEEFFFEEA",
    "GFFFHFFFG",
    "GFIHJHIFG",
    "GFFFHFFFG",
    "AEEFFFEEA",
    "ACCBDBCCA",
    "AAABBBAAA"],
  "key": {
    "A": {"item": "extendedcrafting:luminessence"},
    "B": {"item": "extendedcrafting:crystaltine_ingot"},
    "C": {"item": "extendedcrafting:flux_star"},
    "D": {"item": "extendedcrafting:the_ultimate_block"},
    "E": {"item": "avaritia:infinity_ingot"},
    "F": {"item": "extendedcrafting:the_ultimate_ingot"},
    "G": {"item": "avaritia:infinity_catalyst"},
    "H": {"item": "mysticalagradditions:creative_essence"},
    "I": {"item": "extendedcrafting:ultimate_singularity"},
    "J": {"item": "projecte:transmutation_tablet"}},
  "result": {"item": "projecte:tome"}})

//Iron Band
event.remove({id: 'projecte:iron_band'})
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
    " AAA ",
    "AABAA",
    "ABCBA",
    "AABAA",
    " AAA "],
  "key": {
    "A": {"item": "minecraft:iron_block"},
    "B": {"item": "armorplus:infused_lava_crystal"},
    "C": {"item": "thermal:iron_gear"}},
  "result": {"item": "projecte:iron_band"}})

//Pedestal
event.remove({id: 'projecte:dm_pedestal'})
event.custom({"type": "extendedcrafting:shaped_table","pattern": [
    "ABCBA",
    "ABCBA",
    "ABCBA",
    "ACCCA",
    "CCCCC"],
  "key": {
    "A": {"item": "projecte:dark_matter"},
    "B": {"item": "projecte:red_matter"},
    "C": {"item": "projecte:dark_matter_block"}},
  "result": {"item": "projecte:dm_pedestal"}})

//Harvest Goddess Band
event.remove({id: 'projecte:harvest_goddess_band'})
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
    "ABCBA",
    "DEEED",
    "CEFEC",
    "DEEED",
    "AGCGA"],
  "key": {
    "A": {"tag": "minecraft:saplings"},
    "B": {"item": "twilightforest:giant_leaves"},
    "C": {"tag": "minecraft:flowers"},
    "D": {"item": "projecte:dark_matter_block"},
    "E": {"item": "mysticalagriculture:nature_agglomeratio"},
    "F": {"item": "projecte:iron_band"},
    "G": {"item": "twilightforest:giant_log"}},
  "result": {"item": "projecte:harvest_goddess_band"}})

//Watch of Flwoing Time
event.remove({id: 'projecte:watch_of_flowing_time'})
event.custom({"type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "BBBCCCBBB",
    "CCDDEDDCC",
    "CDDFFFDDC",
    "CGHFIFHJC",
    "CDDFFFDDC",
    "CCDDKDDCC",
    "BBBCCCBBB",
    "AAAAAAAAA"],
  "key": {
    "A": {"item": "projecte:dark_matter_block"},
    "B": {"item": "projecte:red_matter_block"},
    "C": {"item": "projecte:dark_matter"},
    "D": {"item": "mysticalagriculture:supremium_growth_accelerator"},
    "E": {"item": "tiab:time_in_a_bottle",},
    "F": {"item": "projecte:iron_band"},
    "G": {"item": "tiab:time_in_a_bottle",},
    "H": {"item": "projecte:harvest_goddess_band"},
    "I": {"item": "projecte:klein_star_omega"},
    "J": {"item": "tiab:time_in_a_bottle",},
    "K": {"item": "tiab:time_in_a_bottle",}},
  "result": {"item": "projecte:watch_of_flowing_time"}})

//Evertide Amulet
event.remove({id: 'projecte:evertide_amulet'})
event.custom({"type": "extendedcrafting:shaped_table","pattern": [
    "AABAA",
    "ACCCA",
    "BCDCB",
    "ACCCA",
    "AABAA"],
  "key": {
    "A": {"item": "mysticalagriculture:water_essence"},
    "B": {"item": "minecraft:water_bucket"},
    "C": {"item": "mysticalagriculture:water_agglomeratio"},
    "D": {"item": "projecte:iron_band"}},
  "result": {"item": "projecte:evertide_amulet"}})

//Volcanite Amulet
event.remove({id: 'projecte:volcanite_amulet'})
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
    "AABAA",
    "ACCCA",
    "BCDCB",
    "ACCCA",
    "AABAA"],
  "key": {
    "A": {"item": "mysticalagriculture:fire_essence"},
    "B": {"item": "minecraft:lava_bucket"},
    "C": {"item": "mysticalagriculture:fire_agglomeratio"},
    "D": {"item": "projecte:iron_band"}},
  "result": {"item": "projecte:volcanite_amulet"}})

//Soul Stone
event.remove({id:'projecte:soul_stone'})
event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
    "ABCBA",
    "DEEED",
    "DFGFD",
    "DEEED",
    "ABCBA"],
  "key": {
    "A": {"item": "allthemodium:piglich_heart"},
    "B": {"item": "bhc:green_heart"},
    "C": {"item": "bhc:blue_heart"},
    "D": {"item": "bhc:yellow_heart"},
    "E": {"item": "bhc:red_heart"},
    "F": {"item": "projecte:evertide_amulet"},
    "G": {"item": "projecte:iron_band"}},
  "result": {"item": "projecte:soul_stone"}})

//Body Stone
event.remove({id:'projecte:body_stone'})
event.custom({"type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBA",
    "CDDDC",
    "EFGFE",
    "CDDDC",
    "ABBBA"],
    "key": {
    "A": {"item": "minecraft:enchanted_golden_apple"},
    "B": {"item": "cyclic:apple_diamond"},
    "C": {"item": "bhc:relic_apple"},
    "D": {"item": "reliquary:glowing_bread"},
    "E": {"item": "mysticalagradditions:insanium_apple"},
    "F": {"item": "projecte:volcanite_amulet"},
    "G": {"item": "projecte:iron_band"}},
  "result": {"item": "projecte:body_stone"}})

//Life
event.remove({id:'projecte:life_stone'})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBABBA",
    "CDDDDDC",
    "CDEEEDC",
    "AFEAEGA",
    "CDEEEDC",
    "CDDDDDC",
    "ABBABBA"
  ],
  "key": {
    "A": {"item": "minecraft:totem_of_undying"},
    "B": {"item": "bhc:blue_heart"},
    "C": {"item": "bhc:green_heart"},
    "D": {"item": "projecte:dark_matter"},
    "E": {"item": "allthemodium:piglich_heart"},
    "F": {"item": "projecte:body_stone",},
    "G": {"item": "projecte:soul_stone",}},
  "result": {"item": "projecte:life_stone"}})


})