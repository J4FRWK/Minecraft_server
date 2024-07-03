// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({id: 'rftoolsbase:machine_frame'}),
  event.remove({id: 'rftoolsbase:dimensionalshard'}),
  event.remove({id: 'rftoolsbase:machine_infuser'}),
  event.remove({id: 'rftoolspower:powercell_card'}),
  event.remove({id: 'rftoolspower:dimensionalcell_simple'}),
  event.remove({id: 'rftoolspower:dimensionalcell_advanced'}),
  event.remove({id: 'rftoolspower:dimensionalcell'}),
  event.remove({id: 'rftoolspower:power_core1'}),
  event.remove({id: 'rftoolspower:power_core2'}),
  event.remove({id: 'rftoolspower:power_core3'}),
  event.remove({id: 'rftoolspower:cell1'}),
  event.remove({id: 'rftoolspower:cell2'}),
  event.remove({id: 'rftoolspower:cell3'}),
  event.remove({id: 'rftoolsutility:syringe'}),
  event.remove({id: 'rftoolsutility:spawner'}),
  event.remove({id: 'rftoolsutility:matter_beamer'}),
  event.remove({id: 'rftoolsdim:empty_dimension_tab'}),
  event.remove({id: 'rftoolsdim:enscriber'}),
  event.remove({id: 'rftoolsdim:dimension_builder'}),
  event.remove({id: 'rftoolsdim:empty_dimlet'}),
  event.remove({id: 'rftoolsdim:dimension_editor'}),
  event.remove({id: 'rftoolsdim:researcher'}),
  event.remove({id: 'rftoolsdim:knowledge_holder'}),
  event.remove({id: 'rftoolsdim:dimlet_workbench'}),
  event.remove({id: 'rftoolsdim:fluid_absorber'}),
  event.remove({id: 'rftoolsdim:biome_absorber'}),
  event.remove({id: 'rftoolsdim:block_absorber'}),
  event.remove({id: 'rftoolsdim:structure_absorber'}),
  event.remove({id: 'rftoolsutility:crafter1'}),
  event.remove({id: 'rftoolsutility:crafter2'}),
  event.remove({id: 'rftoolsutility:crafter3'}),
  event.remove({id: 'rftoolsbuilder:builder'}),
  event.remove({id: 'rftoolsutility:matter_transmitter'}),
  event.remove({id: 'rftoolsutility:matter_receiver'}),
  event.remove({id: 'rftoolsutility:dialing_device'})
  event.remove({id: 'rftoolsutility:charged_porter'}),
  event.remove({id: 'rftoolsutility:advanced_charged_porter'}),
//XNet
  event.remove({id: 'xnet:controller'}),
  //Cables
  event.remove({output: '#xnet:cables'}),
  event.remove({output: '#xnet:connectors'}),
  event.remove({output: '#xnet:advanced_connectors'})
})

