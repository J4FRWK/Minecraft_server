// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
//General
  //Quartz Enriched Iron
  event.remove({id: 'refinedstorage:quartz_enriched_iron'}),
  event.remove({id: 'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron'}) 
  event.shaped('2x refinedstorage:quartz_enriched_iron', ['111','121','111'], {
    1: '#forge:gems/quartz', 2: '#forge:ingots/compressed_iron'})
  //Machine Frame
  event.remove({id: 'refinedstorage:machine_casing'}) 
  event.shaped('refinedstorage:machine_casing', ['111', '121', '111'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'mekanism:steel_casing'})
  //Advanced Machine Frame
  event.remove({id: 'extradisks:advanced_machine_casing'}) 
  event.shaped('extradisks:advanced_machine_casing', ['111', '323', '111'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:machine_casing', 3: 'extrastorage:neural_processor'})
  //Processor Binding
  event.remove({id: 'refinedstorage:processor_binding'}) 
  event.shaped('4x refinedstorage:processor_binding', ['121'], {
    1: '#forge:string', 2: 'refinedstorage:quartz_enriched_iron'})
//Storage Part
  //Storage
  //1k
  event.remove({id: 'refinedstorage:1k_storage_part'})
  event.shaped('refinedstorage:1k_storage_part', ['121','343','131'], {
    1: 'refinedstorage:basic_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: '#forge:chests', 4: '#forge:ingots/compressed_iron'})
  //4k
  event.remove({id: 'refinedstorage:4k_storage_part'})
  event.shaped('refinedstorage:4k_storage_part', ['121','343','131'], {
    1: 'refinedstorage:basic_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'refinedstorage:1k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //16k
  event.remove({id: 'refinedstorage:16k_storage_part'})
  event.shaped('refinedstorage:16k_storage_part', ['121','343','131'], {
    1: 'refinedstorage:improved_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'refinedstorage:4k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //64k
  event.remove({id: 'refinedstorage:64k_storage_part'})
  event.shaped('refinedstorage:64k_storage_part', ['121','343','131'], {
    1: 'refinedstorage:improved_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'refinedstorage:16k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //256k
  event.remove({id: 'extradisks:part/256k_storage_part'})
  event.shaped('extradisks:256k_storage_part', ['121','343','131'], {
    1: 'refinedstorage:advanced_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'refinedstorage:64k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //1024k
  event.remove({id: 'extradisks:part/1024k_storage_part'})
  event.shaped('extradisks:1024k_storage_part', ['121','343','131'], {
    1: 'refinedstorage:advanced_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:256k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //4096k
  event.remove({id: 'extradisks:part/4096k_storage_part'})
  event.shaped('extradisks:4096k_storage_part', ['121','343','131'], {
    1: 'rebornstorage:super_advanced_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:1024k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //16384k
  event.remove({id: 'extradisks:part/16384k_storage_part'})
  event.shaped('extradisks:16384k_storage_part', ['121','343','131'], {
    1: 'rebornstorage:super_advanced_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:4096k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //65536k
  event.remove({id: 'extradisks:part/65536k_storage_part'})
  event.shaped('extradisks:65536k_storage_part', ['121','343','131'], {
    1: 'extrastorage:neural_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:16384k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //262m
  event.remove({id: 'extradisks:part/262144k_storage_part'})
  event.shaped('extradisks:262144k_storage_part', ['121','343','131'], {
    1: 'extrastorage:neural_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:65536k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //1048m
  event.remove({id: 'extradisks:part/1048576k_storage_part'})
  event.shaped('extradisks:1048576k_storage_part', ['121','343','131'], {
    1: 'extradisks:withering_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:262144k_storage_part', 4: '#forge:ingots/compressed_iron'})
  //Fluid
  //64k
  event.remove({id: 'refinedstorage:64k_fluid_storage_part'})
  event.shaped('refinedstorage:64k_fluid_storage_part', ['121','343','131'], {
    1: 'refinedstorage:basic_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'minecraft:bucket', 4: '#forge:ingots/refined_obsidian'})
  //256k
  event.remove({id: 'refinedstorage:256k_fluid_storage_part'})
  event.shaped('refinedstorage:256k_fluid_storage_part', ['121','343','131'], {
    1: 'refinedstorage:basic_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'refinedstorage:64k_fluid_storage_part', 4: '#forge:ingots/refined_obsidian'})
  //1024k
  event.remove({id: 'refinedstorage:1024k_fluid_storage_part'})
  event.shaped('refinedstorage:1024k_fluid_storage_part', ['121','343','131'], {
    1: 'refinedstorage:improved_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'refinedstorage:256k_fluid_storage_part', 4: '#forge:ingots/refined_obsidian'})
  //4096k
  event.remove({id: 'refinedstorage:4096k_fluid_storage_part'})
  event.shaped('refinedstorage:4096k_fluid_storage_part', ['121','343','131'], {
    1: 'refinedstorage:improved_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'refinedstorage:1024k_fluid_storage_part', 4: '#forge:ingots/refined_obsidian'})
  //16384k
  event.remove({id: 'extradisks:part/16384k_fluid_storage_part'})
  event.shaped('extradisks:16384k_fluid_storage_part', ['121','343','131'], {
    1: 'refinedstorage:advanced_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'refinedstorage:4096k_fluid_storage_part', 4: '#forge:ingots/refined_obsidian'})
  //65536k
  event.remove({id: 'extradisks:part/65536k_fluid_storage_part'})
  event.shaped('extradisks:65536k_fluid_storage_part', ['121','343','131'], {
    1: 'rebornstorage:super_advanced_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:16384k_fluid_storage_part', 4: '#forge:ingots/refined_obsidian'})
  //262m
  event.remove({id: 'extradisks:part/262144k_fluid_storage_part'})
  event.shaped('extradisks:262144k_fluid_storage_part', ['121','343','131'], {
    1: 'extrastorage:neural_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:65536k_fluid_storage_part', 4: '#forge:ingots/refined_obsidian'})
  //1048m
  event.remove({id: 'extradisks:part/1048576k_fluid_storage_part'})
  event.shaped('extradisks:1048576k_fluid_storage_part', ['121','343','131'], {
    1: 'extradisks:withering_processor', 2: 'refinedstorage:quartz_enriched_iron_block', 3: 'extradisks:262144k_fluid_storage_part', 4: '#forge:ingots/refined_obsidian'})
//Machines
  //Disk Drive
  event.remove({id: 'refinedstorage:disk_drive'})
  event.shaped('refinedstorage:disk_drive', ['121','131','121'], {
    1: 'refinedstorage:quartz_enriched_iron_block', 2: 'refinedstorage:advanced_processor', 3: 'thermal_extra:twinite_block'})
  //Controller
  event.remove({id: 'refinedstorage:controller'})
  event.shaped('refinedstorage:controller', ['131','424','131'], {
    1: '#forge:ingots/dragonsteel', 2: 'storagenetwork:collector', 3: 'refinedstorage:advanced_processor', 4: 'pneumaticcraft:capacitor'})
//Disk Manipulator
  //Normal
  event.remove({id: 'refinedstorage:disk_manipulator'}) 
  event.shaped('refinedstorage:disk_manipulator', ['141', '232', '141'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:advanced_processor', 3: 'refinedstorage:storage_housing', 4: 'refinedstorage:improved_processor'})
  //Elite
  event.remove({id: 'cabletiers:elite_disk_manipulator'}) 
  event.shaped('cabletiers:elite_disk_manipulator', ['141', '232', '141'], {
    1: '#forge:storage_blocks/compressed_iron', 2: 'rebornstorage:super_advanced_processor', 3: 'refinedstorage:disk_manipulator', 4: 'refinedstorage:advanced_processor'})
  //Ultra
  event.remove({id: 'cabletiers:ultra_disk_manipulator'})
  event.shaped('cabletiers:ultra_disk_manipulator', ['141', '232', '141'], {
    1: '#forge:storage_blocks/refined_obsidian', 2: 'extrastorage:neural_processor', 3: 'cabletiers:elite_disk_manipulator', 4: 'rebornstorage:super_advanced_processor'})
  //Creative
  event.remove({id: 'cabletiers:creative_disk_manipulator'})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["ABA","BCB","ABA"], "key": {
      "A": {"item": "ad_astra:calorite_block"}, "B": {"item": "cabletiers:ultra_disk_manipulator"}, "C": {"item": "extendedcrafting:luminessence_block"}},
    "result": {"item": "cabletiers:creative_disk_manipulator"}})
//Requester
  //Normal
  event.remove({id: 'rsrequestify:requester'}) 
  event.shaped('rsrequestify:requester', ['141', '232', '141'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:advanced_processor', 3: 'refinedstorage:crafting_upgrade', 4: 'refinedstorage:improved_processor'})
  //Elite
  event.remove({id: 'cabletiers:elite_requester'}) 
  event.shaped('cabletiers:elite_requester', ['141', '232', '141'], {
    1: '#forge:storage_blocks/compressed_iron', 2: 'rebornstorage:super_advanced_processor', 3: 'rsrequestify:requester', 4: 'refinedstorage:advanced_processor'})
  //Ultra
  event.remove({id: 'cabletiers:ultra_requester'})
  event.shaped('cabletiers:ultra_requester', ['141', '232', '141'], {
    1: '#forge:storage_blocks/refined_obsidian', 2: 'extrastorage:neural_processor', 3: 'cabletiers:elite_requester', 4: 'rebornstorage:super_advanced_processor'})
  //Creative
  event.remove({id: 'cabletiers:creative_requester'})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["ABA","BCB","ABA"],
      "key": {"A": {"item": "ad_astra:calorite_block"}, "B": {"item": "cabletiers:ultra_requester"},"C": {"item": "extendedcrafting:luminessence_block"}},
      "result": {"item": "cabletiers:creative_requester"}})
//Network
  //Receiver
  event.remove({id: 'refinedstorage:network_receiver'})
  event.shaped('refinedstorage:network_receiver', ['131','424','131'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:neural_processor', 4: 'pneumaticcraft:capacitor'})
  //Transmitter
  event.remove({id: 'refinedstorage:network_transmitter'})
  event.shaped('refinedstorage:network_transmitter', ['131','424','131'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:neural_processor', 4: 'pneumaticcraft:transistor'})
  //Card
  event.remove({id: 'refinedstorage:network_card'})
  event.shaped('refinedstorage:network_card', ['131','424','131'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:upgrade', 3: 'extrastorage:neural_processor', 4: 'extradisks:withering_processor'})
//Crafting
  //Crafter
  event.remove({id: 'refinedstorage:crafter'})
  event.shaped('refinedstorage:crafter', ['131','424','151'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:machine_casing', 3: 'refinedstorage:construction_core', 4: 'refinedstorage:advanced_processor', 
    5: 'refinedstorage:destruction_core'})
  //Crafter Tier 1
  event.remove({id: 'extrastorage:iron_crafter'})
  event.shaped('extrastorage:iron_crafter', ['131','424','131'], {
    1: '#forge:storage_blocks/compressed_iron', 2: 'refinedstorage:machine_casing', 3: 'refinedstorage:crafter', 4: 'rebornstorage:super_advanced_processor'})
  //Crafter Tier 2
  event.remove({id: 'extrastorage:gold_crafter'})
  event.shaped('extrastorage:gold_crafter', ['131','424','131'], {
    1: '#forge:storage_blocks/refined_obsidian', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:iron_crafter', 4: 'extrastorage:neural_processor'})
  //Crafter Tier 3
  event.remove({id: 'extrastorage:diamond_crafter'})
  event.shaped('extrastorage:diamond_crafter', ['131','424','131'], {
    1: '#forge:storage_blocks/calorite', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:gold_crafter', 4: 'extrastorage:neural_processor'})
  //Crafter Tier 4
  event.remove({id: 'extrastorage:netherite_crafter'})
  event.shaped('extrastorage:netherite_crafter', ['131','424','131'], {
    1: '#forge:storage_blocks/allthemodium', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:diamond_crafter', 4: 'extradisks:withering_processor'})
  //Creative Crafter
  event.remove({id: 'creativecrafter:creative_crafter'})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": [ "ABA", "CDC", "ABA"], "key": {
    "A": {"item": "botanicadds:gaiasteel_block"}, "B": {"item": "extrastorage:netherite_crafter"}, "C": {"item": "extradisks:withering_processor"}, "D": {"item": "extradisks:advanced_machine_casing"}},
    "result": {"item": "creativecrafter:creative_crafter"}})
//Multiblock Crafter
  //Casing
  event.remove({id: 'rebornstorage:multiblock_frame'})
  event.shaped('4x rebornstorage:multiblock_frame', ['131','323','131'], {
    1: 'mekanism:induction_casing', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:neural_processor'})
  //Heat Conductor
  event.remove({id: 'rebornstorage:multiblock_heat'})
  event.shaped('rebornstorage:multiblock_heat', ['131','323','131'], {
    1: 'rebornstorage:multiblock_frame', 2: 'mekanism:superheating_element', 3: 'extrastorage:neural_processor'})
  //Crafting CPU
  event.remove({id: 'rebornstorage:multiblock_cpu'})
  event.shaped('rebornstorage:multiblock_cpu', ['131','323','131'], {
    1: 'rebornstorage:multiblock_frame', 2: 'avaritia:double_compressed_crafting_table', 3: 'extrastorage:neural_processor'})
  //Crafting Storage
  event.remove({id: 'rebornstorage:multiblock_storage'})
  event.shaped('rebornstorage:multiblock_storage', ['131','323','131'], {
    1: 'rebornstorage:multiblock_frame', 2: 'refinedstorage:64k_storage_part', 3: 'extrastorage:neural_processor'})
//Wireless
  //Transmitter
  event.remove({id: 'refinedstorage:wireless_transmitter'})
  event.shaped('refinedstorage:wireless_transmitter', ['141','323','111'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'extradisks:advanced_machine_casing', 3: 'rebornstorage:super_advanced_processor', 4: 'extradisks:1024k_storage_part'})
  //Advanced Transmitter
  event.remove({id: 'rebornstorage:advanced_wireless_transmitter'})
  event.shaped('rebornstorage:advanced_wireless_transmitter', ['111','323','111'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:wireless_transmitter', 3: 'extrastorage:neural_processor'})
  //Range
  event.remove({id: 'refinedstorage:range_upgrade'})
  event.shaped('refinedstorage:range_upgrade', ['121','343'], {
    1: 'refinedstorage:quartz_enriched_iron_block', 2: 'refinedstorage:upgrade', 3: '#forge:ingots/refined_obsidian', 4: 'rebornstorage:super_advanced_processor'})
  //Infinity
  event.remove({id: 'rsinfinitybooster:infinity_card'})
  event.shaped('rsinfinitybooster:infinity_card', ['121','232','444'], {
    1: 'extrastorage:neural_processor', 2: 'refinedstorage:range_upgrade', 3: 'minecraft:nether_star', 4:'armorplus:en_netherite'})
  //Dimensional
  event.remove({id: 'rsinfinitybooster:dimension_card'})
  event.shaped('rsinfinitybooster:dimension_card', ['121','232','444'], {
    1: 'extradisks:withering_processor', 2: 'rsinfinitybooster:infinity_card', 3: 'extendedcrafting:nether_star_block', 4:'thermal_extra:dragonsteel_block'})
//Wireless Grids
  //Crafting
  event.remove({id: 'refinedstorageaddons:wireless_crafting_grid'})
  event.shaped('refinedstorageaddons:wireless_crafting_grid', ['131','424','131'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:neural_processor', 4: 'avaritia:double_compressed_crafting_table'})
  //Monitor
  event.remove({id: 'refinedstorage:wireless_crafting_monitor'})
  event.shaped('refinedstorage:wireless_crafting_monitor', ['131','424','131'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:neural_processor', 4: 'rftoolsutility:screen_controller'})
  //Fluid
  event.remove({id: 'refinedstorage:wireless_fluid_grid'})
  event.shaped('refinedstorage:wireless_fluid_grid', ['131','424','131'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'extradisks:advanced_machine_casing', 3: 'extrastorage:neural_processor', 4: 'blue_skies:ventium_bucket'})
  //Super Grid
  event.remove({id: 'rebornstorage:parts/super_wireless_crafting_grid'})
  event.shaped('rebornstorage:super_wireless_crafting_grid', ['121','131','141'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:wireless_crafting_monitor', 3: 'refinedstorageaddons:wireless_crafting_grid',
    4: 'refinedstorage:wireless_fluid_grid'})
//Processor
  //Basic
  event.remove({id: 'refinedstorage:raw_basic_processor'}) 
  event.shaped('refinedstorage:raw_basic_processor', ['121', '343'], {
    1: 'refinedstorage:processor_binding', 2: 'armorplus:en_iron', 3: 'refinedstorage:quartz_enriched_iron', 4: '#forge:dusts/redstone'})
  //Improved
  event.remove({id: 'refinedstorage:raw_improved_processor'}) 
  event.shaped('refinedstorage:raw_improved_processor', ['121', '343'], {
    1: 'refinedstorage:processor_binding', 2: 'armorplus:en_gold', 3: 'refinedstorage:quartz_enriched_iron', 4: '#forge:dusts/redstone'})
  //Advanced
  event.remove({id: 'refinedstorage:raw_advanced_processor'}) 
  event.shaped('refinedstorage:raw_advanced_processor', ['121', '343'], {
    1: 'refinedstorage:processor_binding', 2: 'armorplus:en_diamond', 3: 'refinedstorage:quartz_enriched_iron', 4: '#forge:dusts/redstone'})
  //Super
  event.remove({id: 'rebornstorage:parts/raw_super_advanced_processor'}) 
  event.shaped('rebornstorage:raw_super_advanced_processor', ['121', '343'], {
    1: 'refinedstorage:processor_binding', 2: 'armorplus:en_netherite', 3: 'refinedstorage:quartz_enriched_iron', 4: '#forge:dusts/redstone'})
  //Neural
  event.remove({id: 'extrastorage:raw_neural_processor'}) 
  event.shaped('extrastorage:raw_neural_processor', ['161', '343', '252'], {
    1: 'refinedstorage:raw_basic_processor', 2: 'refinedstorage:quartz_enriched_iron', 3: 'refinedstorage:raw_improved_processor', 4: 'refinedstorage:raw_advanced_processor',
    5: 'rebornstorage:raw_super_advanced_processor', 6: 'refinedstorage:processor_binding'})
  //Withering
  event.remove({id: 'extradisks:raw_withering_processor'}) 
  event.shaped('extradisks:raw_withering_processor', ['161', '343', '252'], {
    1: 'refinedstorage:raw_advanced_processor', 2: 'refinedstorage:quartz_enriched_iron', 3: 'rebornstorage:raw_super_advanced_processor', 4: 'extrastorage:raw_neural_processor',
    5: 'minecraft:nether_star', 6: 'refinedstorage:processor_binding'})
  //Construction
  event.remove({id: 'refinedstorage:construction_core'}) 
  event.shaped('refinedstorage:construction_core', ['121'], {
    1: '#forge:storage_blocks/glowstone', 2: 'refinedstorage:basic_processor'})
  //Destruction
  event.remove({id: 'refinedstorage:destruction_core'}) 
  event.shaped('refinedstorage:destruction_core', ['121'], {
    1: '#forge:storage_blocks/quartz', 2: 'refinedstorage:basic_processor'})
  
//Upgrades
  //Normal
  event.remove({id: 'refinedstorage:upgrade'}) 
  event.shaped('refinedstorage:upgrade', ['131', '121', '131'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:advanced_processor', 3: '#forge:glass'})
  //Speed
  event.remove({id: 'refinedstorage:speed_upgrade'}) 
  event.shaped('refinedstorage:speed_upgrade', ['121', '343', '111'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: '#forge:buckets/honey', 3: '#forge:storage_blocks/sugar_cane', 4: 'refinedstorage:upgrade'})
  //Stack
  event.remove({id: 'refinedstorage:stack_upgrade'}) 
  event.shaped('refinedstorage:stack_upgrade', ['121', '343', '111'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'compressium:cobblestone_1', 3: 'refinedstorage:speed_upgrade', 4: 'refinedstorage:upgrade'})
  //Crafting
  event.remove({id: 'refinedstorage:crafting_upgrade'}) 
  event.shaped('refinedstorage:crafting_upgrade', ['121', '343', '111'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'cyclic:workbench', 3: 'avaritia:double_compressed_crafting_table', 4: 'refinedstorage:upgrade'})

//Cables
  //Normal Cables
  event.remove({id: 'refinedstorage:cable'}) 
  event.shaped('8x refinedstorage:cable', ['111', '232', '111'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:basic_processor', 3: 'storagenetwork:kabel'})
//Importer
  //Normal
  event.remove({id: 'refinedstorage:importer'}) 
  event.shaped('refinedstorage:importer', ['141', '232', '141'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:advanced_processor', 3: 'refinedstorage:cable', 4: 'refinedstorage:destruction_core'})
  //Elite
  event.remove({id: 'cabletiers:elite_importer'}) 
  event.shaped('cabletiers:elite_importer', ['141', '232', '141'], {
    1: '#forge:storage_blocks/compressed_iron', 2: 'rebornstorage:super_advanced_processor', 3: 'refinedstorage:importer', 4: 'refinedstorage:advanced_processor'})
  //Ultra
  event.remove({id: 'cabletiers:ultra_importer'})
  event.shaped('cabletiers:ultra_importer', ['141', '232', '141'], {
    1: '#forge:storage_blocks/refined_obsidian', 2: 'extrastorage:neural_processor', 3: 'cabletiers:elite_importer', 4: 'rebornstorage:super_advanced_processor'})
  //Creative
  event.remove({id: 'cabletiers:creative_importer'})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["ABA","BCB","ABA"],
      "key": {"A": {"item": "ad_astra:calorite_block"}, "B": {"item": "cabletiers:ultra_importer"},"C": {"item": "extendedcrafting:luminessence_block"}},
      "result": {"item": "cabletiers:creative_importer"}})
//Exporter
  //Normal
  event.remove({id: 'refinedstorage:exporter'}) 
  event.shaped('refinedstorage:exporter', ['141', '232', '141'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:advanced_processor', 3: 'refinedstorage:cable', 4: 'refinedstorage:construction_core'})
  //Elite
  event.remove({id: 'cabletiers:elite_exporter'}) 
  event.shaped('cabletiers:elite_exporter', ['141', '232', '141'], {
    1: '#forge:storage_blocks/compressed_iron', 2: 'rebornstorage:super_advanced_processor', 3: 'refinedstorage:exporter', 4: 'refinedstorage:advanced_processor'})
  //Ultra
  event.remove({id: 'cabletiers:ultra_exporter'})
  event.shaped('cabletiers:ultra_exporter', ['141', '232', '141'], {
    1: '#forge:storage_blocks/refined_obsidian', 2: 'extrastorage:neural_processor', 3: 'cabletiers:elite_exporter', 4: 'rebornstorage:super_advanced_processor'})
  //Creative
  event.remove({id: 'cabletiers:creative_exporter'})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["ABA","BCB","ABA"],
      "key": {"A": {"item": "ad_astra:calorite_block"}, "B": {"item": "cabletiers:ultra_exporter"},"C": {"item": "extendedcrafting:luminessence_block"}},
      "result": {"item": "cabletiers:creative_exporter"}})
//Destructor
  //Normal
  event.remove({id: 'refinedstorage:destructor'}) 
  event.shaped('refinedstorage:destructor', ['141', '232', '151'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:advanced_processor', 3: 'refinedstorage:cable', 4: 'refinedstorage:destruction_core', 
    5: 'refinedstorage:improved_processor'})
  //Elite
  event.remove({id: 'cabletiers:elite_destructor'}) 
  event.shaped('cabletiers:elite_destructor', ['141', '232', '141'], {
    1: '#forge:storage_blocks/compressed_iron', 2: 'rebornstorage:super_advanced_processor', 3: 'refinedstorage:destructor', 4: 'refinedstorage:advanced_processor'})
  //Ultra
  event.remove({id: 'cabletiers:ultra_destructor'})
  event.shaped('cabletiers:ultra_destructor', ['141', '232', '141'], {
    1: '#forge:storage_blocks/refined_obsidian', 2: 'extrastorage:neural_processor', 3: 'cabletiers:elite_destructor', 4: 'rebornstorage:super_advanced_processor'})
  //Creative
  event.remove({id: 'cabletiers:creative_destructor'})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["ABA","BCB","ABA"],
      "key": {"A": {"item": "ad_astra:calorite_block"}, "B": {"item": "cabletiers:ultra_destructor"},"C": {"item": "extendedcrafting:luminessence_block"}},
      "result": {"item": "cabletiers:creative_destructor"}})
//Constructor
  //Normal
  event.remove({id: 'refinedstorage:constructor'}) 
  event.shaped('refinedstorage:constructor', ['141', '232', '151'], {
    1: 'refinedstorage:quartz_enriched_iron', 2: 'refinedstorage:advanced_processor', 3: 'refinedstorage:cable', 4: 'refinedstorage:construction_core', 
    5: 'refinedstorage:improved_processor'})
  //Elite
  event.remove({id: 'cabletiers:elite_constructor'}) 
  event.shaped('cabletiers:elite_constructor', ['141', '232', '141'], {
    1: '#forge:storage_blocks/compressed_iron', 2: 'rebornstorage:super_advanced_processor', 3: 'refinedstorage:constructor', 4: 'refinedstorage:advanced_processor'})
  //Ultra
  event.remove({id: 'cabletiers:ultra_constructor'})
  event.shaped('cabletiers:ultra_constructor', ['141', '232', '141'], {
    1: '#forge:storage_blocks/refined_obsidian', 2: 'extrastorage:neural_processor', 3: 'cabletiers:elite_constructor', 4: 'rebornstorage:super_advanced_processor'})
  //Creative
  event.remove({id: 'cabletiers:creative_constructor'})
  event.custom({"type": "extendedcrafting:shaped_ender_crafter", "pattern": ["ABA","BCB","ABA"],
      "key": {"A": {"item": "ad_astra:calorite_block"}, "B": {"item": "cabletiers:ultra_constructor"},"C": {"item": "extendedcrafting:luminessence_block"}},
      "result": {"item": "cabletiers:creative_constructor"}})


  //Infinite
  event.remove({id: 'extradisks:disk/shaped/infinite_storage_disk'})
  event.remove({id: 'extradisks:disk/shapeless/infinite_storage_disk'})

  event.remove({id: 'extradisks:blocks/infinite_storage_block'})
  
  event.remove({id: 'extradisks:disk/shaped/infinite_fluid_storage_disk'})
  event.remove({id: 'extradisks:disk/shapeless/infinite_fluid_storage_disk'})

  event.remove({id: 'extradisks:blocks/infinite_fluid_storage_block'})



})




//Remove
ServerEvents.recipes(event => {
  //Refined Storage
  event.remove({output: 'refinedstorage:controller'}),
  //Extra Storage
  event.remove({output: 'extrastorage:advanced_exporter'}),
  event.remove({output: 'extrastorage:advanced_importer'}),
  event.remove({output: 'extrastorage:storagepart_256k'}),
  event.remove({output: 'extrastorage:storagepart_1024k'}),
  event.remove({output: 'extrastorage:storagepart_4096k'}),
  event.remove({output: 'extrastorage:storagepart_16384k'}),
  event.remove({output: 'extrastorage:storagepart_16384k_fluid'}),
  event.remove({output: 'extrastorage:storagepart_65536k_fluid'}),
  event.remove({output: 'extrastorage:storagepart_262144k_fluid'}),
  event.remove({output: 'extrastorage:storagepart_1048576k_fluid'}),
  event.remove({output: 'extrastorage:disk_256k'}),
  event.remove({output: 'extrastorage:disk_1024k'}),
  event.remove({output: 'extrastorage:disk_4096k'}),
  event.remove({output: 'extrastorage:disk_16384k'}),
  event.remove({output: 'extrastorage:disk_16384k_fluid'}),
  event.remove({output: 'extrastorage:disk_65536k_fluid'}),
  event.remove({output: 'extrastorage:disk_262144k_fluid'}),
  event.remove({output: 'extrastorage:disk_1048576k_fluid'}),
  event.remove({output: 'extrastorage:block_256k'}),
  event.remove({output: 'extrastorage:block_1024k'}),
  event.remove({output: 'extrastorage:block_4096k'}),
  event.remove({output: 'extrastorage:block_16384k'}),
  event.remove({output: 'extrastorage:block_16384k_fluid'}),
  event.remove({output: 'extrastorage:block_65536k_fluid'}),
  event.remove({output: 'extrastorage:block_262144k_fluid'}),
  event.remove({output: 'extrastorage:block_1048576k_fluid'}),
  //RebornStorage
  event.remove({output: 'rebornstorage:small_item_disk'}),
  event.remove({output: 'rebornstorage:medium_item_disk'}),
  event.remove({output: 'rebornstorage:large_item_disk'}),
  event.remove({output: 'rebornstorage:larger_item_disk'}),
  event.remove({output: 'rebornstorage:small_fluid_disk'}),
  event.remove({output: 'rebornstorage:medium_fluid_disk'}),
  event.remove({output: 'rebornstorage:large_fluid_disk'}),
  event.remove({output: 'rebornstorage:larger_fluid_disk'}),
  event.remove({output: 'rebornstorage:small_item_disk_part'}),
  event.remove({output: 'rebornstorage:medium_item_disk_part'}),
  event.remove({output: 'rebornstorage:large_item_disk_part'}),
  event.remove({output: 'rebornstorage:larger_item_disk_part'}),
  event.remove({output: 'rebornstorage:small_fluid_disk_part'}),
  event.remove({output: 'rebornstorage:medium_fluid_disk_part'}),
  event.remove({output: 'rebornstorage:large_fluid_disk_part'}),
  event.remove({output: 'rebornstorage:larger_fluid_disk_part'})
  
})