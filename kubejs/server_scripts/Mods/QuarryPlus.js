// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({id: 'quarryplus:marker16'}),
  event.remove({id: 'quarryplus:flex_marker'}),
  event.remove({id: 'quarryplus:flex_marker_workbench'}),
  event.remove({id: 'quarryplus:workbench'}),
  event.remove({id: 'quarryplus:miningwell'}),
  event.remove({id: 'quarryplus:solid_fuel_quarry'}),
  event.remove({id: 'quarryplus:quarry'}),
  event.remove({id: 'quarryplus:mover'})
  event.remove({id: 'quarryplus:adv_quarry'})
})

//Add
ServerEvents.recipes(event => {
  //event.shaped('quarryplus:workbench', ['111','121','111'], {1:'minecraft:ender_pearl', 2:'travelanchors:travel_anchor'}),
  //Workbench
  event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
    {"tag": "forge:storage_blocks/diamond"},
    {"tag": "forge:ingots/netherite"},
    {"tag": "forge:storage_blocks/diamond"},
    {"item": "minecraft:netherite_scrap"},
    {"item": "minecraft:netherite_scrap"},
    {"item": "minecraft:nether_star"},
    {"tag": "forge:storage_blocks/gold"},
    {"item": "minecraft:nether_star"}],
    "inputFluid": "{Amount:2000,FluidName:\"minecraft:lava\"}",
    "output": {"count": 1, "item": 'quarryplus:workbench'}, "processingTime": 800}),
  //Markers
    event.custom({"type": "quarryplus:workbench_recipe", "conditions": [{"type": "quarryplus:machine_enabled", "value": "marker"}],
    "energy": 20000.0, "ingredients": [
    {"count": 2, "tag": "minecraft:planks"},
    {"count": 1, "tag": "forge:storage_blocks/redstone"}],
    "result": {"count": 1, "item": "quarryplus:marker"}, "showInJEI": true, "subType": "default"})
  event.custom({"type": "quarryplus:workbench_recipe", "conditions": [{"type": "quarryplus:machine_enabled", "value": "flex_marker"}],
    "energy": 80000.0, "ingredients": [
    {"count": 4, "item": "quarryplus:marker"},
    {"count": 8, "tag": "forge:ingots/iron"},
    {"count": 8, "tag": "forge:ingots/gold"},
    {"count": 4, "tag": "forge:gems/diamond"},
    {"count": 8, "tag": "forge:storage_blocks/redstone"}],
    "result": {"count": 1, "item": "quarryplus:flex_marker"}, "showInJEI": true, "subType": "default"})
  event.custom({"type": "quarryplus:workbench_recipe", "conditions": [{"type": "quarryplus:machine_enabled", "value": "marker16"}],
    "energy": 80000.0, "ingredients": [
    {"count": 2, "item": "quarryplus:flex_marker"},
    {"count": 2, "tag": "forge:ingots/netherite"},
    {"count": 6, "tag": "forge:gems/diamond"},
    {"count": 1, "item": "minecraft:nether_star"},
    {"count": 4, "tag": "forge:storage_blocks/redstone"}],
    "result": {"count": 1, "item": "quarryplus:marker16"}, "showInJEI": true, "subType": "default"}),
  //Mining Well
    event.custom({"type": "quarryplus:workbench_recipe", "conditions": [{"type": "quarryplus:machine_enabled", "value": "mining_well"}],
    "energy": 256000.0, "ingredients": [
    {"count": 1, "item": "minecraft:netherite_pickaxe"},
    {"count": 16, "tag": "forge:storage_blocks/coal"},
    {"count": 32, "tag": "forge:dusts/redstone"},
    {"count": 16, "tag": "forge:ingots/iron"},
    {"count": 16, "tag": "forge:ingots/gold"},
    {"count": 4, "tag": "forge:gems/diamond"}],
    "result": {"count": 1, "item": "quarryplus:mining_well"}, "showInJEI": true, "subType": "default"}),
  //Solid Fuel Quarry
    event.custom({"type": "quarryplus:workbench_recipe", "conditions": [{"type": "quarryplus:machine_enabled", "value": "solid_fuel_quarry"}],
    "energy": 512000.0, "ingredients": [
    {"count": 1, "item": "quarryplus:mining_well"},
    {"count": 4, "item": "quarryplus:marker"},
    {"count": 64, "tag": "forge:dusts/redstone"},
    {"count": 32, "tag": "forge:ingots/iron"},
    {"count": 32, "tag": "forge:ingots/gold"},
    {"count": 16, "tag": "forge:gems/diamond"},
    {"count": 8, "tag": "forge:gems/emerald"},
    {"count": 4, "tag": "forge:ingots/netherite"}],
    "result": {"count": 1, "item": "quarryplus:solid_fuel_quarry"}, "showInJEI": true, "subType": "default"}),
  //Quarry Plus
    event.custom({"type": "quarryplus:workbench_recipe", "conditions": [{"type": "quarryplus:machine_enabled", "value": "quarry"}],
    "energy": 1024000.0, "ingredients": [
    {"count": 1, "item": "quarryplus:mining_well"},
    {"count": 1, "item": "quarryplus:solid_fuel_quarry"},
    {"count": 4, "item": "quarryplus:flex_marker"},
    {"count": 32, "tag": "forge:storage_blocks/redstone"},
    {"count": 8, "tag": "forge:storage_blocks/iron"},
    {"count": 8, "tag": "forge:storage_blocks/gold"},
    {"count": 4, "tag": "forge:storage_blocks/diamond"},
    {"count": 4, "tag": "forge:storage_blocks/emerald"},
    {"count": 2, "tag": "forge:storage_blocks/netherite"}],
    "result": {"count": 1, "item": "quarryplus:quarry"}, "showInJEI": true, "subType": "default"}),
  //Mover
    event.custom({"type": "quarryplus:workbench_recipe", "conditions": [{"type": "quarryplus:machine_enabled", "value": "mover"}],
    "energy": 256000.0, "ingredients": [
    {"count": 32, "tag": "forge:dusts/redstone"},
    {"count": 16, "tag": "forge:ingots/iron"},
    {"count": 16, "tag": "forge:ingots/gold"},
    {"count": 64, "tag": "forge:gems/diamond"},
    {"count": 32, "tag": "forge:gems/emerald"},
    {"count": 8, "tag": "forge:ingots/netherite"}],
    "result": {"count": 1, "item": "quarryplus:mover"}, "showInJEI": true, "subType": "default"})
  //Chunk Destroyer
  event.custom({"type": "extendedcrafting:shaped_table", "pattern": [
      "ABACCCABA",
      "BBDDDDDBB",
      "AEEEEEEEA",
      "CFFFFFFFC",
      "CGHGHGHGC",
      "CFFFFFFFC",
      "AEEEEEEEA",
      "BBDDDDDBB",
      "ABACCCABA"],
    "key": {
      "A": {"item": "quarryplus:pump_plus"},
      "B": {"item": "quarryplus:quarry"},
      "C": {"tag": "quarryplus:markers"},
      "D": {"item": "avaritia:neutron_nugget"},
      "E": {"item": "avaritia:infinity_ingot"},
      "F": {"item": "mysticalagradditions:insanium_essence"},
      "G": {"item": "allthemodium:soul_lava_bucket"},
      "H": {"item": "mekanism:digital_miner"}},
    "result": {"item": "quarryplus:adv_quarry"}})
})