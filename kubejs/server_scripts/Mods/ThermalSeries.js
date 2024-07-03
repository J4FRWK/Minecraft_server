// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')


ServerEvents.recipes(event => {

  //Hardened Glass
  //Soul
  event.remove({id: 'thermal_extra:soul_infused_glass'})
  event.custom({"type": "thermal:smelter", "input": [
      { "item": "thermal:obsidian_glass"}, { "tag": "forge:storage_blocks/coal_coke" }, { "tag": "forge:ingots/soul_infused" }],
    "result": [{"item": "thermal_extra:soul_infused_glass", "count": 1}], "energy": 20000})
  event.remove({id: 'thermal_extra:machine/smelter/soul_infused_ingot'})
  event.custom({"type": "thermal:smelter", "input": [
      { "item": "compressium:soulsand_1"}, { "tag": "forge:ingots/brass" }, { "tag": "forge:storage_blocks/cinnabar" }],
    "result": [{"item": "thermal_extra:soul_infused_ingot"}], "energy": 20000})
  //Shellite
  event.remove({id: 'thermal_extra:shellite_glass'})
  event.custom({"type": "thermal:smelter", "input": [
      { "item": "thermal:obsidian_glass"}, { "tag": "forge:storage_blocks/coal_coke" }, { "tag": "forge:ingots/shellite" }],
    "result": [{"item": "thermal_extra:shellite_glass", "count": 1}], "energy": 20000})
  event.remove({id: 'thermal_extra:machine/smelter/shellite_ingot'})
  event.custom({"type": "thermal:smelter", "input": [
      { "item": "minecraft:shulker_shell", "count": 2}, { "tag": "forge:ingots/nickel" }, { "tag": "forge:storage_blocks/cinnabar" }],
    "result": [{"item": "thermal_extra:shellite_ingot"}], "energy": 20000})
  //Twinite
  event.remove({id: 'thermal_extra:twinite_glass'})
  event.custom({"type": "thermal:smelter", "input": [
      { "item": "thermal:obsidian_glass"}, { "tag": "forge:storage_blocks/coal_coke" }, { "tag": "forge:ingots/twinite" }],
    "result": [{"item": "thermal_extra:twinite_glass", "count": 1}], "energy": 20000})
  event.remove({id: 'thermal_extra:machine/smelter/twinite_ingot'})
  event.custom({"type": "thermal:smelter", "input": [
      { "item": "minecraft:amethyst_block"}, { "tag": "forge:ingots/rose_gold" }, { "tag": "forge:storage_blocks/cinnabar" }],
    "result": [{"item": "thermal_extra:twinite_ingot"}], "energy": 20000})
  //Dragonsteel
  event.remove({id: 'thermal_extra:dragonsteel_glass'})
  event.custom({"type": "thermal:smelter", "input": [
      { "item": "thermal:obsidian_glass"}, { "tag": "forge:storage_blocks/coal_coke" }, { "tag": "forge:ingots/dragonsteel" }],
    "result": [{"item": "thermal_extra:dragonsteel_glass", "count": 1}], "energy": 20000})
  event.remove({id: 'thermal_extra:machine/smelter/dragonsteel_ingot'})
  event.custom({"type": "thermal:smelter", "input": [
      { "item": "minecraft:dragon_breath", "count": 2}, { "tag": "forge:ingots/platinum" }, { "tag": "forge:storage_blocks/cinnabar" }],
    "result": [{"item": "thermal_extra:dragonsteel_ingot"}], "energy": 20000})
  //Obsidian
  event.remove({id: 'thermal:obsidian_glass'})
  event.remove({id: 'thermal:machines/smelter/smelter_glass_obsidian'})
  event.remove({id: 'thermal:fire_charge/obsidian_glass_2'})
  event.custom({ "type": "thermal:smelter", "input": [
      { "tag": "forge:obsidian"}, { "tag": "forge:storage_blocks/coal_coke" }, { "tag": "forge:ingots/invar" }],
    "result": [{"item": "thermal:obsidian_glass", "count": 2}], "energy": 20000})
  //Signalum
  event.remove({id: 'thermal:signalum_glass'})
  event.remove({id: 'thermal:fire_charge/signalum_glass_2'})
  event.remove({id: 'thermal:machines/smelter/smelter_glass_signalum'})
  //Lumium
  event.remove({output: 'thermal:lumium_glass'})
  event.remove({id: 'thermal:machines/smelter/smelter_glass_lumium'})
  //Enderium
  event.remove({output: 'thermal:enderium_glass'})
  event.remove({id: 'thermal:machines/smelter/smelter_glass_enderium'})
//Output
  event.remove({output: 'thermal:redstone_servo'}),
  event.remove({output: 'thermal:rf_coil'}),
  event.remove({output: 'thermal:machine_frame'}),
  event.remove({output: 'thermal:fluid_cell_frame'}),
  event.remove({output: 'thermal:energy_cell_frame'}),
  event.remove({output: 'thermal:machine_press'})
//ID
  event.remove({id: 'thermal:rubber_from_dandelion'})
  event.remove({id: 'thermal:rubber_from_vine'})
  event.remove({id: 'thermal:signalum_dust_4'})
  event.remove({id: 'thermal:lumium_dust_4'})
  event.remove({id: 'thermal:enderium_dust_2'})
  event.remove({id: 'thermal:press_gear_die'})
  event.remove({id: 'thermal_extra:soul_infused_dust'})
  event.remove({id: 'thermal_extra:shellite_dust'})
  event.remove({id: 'thermal_extra:twinite_dust'})
  event.remove({id: 'thermal_extra:dragonsteel_dust'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('thermal:press_gear_die', [' 1 ','121',' 1 '], {
    1: '#forge:plates/invar', 2: '#forge:stone'}),
  event.shaped('thermal:oil_sand', 
  ['111','121','111'], {
    1: 'minecraft:sand',
    2: '#forge:storage_blocks/coal_coke'}),
  event.shaped('thermal:oil_red_sand', 
  ['111','121','111'], {
    1: 'minecraft:red_sand',
    2: '#forge:storage_blocks/coal_coke'}),
  event.shaped('4x thermal:rubber', 
  ['222','212','222'], {
    1: 'minecraft:water_bucket',
    2: '#forge:plants'}),
  event.shaped('4x thermal:rubber', 
  ['222','212','222'], {
    1: 'minecraft:water_bucket',
    2: '#forge:sapling'}),
  event.shaped('thermal:rf_coil', 
  ['  1',' 2 ','1  '], {
    1: '#forge:dusts/redstone',
    2: '#forge:plates/gold'}),
  event.shaped('thermal:redstone_servo', 
  ['1 1',' 2 ','1 1'], {
    1: '#forge:dusts/redstone',
    2: '#forge:plates/iron'}),
  event.shaped('thermal:machine_frame', 
  ['121','232','121'], {
    1: '#forge:plates/iron',
    2: '#forge:glass',
    3: '#forge:plates/tin'}),
  event.shaped('thermal:fluid_cell_frame', 
  ['121','232','121'], {
    1: '#forge:plates/copper',
    2: '#forge:glass',
    3: '#forge:plates/bronze'}),
  event.shaped('thermal:energy_cell_frame', 
  ['121','232','121'], {
    1: '#forge:plates/lead',
    2: '#forge:glass',
    3: 'cyclic:battery'}),
  event.shaped('thermal:machine_press', 
  [' 1 ','232','454'], {
    1: '#forge:ingots/iron',
    2: '#forge:gems/diamond',
    3: 'exnihilosequentia:stone_barrel',
    4: '#forge:ingots/gold',
    5: '#forge:storage_blocks/redstone'}),
//Induction Smelter
  event.custom({
  "type": "thermal:smelter",
    "input": [
    { "tag": "forge:obsidian"},
    { "tag": "forge:storage_blocks/coal_coke" },
    { "tag": "forge:ingots/invar" }],
  "result": [{"item": "thermal:obsidian_glass", "count": 2}],
    "energy": 20000}),
  event.custom({
  "type": "thermal:smelter",
    "input": [
    { "item": "thermal:obsidian_glass"},
    { "tag": "forge:storage_blocks/coal_coke" },
    { "tag": "forge:ingots/signalum" }],
  "result": [{"item": "thermal:signalum_glass"}],
    "energy": 20000}),
  event.custom({
  "type": "thermal:smelter",
    "input": [
    { "item": "thermal:obsidian_glass"},
    { "tag": "forge:storage_blocks/coal_coke" },
    { "tag": "forge:ingots/lumium" }],
  "result": [{"item": "thermal:lumium_glass"}],
    "energy": 20000}),
  event.custom({
  "type": "thermal:smelter",
    "input": [
    { "item": "thermal:obsidian_glass"},
    { "tag": "forge:storage_blocks/coal_coke" },
    { "tag": "forge:ingots/enderium" }],
  "result": [{"item": "thermal:enderium_glass"}],
    "energy": 20000})


//ThermalEndergy
//Gears
  event.remove({id: 'thermalendergy:stellarium_gear'})
  event.remove({id: 'thermalendergy:prismalium_gear'})
  event.remove({id: 'thermalendergy:melodium_gear'})
  event.remove({id: 'thermalendergy:vibrating_core'})
//Upgrades
  event.shaped('thermalendergy:vibrating_core', ['1  ',' 2 ','  1'], {1: '#forge:plates/allthemodium', 2: 'minecraft:echo_shard'})
  event.remove({id: 'thermalendergy:endergy_upgrade_1'})
  event.shaped('thermalendergy:endergy_upgrade_1', ['121','343','121'], {1: '#forge:ingots/prismalium', 2: 'thermal_extra:dragonsteel_glass', 3: 'thermalendergy:prismalium_gear', 4: 'thermal_extra:upgrade_augment'})
  event.remove({id: 'thermalendergy:endergy_upgrade_2'})
  event.shaped('thermalendergy:endergy_upgrade_2', ['121','343','121'], {1: '#forge:ingots/melodium', 2: 'minecraft:shulker_shell', 3: 'thermalendergy:melodium_gear', 4: 'thermalendergy:endergy_upgrade_1'})
  event.remove({id: 'thermalendergy:endergy_upgrade_3'})
  event.shaped('thermalendergy:endergy_upgrade_3', ['121','343','121'], {1: '#forge:ingots/stellarium', 2: 'thermalendergy:vibrating_core', 3: 'thermalendergy:stellarium_gear', 4: 'thermalendergy:endergy_upgrade_2'})
//Ingots
  event.remove({id: 'thermalendergy:machine/smelter/prismalium_ingot'})
  event.custom({"type": "thermal:smelter", "input": [
    { "item": "minecraft:prismarine_bricks", "count": 4}, { "tag": "forge:gems/prismarine", "count": 4}, { "tag": "forge:ingots/dragonsteel", "count": 2}],
  "result": [{"item": "thermalendergy:prismalium_ingot", "count": 2}], "energy": 20000})
  event.remove({id: 'thermalendergy:machine/smelter/melodium_ingot'})
  event.custom({"type": "thermal:smelter", "input": [
    { "tag": "forge:storage_blocks/amethyst", "count": 4}, { "item": "minecraft:popped_chorus_fruit", "count": 4}, { "tag": "forge:storage_blocks/gold"}],
  "result": [{"item": "thermalendergy:melodium_ingot", "count": 2}], "energy": 20000})
  event.remove({id: 'thermalendergy:machine/smelter/stellarium_ingot'})
  event.custom({"type": "thermal:smelter", "input": [
    { "item": "minecraft:nether_star"}, { "tag": "forge:ingots/netherite", "count": 5}, { "item": "compressium:clay_2"}],
  "result": [{"item": "thermalendergy:stellarium_ingot"}], "energy": 20000})


  event.remove({id: 'thermalendergy:resonant_catalyst_augment'})
  event.shaped('thermalendergy:resonant_catalyst_augment', ['121','343','151'], 
  {1: '#forge:ingots/melodium', 2: 'thermal_extra:machine_catalyst_augment_3', 3: '#forge:plates/stellarium', 4: 'thermalendergy:vibrating_core', 5: '#forge:gears/prismalium'})
  event.remove({id: 'thermalendergy:efficiency_nullifier_augment'})
  event.shaped('thermalendergy:efficiency_nullifier_augment', ['121','343','151'], 
  {1: '#forge:ingots/stellarium', 2: 'thermal_extra:machine_speed_augment_4', 3: '#forge:plates/prismalium', 4: 'thermalendergy:vibrating_core', 5: '#forge:gears/melodium'})
  event.remove({id: 'thermalendergy:energy_nullifier_augment'})
  event.shaped('thermalendergy:energy_nullifier_augment', ['121','343','151'], 
  {1: '#forge:ingots/prismalium', 2: 'thermal_extra:machine_efficiency_augment_4', 3: '#forge:plates/melodium', 4: 'thermalendergy:vibrating_core', 5: '#forge:gears/stellarium'})
  event.remove({id: 'thermalendergy:dynamo_consumption_nullifier_augment'})
  event.shaped('thermalendergy:dynamo_consumption_nullifier_augment', ['121','343','151'], 
  {1: '#forge:ingots/prismalium', 2: 'thermal_extra:dynamo_fuel_augment_4', 3: '#forge:plates/stellarium', 4: 'thermalendergy:vibrating_core', 5: '#forge:gears/melodium'})
  event.remove({id: 'thermalendergy:dynamo_fuel_nullifier_augment'})
  event.shaped('thermalendergy:dynamo_fuel_nullifier_augment', ['121','343','151'], 
  {1: '#forge:ingots/stellarium', 2: 'thermal_extra:dynamo_output_augment_4', 3: '#forge:plates/melodium', 4: 'thermalendergy:vibrating_core', 5: '#forge:gears/prismalium'})



//Coke Block in Pyrolyzer
  event.custom({"type": "thermal:pyrolyzer", "ingredient": {"tag": "forge:storage_blocks/coal"},
  "result": [{"tag": "forge:storage_blocks/coal_coke"}, {"item": "thermal:tar", "chance": 1.0}, {"fluid": "thermal:creosote", "amount": 1000}],
  "experience": 1.0})
})