//Add
ServerEvents.recipes(event => {
  //XNet
  event.shaped('xnet:controller', ['121','343','121'], {
    1: '#forge:alloys/advanced', 2: 'rftoolsbase:dimensionalshard', 3: '#forge:ingots/refined_obsidian', 4: 'rftoolsbase:machine_frame'}),
  //XNet Cables
  event.shaped('4x xnet:netcable_routing', ['111','121','111'], {
    1: 'pipez:universal_pipe', 2: 'rftoolsbase:dimensionalshard'}),
  event.shaped('4x xnet:connector_routing', ['111','121','111'], {
    1: '#xnet:cables', 2: 'rftoolsbase:dimensionalshard'}),
  event.shaped('4x xnet:advanced_connector_routing', ['111','121','111'], {
    1: '#xnet:connectors', 2: 'rftoolsbase:dimensionalshard'}),
    //Colours
    //Red
  event.shaped('8x xnet:netcable_red', ['111','121','111'], {1: '#xnet:cables', 2: '#forge:dyes/red'}),
  event.shaped('8x xnet:connector_red', ['111','121','111'], {1: '#xnet:connectors', 2: '#forge:dyes/red'}),
  event.shaped('8x xnet:advanced_connector_red', ['111','121','111'], {1: '#xnet:advanced_connectors', 2: '#forge:dyes/red'}),
    //Yellow
  event.shaped('8x xnet:netcable_yellow', ['111','121','111'], {1: '#xnet:cables', 2: '#forge:dyes/yellow'}),
  event.shaped('8x xnet:connector_yellow', ['111','121','111'], {1: '#xnet:connectors', 2: '#forge:dyes/yellow'}),
  event.shaped('8x xnet:advanced_connector_yellow', ['111','121','111'], {1: '#xnet:advanced_connectors', 2: '#forge:dyes/yellow'}),
    //Green
  event.shaped('8x xnet:netcable_green', ['111','121','111'], {1: '#xnet:cables', 2: '#forge:dyes/green'}),
  event.shaped('8x xnet:connector_green', ['111','121','111'], {1: '#xnet:connectors', 2: '#forge:dyes/green'}),
  event.shaped('8x xnet:advanced_connector_green', ['111','121','111'], {1: '#xnet:advanced_connectors', 2: '#forge:dyes/green'}),
    //Blue
  event.shaped('8x xnet:netcable_blue', ['111','121','111'], {1: '#xnet:cables', 2: '#forge:dyes/blue'}),
  event.shaped('8x xnet:connector_blue', ['111','121','111'], {1: '#xnet:connectors', 2: '#forge:dyes/blue'}),
  event.shaped('8x xnet:advanced_connector_blue', ['111','121','111'], {1: '#xnet:advanced_connectors', 2: '#forge:dyes/blue'}),
  //RFTools
  //Machines
  event.shaped('rftoolsbase:machine_frame', ['121','343','121'], {
    1: 'mekanism:ultimate_control_circuit', 2: 'mekanism:hdpe_sheet', 3: '#forge:storage_blocks/osmium', 4: 'mekanism:steel_casing'}),
  event.shaped('rftoolsbase:machine_infuser', ['121','343','121'], {
    1: 'rftoolsbase:dimensionalshard', 2: '#forge:alloys/ultimate', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame'}),
  //Crafters
  event.shaped('rftoolsutility:crafter1', ['121','343','121'], {
    1: '#forge:ingots/refined_obsidian', 2: '#forge:alloys/ultimate', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame'}),
  event.shaped('rftoolsutility:crafter2', ['121','343','121'], {
    1: '#forge:ingots/refined_obsidian', 2: '#forge:alloys/ultimate', 3: '#forge:circuits/ultimate', 4: 'rftoolsutility:crafter1'}),
  event.shaped('rftoolsutility:crafter3', ['121','343','121'], {
    1: '#forge:ingots/refined_obsidian', 2: '#forge:alloys/ultimate', 3: '#forge:circuits/ultimate', 4: 'rftoolsutility:crafter2'}),
  //Builder'n'Stuff
  event.shaped('rftoolsbuilder:builder', ['121','343','151'], {
    1: '#forge:storage_blocks/refined_obsidian', 2: 'mekanism:atomic_disassembler', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame', 5: 'quarryplus:quarry'}),
  //Teleport
  event.shaped('rftoolsutility:matter_transmitter', ['121','343','151'], {
    1: '#forge:ingots/refined_obsidian', 2: '#forge:alloys/elite', 3: '#forge:circuits/elite', 4: 'rftoolsbase:machine_frame', 5: 'waystones:waystone'}),
  event.shaped('rftoolsutility:matter_receiver', ['121','343','151'], {
    1: '#forge:ingots/refined_glowstone', 2: '#forge:alloys/elite', 3: '#forge:circuits/elite', 4: 'rftoolsbase:machine_frame', 5: 'waystones:waystone'}),
  event.shaped('rftoolsutility:dialing_device', ['121','343','151'], {
    1: '#forge:alloys/advanced', 2: '#forge:alloys/elite', 3: '#forge:circuits/elite', 4: 'rftoolsbase:machine_frame', 5: 'waystones:waystone'}),
  event.shaped('rftoolsutility:charged_porter', ['121','343','151'], {
    1: '#forge:ingots/refined_obsidian', 2: '#forge:alloys/elite', 3: '#forge:circuits/elite', 4: 'waystones:warp_stone', 5: 'waystones:waystone'}),
  event.shaped('rftoolsutility:advanced_charged_porter', ['121','343','151'], {
    1: '#forge:alloys/elite', 2: '#forge:alloys/ultimate', 3: '#forge:circuits/ultimate', 4: 'rftoolsutility:charged_porter', 5: 'waystones:waystone'}),
  //Power
  event.shaped('rftoolspower:powercell_card', ['121','232','121'], {
    1: '#forge:alloys/advanced', 2: '#forge:ingots/osmium', 3: 'mekanism:energy_tablet'}),
  event.shaped('rftoolspower:dimensionalcell_simple', ['121','343','151'], {
    1: '#forge:alloys/advanced', 2: 'immersiveengineering:capacitor_lv', 3: '#forge:circuits/advanced', 4: 'rftoolsbase:machine_frame', 5: 'mekanism:advanced_energy_cube'}),
  event.shaped('rftoolspower:dimensionalcell_advanced', ['121','343','151'], {
    1: '#forge:alloys/elite', 2: 'immersiveengineering:capacitor_mv', 3: '#forge:circuits/elite', 4: 'rftoolspower:dimensionalcell_simple', 5: 'mekanism:elite_energy_cube'}),
  event.shaped('rftoolspower:dimensionalcell', ['121','343','151'], {
    1: '#forge:alloys/ultimate', 2: 'immersiveengineering:capacitor_hv', 3: '#forge:circuits/ultimate', 4: 'rftoolspower:dimensionalcell_advanced', 5: 'mekanism:ultimate_energy_cube'}),
  event.shaped('rftoolspower:power_core1', ['121','343','151'], {
    1: 'rftoolsbase:dimensionalshard', 2: '#forge:ingots/enderium', 3: '#forge:alloys/advanced', 4: 'mekanism:energy_tablet', 5: '#forge:circuits/advanced'}),
  event.shaped('rftoolspower:power_core2', ['121','343','151'], {
    1: 'rftoolsbase:dimensionalshard', 2: '#forge:ingots/enderium', 3: '#forge:alloys/elite', 4: 'rftoolspower:power_core1', 5: '#forge:circuits/elite'}),
  event.shaped('rftoolspower:power_core3', ['121','343','151'], {
    1: 'rftoolsbase:dimensionalshard', 2: '#forge:ingots/enderium', 3: '#forge:alloys/ultimate', 4: 'rftoolspower:power_core2', 5: '#forge:circuits/ultimate'}),
  event.shaped('rftoolspower:cell1', ['121','232','121'], {
    1: '#forge:circuits/advanced', 2: 'rftoolspower:power_core1', 3: 'rftoolsbase:machine_frame'}),
  event.shaped('rftoolspower:cell2', ['121','232','121'], {
    1: '#forge:circuits/elite', 2: 'rftoolspower:power_core2', 3: 'rftoolspower:cell1'}),
  event.shaped('rftoolspower:cell3', ['121','232','121'], {
    1: '#forge:circuits/ultimate', 2: 'rftoolspower:power_core3', 3: 'rftoolspower:cell2'}),
  //Spanwer Stuff
  event.shaped('rftoolsutility:syringe', ['13 ','31 ','  2'], {
    1: '#forge:ingots/refined_obsidian', 2: 'industrialforegoing:mob_imprisonment_tool', 3: '#forge:plates/zinc'}),
  event.shaped('rftoolsutility:spawner', ['121','343','151'], {
    1: '#forge:plates/zinc', 2: 'easy_mob_farm:steel_mob_farm_template', 3: '#forge:circuits/elite', 4: 'rftoolsbase:machine_frame', 5: 'pneumaticcraft:spawner_agitator'}),
  event.shaped('rftoolsutility:matter_beamer', ['121','343','121'], {
    1: '#forge:plates/zinc', 2: '#forge:alloys/elite', 3: '#forge:circuits/elite', 4: 'rftoolsbase:machine_frame'}),
  //Dimensional Stuff
  event.shaped('rftoolsdim:empty_dimension_tab', ['121','212','121'], {
    1: '#forge:paper', 2: '#mekanism:enriched/redstone'}),
  event.shaped('rftoolsdim:enscriber', ['121','343','121'], {
    1: '#forge:paper', 2: 'rftoolsdim:empty_dimension_tab', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame'}),
  event.shaped('rftoolsdim:dimension_builder', ['151','343','222'], {
    1: '#forge:alloys/ultimate', 2: 'mekanism:hdpe_sheet', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame', 5: 'rftoolsbase:dimensionalshard'}),
  event.shaped('rftoolsdim:empty_dimlet', ['121','131','121'], {
    1: 'mekanism:hdpe_sheet', 2: 'rftoolsbase:dimensionalshard', 3: 'rftoolsdim:empty_dimension_tab'}),
  event.shaped('rftoolsdim:dimension_editor', ['121','343','121'], {
    1: '#forge:alloys/elite', 2: 'rftoolsdim:empty_dimlet', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame'}),
  event.shaped('rftoolsdim:researcher', ['121','343','121'], {
    1: '#mekanism:enriched/redstone', 2: 'rftoolsdim:empty_dimlet', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame'}),
  event.shaped('rftoolsdim:knowledge_holder', ['121','343','121'], {
    1: 'rftoolsbase:dimensionalshard', 2: 'rftoolsdim:empty_dimlet', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame'}),
  event.shaped('rftoolsdim:dimlet_workbench', ['121','343','121'], {
    1: 'mekanism:hdpe_sheet', 2: 'rftoolsdim:empty_dimlet', 3: '#forge:circuits/ultimate', 4: 'rftoolsbase:machine_frame'}),
  event.shaped('rftoolsdim:fluid_absorber', ['121','343','131'], {
    1: '#forge:circuits/ultimate', 2: 'minecraft:water_bucket', 3: 'rftoolsbase:dimensionalshard', 4: 'rftoolsdim:empty_dimlet'}),
  event.shaped('rftoolsdim:biome_absorber', ['121','343','131'], {
    1: '#forge:circuits/ultimate', 2: '#forge:dirt', 3: 'rftoolsbase:dimensionalshard', 4: 'rftoolsdim:empty_dimlet'}),
  event.shaped('rftoolsdim:block_absorber', ['121','343','131'], {
    1: '#forge:circuits/ultimate', 2: '#forge:cobblestone/deepslate', 3: 'rftoolsbase:dimensionalshard', 4: 'rftoolsdim:empty_dimlet'}),
  event.shaped('rftoolsdim:structure_absorber', ['121','343','131'], {
    1: '#forge:circuits/ultimate', 2: '#minecraft:stone_bricks', 3: 'rftoolsbase:dimensionalshard', 4: 'rftoolsdim:empty_dimlet'}),
  //Dimensional Shards
  event.shapeless('rftoolsbase:dimensionalshard', [
    'mekanism:hdpe_sheet', '#forge:ingots/refined_glowstone', '#forge:ingots/refined_obsidian', '#forge:ingots/compressed_iron', 'pneumaticcraft:plastic', 
    '#forge:ingots/enderium', 'redstone_arsenal:flux_ingot', '#forge:ingots/steel', '#forge:ingots/hop_graphite'])
})