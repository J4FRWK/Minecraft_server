// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
//Applied Energistics 2
  //Fluix Crsytal
  event.remove({id: 'ae2:transform/fluix_crystals'})
  event.remove({id: 'ae2:transform/fluix_crystal'})
  event.shaped('2x ae2:fluix_crystal', ['111','232','111'], {
    1: 'ae2:charged_certus_quartz_crystal', 2: '#forge:storage_blocks/quartz', 3: '#forge:storage_blocks/redstone'})
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", "inputs": [
    {"type": "pneumaticcraft:stacked_item", "tag": "forge:dusts/redstone", "count": 4},
    {"type": "pneumaticcraft:stacked_item", "tag": "forge:gems/quartz", "count": 2},
    {"type": "pneumaticcraft:stacked_item", "item": "ae2:charged_certus_quartz_crystal", "count": 4}],
    "pressure": 2.5, "results": [{ "item": "ae2:fluix_block"}]})
  //Controller
  event.remove({id: 'ae2:network/blocks/controller'})
  event.shaped('ae2:controller', ['111','424','131'], {
    1: '#forge:ingots/dragonsteel', 2: 'storagenetwork:collector', 3: 'ae2:engineering_processor', 4: 'pneumaticcraft:capacitor'})
  //Charger
  event.remove({id: 'ae2:network/blocks/crystal_processing_charger'})
  event.shaped('ae2:charger', ['121','1  ','121'], {
    1: '#forge:ingots/osmium', 2: 'ae2:certus_quartz_crystal'})
  //Inscriber
  event.remove({id: 'ae2:network/blocks/inscribers'})
  event.shaped('ae2:inscriber', ['131','2 1','131'], {
    1: '#forge:ingots/osmium', 2: 'ae2:certus_quartz_crystal', 3: 'minecraft:sticky_piston'})
  //Advanced Inscriber
  event.remove({id: 'ae2things:blocks/advanced_inscriber'})
  event.shaped('ae2things:advanced_inscriber', ['121','343','121'], {
    1: '#forge:storage_blocks/osmium', 2: '#forge:storage_blocks/certus_quartz', 3: 'ae2:engineering_processor', 4: 'ae2:inscriber'})
  
  
  //Processors
  //Logic
  event.remove({id: 'ae2:inscriber/logic_processor'})
  event.custom({
    "type": "ae2:inscriber", "ingredients": {
      "bottom": {"item": "ae2:printed_silicon"},
      "middle": {"item": "minecraft:redstone_block"},
      "top": {"item": "ae2:printed_logic_processor"}},
    "mode": "press", "result": {"item": "ae2:logic_processor"}})
  event.remove({id: 'ae2:inscriber/logic_processor_print'})
  event.custom({
    "type": "ae2:inscriber", "ingredients": {
      "middle": {"item": "armorplus:en_gold"},
      "top": {"item": "ae2:logic_processor_press"}},
    "mode": "inscribe", "result": {"item": "ae2:printed_logic_processor"}})
  //Engineering
  event.remove({id: 'ae2:inscriber/engineering_processor'})
  event.custom({
    "type": "ae2:inscriber", "ingredients": {
      "bottom": {"item": "ae2:printed_silicon"},
      "middle": {"item": "minecraft:redstone_block"},
      "top": {"item": "ae2:printed_engineering_processor"}},
    "mode": "press", "result": {"item": "ae2:engineering_processor"}})
  event.remove({id: 'ae2:inscriber/engineering_processor_print'})
  event.custom({
    "type": "ae2:inscriber", "ingredients": {
      "middle": {"item": "armorplus:en_diamond"},
      "top": {"item": "ae2:engineering_processor_press"}},
    "mode": "inscribe", "result": {"item": "ae2:printed_engineering_processor"}})
  //Calculation
  event.remove({id: 'ae2:inscriber/calculation_processor'})
  event.custom({
    "type": "ae2:inscriber", "ingredients": {
      "bottom": {"item": "ae2:printed_silicon"},
      "middle": {"item": "minecraft:redstone_block"},
      "top": {"item": "ae2:printed_calculation_processor"}},
    "mode": "press", "result": {"item": "ae2:calculation_processor"}})
  event.remove({id: 'ae2:inscriber/calculation_processor_print'})
  event.custom({
    "type": "ae2:inscriber", "ingredients": {
      "middle": {"item": "armorplus:en_iron"},
      "top": {"item": "ae2:calculation_processor_press"}},
    "mode": "inscribe", "result": {"item": "ae2:printed_calculation_processor"}})
  
  
  //Core
  //Formation
  event.remove({id: 'ae2:materials/formationcore'})
  event.shaped('2x ae2:formation_core', ['111','232','111'], {
    1: 'ae2:quartz_block', 2: 'ae2:logic_processor', 3: '#forge:ingots/refined_glowstone'})
  //Annihilation
  event.remove({id: 'ae2:materials/annihilationcore'})
  event.shaped('2x ae2:annihilation_core', ['111','232','111'], {
    1: 'ae2:quartz_block', 2: 'ae2:logic_processor', 3: '#forge:ingots/refined_obsidian'})
  //Card
  event.remove({id: 'ae2:materials/advancedcard'})
  event.shaped('2x ae2:advanced_card', ['13 ','243', '13 '], {
    1: '#forge:ingots/netherite', 2: 'ae2:quartz_block', 3: '#forge:ingots/refined_obsidian', 4: 'ae2:engineering_processor'})
  event.remove({id: 'ae2:materials/cardcrafting'})
  event.shapeless('ae2:crafting_card', ['minecraft:crafting_table', 'ae2:advanced_card'])
  //Matter Condenser
  event.remove({id: 'ae2:network/blocks/io_condenser'})
  event.shaped('ae2:condenser', ['121','232','121'], {
    1: 'mekanism:hdpe_sheet', 2: 'ae2:quartz_block', 3: 'ae2:engineering_processor'})

  //Security/Wireless
  //Security Terminal
  event.remove({id: 'ae2:network/blocks/security_station'})
  event.shaped('ae2:security_station', ['121','343','151'], {
    1: 'ae2:quartz_block', 2: 'ae2:singularity', 3: 'ae2:fluix_pearl', 4: 'ae2additions:cell_component_1024', 5: 'ae2:engineering_processor'})
  //Wireless Recieve
  event.remove({id: 'ae2:network/wireless_part'})
  event.shaped('ae2:wireless_receiver', [' 1 ','232',' 2 '], {
    1: 'ae2:fluix_pearl', 2: 'ae2:quartz_block', 3: 'ae2:singularity'})
  //Wireless Point
  event.remove({id: 'ae2:network/wireless_access_point'})
  event.shaped('ae2:wireless_access_point', [' 1 ',' 2 ',' 3 '], {
    1: 'ae2:wireless_receiver', 2: 'ae2:singularity', 3: 'ae2:engineering_processor'})
  //Wireless Booster
  event.remove({id: 'ae2:network/wireless_booster'})
  event.shaped('ae2:wireless_booster', ['121','343'], {
    1: 'ae2:quartz_block', 2: 'ae2:fluix_pearl', 3: '#forge:ingots/refined_obsidian', 4: 'ae2:engineering_processor'})
  //Wireless Infinity
  event.remove({id: 'aeinfinitybooster:infinity_card'})
  event.shaped('aeinfinitybooster:infinity_card', ['121','232','444'], {
    1: 'ae2:singularity', 2: 'ae2:wireless_booster', 3: 'minecraft:nether_star' , 4:'armorplus:en_netherite'})
  //Wireless Dimensional
  event.remove({id: 'aeinfinitybooster:dimension_card'})
  event.shaped('aeinfinitybooster:dimension_card', ['121','232','444'], {
    1: 'ae2:singularity', 2: 'aeinfinitybooster:infinity_card', 3: 'extendedcrafting:nether_star_block', 4:'thermal_extra:dragonsteel_block'})
  //Wireless Terminal
  event.remove({id: 'ae2:network/wireless_terminal'})
  event.shaped('ae2:wireless_terminal', ['121','131','141'], {
    1: 'ae2:quartz_block', 2: 'ae2:singularity', 3: 'ae2:terminal', 4:'ae2:engineering_processor'})
  //Crafting Terminal
  event.remove({id: 'ae2:network/wireless_crafting_terminal'})
  event.remove({id: 'ae2:network/upgrade_wireless_crafting_terminal'})
  event.shaped('ae2:wireless_crafting_terminal', ['121','131','141'], {
    1: 'ae2:quartz_block', 2: 'ae2:wireless_terminal', 3: 'ae2:crafting_terminal', 4:'ae2:engineering_processor'})
  //Pattern Access
  event.remove({id: 'ae2wtlib:pattern_access/wireless_pattern_access_terminal'})
  event.shaped('ae2wtlib:wireless_pattern_access_terminal', ['121','131','141'], {
    1: 'ae2:quartz_block', 2: 'ae2:wireless_terminal', 3: 'ae2:pattern_access_terminal', 4:'ae2:engineering_processor'})
  //Pattern Encoding
  event.remove({id: 'ae2wtlib:pattern_encoding/wireless_pattern_encoding_terminal'})
  event.remove({id: 'ae2wtlib:pattern_encoding/upgrade_wireless_pattern_encoding_terminal'})
  event.shaped('ae2wtlib:wireless_pattern_encoding_terminal', ['121','131','141'], {
    1: 'ae2:quartz_block', 2: 'ae2:wireless_terminal', 3: 'ae2:pattern_encoding_terminal', 4:'ae2:engineering_processor'})
  //Universal
  event.remove({id: 'ae2wtlib:pattern_encoding/wireless_pattern_encoding_terminal'})
  event.remove({id: 'ae2wtlib:pattern_encoding/upgrade_wireless_pattern_encoding_terminal'})
  event.shaped(Item.of('ae2wtlib:wireless_universal_terminal', '{crafting:1b,internalMaxPower:4800000.0d,pattern_access:1b,pattern_encoding:1b}'), ['121','131','141'], {
    1: 'ae2:quartz_block', 2: 'ae2:wireless_crafting_terminal', 3: 'ae2wtlib:wireless_pattern_encoding_terminal', 4:'ae2wtlib:wireless_pattern_access_terminal'})

  //Machines
  //Disk Drive
  event.remove({id: 'ae2:network/blocks/storage_drive'})
  event.shaped('ae2:drive', ['121','131','121'], {
    1: 'ae2:quartz_block', 2: 'ae2:engineering_processor', 3: 'thermal_extra:twinite_block'})
  //Energy Acceptor
  event.remove({id: 'ae2:network/blocks/energy_energy_acceptor'})
  event.shaped('ae2:energy_acceptor', ['121','232','141'], {
    1: 'ae2:quartz_block', 2: 'pneumaticcraft:pressure_chamber_glass', 3: 'cyclic:battery', 4:'ae2:engineering_processor'})
  //Interface
  event.remove({id: 'ae2:network/blocks/interfaces_interface'})
  event.shaped('ae2:interface', ['121','435','121'], {
    1: 'ae2:quartz_block', 2: 'ae2:engineering_processor', 3: 'thermal_extra:shellite_block', 4: 'ae2:formation_core', 5: 'ae2:annihilation_core'})
  //Molecular Assembler
  event.remove({id: 'ae2:network/crafting/molecular_assembler'})
  event.shaped('ae2:molecular_assembler', ['121','435','121'], {
    1: 'ae2:quartz_block', 2: 'ae2:engineering_processor', 3: 'thermal_extra:soul_infused_block', 4: 'ae2:formation_core', 5: 'ae2:annihilation_core'})

  //Crafting
  //Crafting Unit
  event.remove({id: 'ae2:network/crafting/cpu_crafting_unit'})
  event.shaped('ae2:crafting_unit', ['121','232','121'], {
    1: 'ae2:quartz_block', 2: 'ae2:engineering_processor', 3: 'avaritia:compressed_crafting_table'})
  //Mega Crafting Unit
  event.remove({id: 'megacells:crafting/mega_crafting_unit'})
  event.shaped('megacells:mega_crafting_unit', ['121','232','121'], {
    1: 'ae2:quartz_block', 2: 'ae2:engineering_processor', 3: 'ae2:crafting_unit'})



  //Energy Cells
  //Energy Cell
  event.remove({id: 'ae2:network/blocks/energy_energy_cell'})
  event.shaped('ae2:energy_cell', ['121','232','121'], {
    1: 'ae2:quartz_block', 2: 'ae2:engineering_processor', 3: 'mekanism:ultimate_energy_cube'})
  //Dense Energy Cell
  event.remove({id: 'ae2:network/blocks/energy_dense_energy_cell'})
  event.shaped('ae2:dense_energy_cell', ['111','121','111'], {
    1: 'ae2:energy_cell', 2: 'mekanism:hdpe_sheet'})
  //Mega Energy Cell
  event.remove({id: 'megacells:crafting/mega_energy_cell'})
  event.shaped('megacells:mega_energy_cell', ['111','121','111'], {
    1: 'ae2:dense_energy_cell', 2: 'mekanism:hdpe_sheet'})

  
  //Storage
  //1k
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_1k_part'})
  event.shaped('ae2:cell_component_1k', ['121','343','131'], {
    1: 'ae2:calculation_processor', 2: 'ae2:quartz_block', 3: '#forge:chests', 4: '#forge:ingots/compressed_iron'})
  //4k
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_4k_part'})
  event.shaped('ae2:cell_component_4k', ['121','343','131'], {
    1: 'ae2:calculation_processor', 2: 'ae2:quartz_block', 3: 'ae2:cell_component_1k', 4: '#forge:ingots/compressed_iron'})
  //16k
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_16k_part'})
  event.shaped('ae2:cell_component_16k', ['121','343','131'], {
    1: 'ae2:logic_processor', 2: 'ae2:quartz_block', 3: 'ae2:cell_component_4k', 4: '#forge:ingots/compressed_iron'})
  //64k
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_64k_part'})
  event.shaped('ae2:cell_component_64k', ['121','343','131'], {
    1: 'ae2:logic_processor', 2: 'ae2:quartz_block', 3: 'ae2:cell_component_16k', 4: '#forge:ingots/compressed_iron'})
  //256k
  event.remove({id: 'ae2:network/cells/item_storage_components_cell_256k_part'})
  event.shaped('ae2:cell_component_256k', ['121','343','131'], {
    1: 'ae2:engineering_processor', 2: 'ae2:quartz_block', 3: 'ae2:cell_component_64k', 4: '#forge:ingots/compressed_iron'})
  //1024k
  event.remove({id: 'ae2additions:components/1024k'})
  event.shaped('ae2additions:cell_component_1024', ['121','343','131'], {
    1: 'ae2:engineering_processor', 2: 'ae2:quartz_block', 3: 'ae2:cell_component_256k', 4: '#forge:ingots/compressed_iron'})
  //4096k
  event.remove({id: 'ae2additions:components/4096k'})
  event.shaped('ae2additions:cell_component_4096', ['121','343','131'], {
    1: 'ae2:engineering_processor', 2: 'ae2:quartz_block', 3: 'ae2additions:cell_component_1024', 4: '#forge:ingots/compressed_iron'})
  //16384k
  event.remove({id: 'ae2additions:components/16384k'})
  event.shaped('ae2additions:cell_component_16384', ['121','343','131'], {
    1: 'ae2:engineering_processor', 2: 'ae2:quartz_block', 3: 'ae2additions:cell_component_4096', 4: '#forge:ingots/compressed_iron'})
  //65536k
  event.remove({id: 'ae2additions:components/65536k'})
  event.shaped('ae2additions:cell_component_65536', ['121','343','131'], {
    1: 'ae2:engineering_processor', 2: 'ae2:quartz_block', 3: 'ae2additions:cell_component_16384', 4: '#forge:ingots/compressed_iron'})
  //Super Storage
  //1k
  event.remove({id: 'ae2additions:components/super/1k'})
  event.shaped('ae2additions:super_cell_component_1k', ['121','111','121'], {
    1: 'ae2:cell_component_1k', 2: 'ae2:quartz_block'})
  //4k
  event.remove({id: 'ae2additions:components/super/4k'})
  event.shaped('ae2additions:super_cell_component_4k', ['121','111','121'], {
    1: 'ae2:cell_component_4k', 2: 'ae2:quartz_block'})
  //16k
  event.remove({id: 'ae2additions:components/super/16k'})
  event.shaped('ae2additions:super_cell_component_16k', ['121','111','121'], {
    1: 'ae2:cell_component_16k', 2: 'ae2:quartz_block'})
  //64k
  event.remove({id: 'ae2additions:components/super/64k'})
  event.shaped('ae2additions:super_cell_component_64k', ['121','111','121'], {
    1: 'ae2:cell_component_64k', 2: 'ae2:quartz_block'})
  //256k
  event.remove({id: 'ae2additions:components/super/256k'})
  event.shaped('ae2additions:super_cell_component_256k', ['121','111','121'], {
    1: 'ae2:cell_component_256k', 2: 'ae2:quartz_block'})
  //1024k
  event.remove({id: 'ae2additions:components/super/1024k'})
  event.shaped('ae2additions:super_cell_component_1024k', ['121','111','121'], {
    1: 'ae2additions:cell_component_1024', 2: 'ae2:quartz_block'})
  //4096k
  event.remove({id: 'ae2additions:components/super/4096k'})
  event.shaped('ae2additions:super_cell_component_4096k', ['121','111','121'], {
    1: 'ae2additions:cell_component_4096', 2: 'ae2:quartz_block'})
  //16m
  event.remove({id: 'ae2additions:components/super/16m'})
  event.shaped('ae2additions:super_cell_component_16m', ['121','111','121'], {
    1: 'ae2additions:cell_component_16384', 2: 'ae2:quartz_block'})
  //65m
  event.remove({id: 'ae2additions:components/super/65m'})
  event.shaped('ae2additions:super_cell_component_65m', ['121','111','121'], {
    1: 'ae2additions:cell_component_65536', 2: 'ae2:quartz_block'})
  //Mega Cells
  //1m
  event.remove({id: 'megacells:cells/cell_component_1m'})
  event.shaped('megacells:cell_component_1m', ['121','111','121'], {
    1: 'ae2additions:super_cell_component_256k', 2: 'ae2:quartz_block'})
  //4m
  event.remove({id: 'megacells:cells/cell_component_4m'})
  event.shaped('megacells:cell_component_4m', ['121','111','121'], {
    1: 'ae2additions:super_cell_component_1024k', 2: 'ae2:quartz_block'})
  //16m
  event.remove({id: 'megacells:cells/cell_component_16m'})
  event.shaped('megacells:cell_component_16m', ['121','111','121'], {
    1: 'ae2additions:super_cell_component_4096k', 2: 'ae2:quartz_block'})
  //64m
  event.remove({id: 'megacells:cells/cell_component_64m'})
  event.shaped('megacells:cell_component_64m', ['121','111','121'], {
    1: 'ae2additions:super_cell_component_16m', 2: 'ae2:quartz_block'})
  //256m
  event.remove({id: 'megacells:cells/cell_component_256m'})
  event.shaped('megacells:cell_component_256m', ['121','111','121'], {
    1: 'ae2additions:super_cell_component_65m', 2: 'ae2:quartz_block'})
  //AE2WTLIB
  event.remove({output: 'ae2wtlib:infinity_booster_card'}),
  event.remove({output: 'ae2wtlib:magnet_card'})
})