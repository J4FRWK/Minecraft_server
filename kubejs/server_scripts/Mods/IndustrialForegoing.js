// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
//Others Stuff
  //Imprisonment Tool
  event.remove({output: 'industrialforegoing:mob_imprisonment_tool'})
  event.shaped('industrialforegoing:mob_imprisonment_tool', ['111','121','111'], {
    1: 'industrialforegoing:plastic', 2: 'notenoughwands:capturing_wand'})
  //Dry Rubber
  event.remove({output: 'industrialforegoing:dryrubber'})
  event.shaped('industrialforegoing:dryrubber', ['111','111', '111'], { 
    1: 'industrialforegoing:tinydryrubber'})
//Transporter
  //Item
  event.remove({id: 'industrialforegoing:item_transporter_type'})
  event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
    {"item": "industrialforegoing:plastic"},
    {"item": "industrialforegoing:machine_frame_pity"},
    {"item": "industrialforegoing:plastic"},
    {"item": "minecraft:hopper"},
    {"item": "minecraft:hopper"},
    {"item": "industrialforegoing:plastic"},
    {"tag": "forge:ender_pearls"},
    {"item": "industrialforegoing:plastic"}],
    "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:latex\"}",
    "output": {"count": 2, "item": 'industrialforegoing:item_transporter_type'}, "processingTime": 400})
  //Fluid
  event.remove({id: 'industrialforegoing:fluid_transporter_type'})
  event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
    {"item": "industrialforegoing:plastic"},
    {"item": "industrialforegoing:machine_frame_pity"},
    {"item": "industrialforegoing:plastic"},
    {"item": "minecraft:bucket"},
    {"item": "minecraft:bucket"},
    {"item": "industrialforegoing:plastic"},
    {"tag": "forge:ender_pearls"},
    {"item": "industrialforegoing:plastic"}],
    "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:latex\"}",
    "output": {"count": 2, "item": 'industrialforegoing:fluid_transporter_type'}, "processingTime": 400})
  //World
  event.remove({id: 'industrialforegoing:world_transporter_type'})
  event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
    {"item": "industrialforegoing:plastic"},
    {"item": "industrialforegoing:machine_frame_pity"},
    {"item": "industrialforegoing:plastic"},
    {"tag": "forge:dirt"},
    {"tag": "forge:dirt"},
    {"item": "industrialforegoing:plastic"},
    {"tag": "forge:ender_pearls"},
    {"item": "industrialforegoing:plastic"}],
    "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:latex\"}",
    "output": {"count": 2, "item": 'industrialforegoing:world_transporter_type'}, "processingTime": 400})
//Machine Frames
  //Pity Machine Frame
  event.remove({id: 'industrialforegoing:machine_frame_pity'})
  event.shaped('industrialforegoing:machine_frame_pity', ['121','212','121'], {
    1: '#minecraft:logs', 2: '#forge:ingots/iron'})
  //Simple Machine Frame
  event.remove({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'})
  event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
    {"item": "industrialforegoing:plastic"},
    {"item": "industrialforegoing:machine_frame_pity"},
    {"item": "industrialforegoing:plastic"},
    {"tag": "forge:ingots/electrum"},
    {"tag": "forge:ingots/electrum"},
    {"tag": "forge:gems/emerald"},
    {"tag": "forge:gears/diamond"},
    {"tag": "forge:gems/emerald"}],
    "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:latex\"}",
    "output": {"count": 1, "item": 'industrialforegoing:machine_frame_simple'}, "processingTime": 400})
  //Advanced Machine Frame
  event.remove({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'})
  event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
    {"item": "industrialforegoing:plastic"},
    {"item": "industrialforegoing:machine_frame_simple"},
    {"item": "industrialforegoing:plastic"},
    {"tag": "forge:ingots/iridium"},
    {"tag": "forge:ingots/iridium"},
    {"item": "minecraft:echo_shard"},
    {"tag": "forge:gears/enderium"},
    {"item": "minecraft:echo_shard"}],
    "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
    "output": {"count": 1, "item": 'industrialforegoing:machine_frame_advanced'}, "processingTime": 400})
  //Supreme Machine Frame
  event.remove({id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'})
  event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
    {"item": "industrialforegoing:plastic"},
    {"item": "industrialforegoing:machine_frame_advanced"},
    {"item": "industrialforegoing:plastic"},
    {"tag": "forge:ingots/platinum"},
    {"tag": "forge:ingots/platinum"},
    {"item": "minecraft:nether_star"},
    {"tag": "forge:gears/dragonsteel"},
    {"item": "minecraft:nether_star"}],
    "inputFluid": "{Amount:2000,FluidName:\"industrialforegoing:ether_gas\"}",
    "output": {"count": 1, "item": 'industrialforegoing:machine_frame_supreme'}, "processingTime": 400})
//Machines
  //Pity
  //Fluid Extractor
  event.remove({id: 'industrialforegoing:fluid_extractor'})
  event.shaped('industrialforegoing:fluid_extractor', ['121','353','141'], {
    1: '#forge:ingots/iron', 2: '#forge:storage_blocks/redstone', 3: 'compressium:cobblestone_1', 4: 'minecraft:piston', 5: 'industrialforegoing:machine_frame_pity'})
  //Latex Processing Unit
  event.remove({id: 'industrialforegoing:latex_processing_unit'})
  event.shaped('industrialforegoing:latex_processing_unit', ['121','356','141'], {
    1: '#forge:ingots/iron', 2: '#forge:storage_blocks/redstone', 3: 'minecraft:water_bucket', 4: 'ironfurnaces:iron_furnace', 5: 'industrialforegoing:machine_frame_pity',
    6: 'industrialforegoing:latex_bucket'})
  //Dissolution Chamber
  event.remove({id: 'industrialforegoing:dissolution_chamber'})
  event.shaped('industrialforegoing:dissolution_chamber', ['121','353','141'], {
    1: '#forge:ingots/iron', 2: 'ironchest:iron_chest', 3: 'minecraft:bucket', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_pity'})
  //Simple
  //Animal Rancher
  event.remove({id: 'industrialforegoing:animal_rancher'})
  event.shaped('industrialforegoing:animal_rancher', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: '#forge:shears', 3: 'minecraft:bucket', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Animal Feeder
  event.remove({id: 'industrialforegoing:animal_feeder'})
  event.shaped('industrialforegoing:animal_feeder', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:golden_carrot', 3: 'minecraft:golden_apple', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Animal Baby Separator
  event.remove({id: 'industrialforegoing:animal_baby_separator'})
  event.shaped('industrialforegoing:animal_baby_separator', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:hay_block', 3: 'minecraft:golden_carrot', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Mob Slaughter Factory
  event.remove({id: 'industrialforegoing:mob_slaughter_factory'})
  event.shaped('industrialforegoing:mob_slaughter_factory', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:diamond_sword', 3: 'minecraft:diamond_axe', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Marine Fisher
  event.remove({id: 'industrialforegoing:marine_fisher'})
  event.shaped('industrialforegoing:marine_fisher', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:bucket', 3: 'minecraft:fishing_rod', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Plant Fertilizer
  event.remove({id: 'industrialforegoing:plant_fertilizer'})
  event.shaped('industrialforegoing:plant_fertilizer', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'thermal:phytogro', 3: 'minecraft:bone_block', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Plant Gatherer
  event.remove({id: 'industrialforegoing:plant_gatherer'})
  event.shaped('industrialforegoing:plant_gatherer', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:diamond_axe', 3: 'minecraft:diamond_hoe', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Plant Sower
  event.remove({id: 'industrialforegoing:plant_sower'})
  event.shaped('industrialforegoing:plant_sower', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:piston', 3: 'minecraft:flower_pot', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Sludge Refiner
  event.remove({id: 'industrialforegoing:sludge_refiner'})
  event.shaped('industrialforegoing:sludge_refiner', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:smoker', 3: 'minecraft:bucket', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Potion Brewer
  event.remove({id: 'industrialforegoing:potion_brewer'})
  event.shaped('industrialforegoing:potion_brewer', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:glass_bottle', 3: 'minecraft:brewing_stand', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Enchantment Extractor
  event.remove({id: 'industrialforegoing:enchantment_extractor'})
  event.shaped('industrialforegoing:enchantment_extractor', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:book', 3: 'minecraft:bucket', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Enchantment Factory
  event.remove({id: 'industrialforegoing:enchantment_factory'})
  event.shaped('industrialforegoing:enchantment_factory', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: '#forge:bookshelves', 3: 'minecraft:enchanting_table', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Enchantment Sorter
  event.remove({id: 'industrialforegoing:enchantment_sorter'})
  event.shaped('industrialforegoing:enchantment_sorter', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:book', 3: '#forge:bookshelves', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Enchantment Applicator
  event.remove({id: 'industrialforegoing:enchantment_applicator'})
  event.shaped('industrialforegoing:enchantment_applicator', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:anvil', 3: 'minecraft:experience_bottle', 4: '#forge:gears/diamond', 5: 'industrialforegoing:machine_frame_simple'})
  //Mechanical Dirt
  event.remove({id: 'industrialforegoing:dissolution_chamber/mechanical_dirt'})
  event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
    {"item": "minecraft:rotten_flesh"},
    {"item": "exnihilosequentia:mycelium_spores"},
    {"item": "minecraft:rotten_flesh"},
    {"tag": "forge:gears/copper"},
    {"tag": "forge:gears/copper"},
    {"item": "minecraft:rotten_flesh"},
    {"item": "industrialforegoing:machine_frame_simple"},
    {"item": "minecraft:rotten_flesh"}],
    "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:meat\"}",
    "output": {"count": 1, "item": 'industrialforegoing:mechanical_dirt'}, "processingTime": 600})
  //Advanced
  //Material Stonework Factory
  event.remove({id: 'industrialforegoing:material_stonework_factory'})
  event.shaped('industrialforegoing:material_stonework_factory', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:netherite_pickaxe', 3: 'minecraft:crafting_table', 4: '#forge:gears/emerald', 5: 'industrialforegoing:machine_frame_advanced'})
  //Mob Crusher
  event.remove({id: 'industrialforegoing:mob_crusher'})
  event.shaped('industrialforegoing:mob_crusher', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:netherite_sword', 3: 'minecraft:ghast_tear', 4: '#forge:gears/emerald', 5: 'industrialforegoing:machine_frame_advanced'})
  //Laser Drill
  event.remove({id: 'industrialforegoing:laser_drill'})
  event.shaped('industrialforegoing:laser_drill', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:piston', 3: 'thermal:drill_head', 4: '#forge:gears/emerald', 5: 'industrialforegoing:machine_frame_advanced'})
  //Stasis Chamber
  event.remove({id: 'industrialforegoing:stasis_chamber'})
  event.shaped('industrialforegoing:stasis_chamber', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'hostilenetworks:twilight_prediction', 3: 'compressium:soulsand_3', 4: '#forge:gears/emerald', 5: 'industrialforegoing:machine_frame_advanced'})
  //Supreme
  //Mob Duplicator
  event.remove({id: 'industrialforegoing:mob_duplicator'})
  event.shaped('industrialforegoing:mob_duplicator', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'minecraft:sculk', 3: 'reliquary:eye_of_the_storm', 4: '#forge:gears/netherite', 5: 'industrialforegoing:machine_frame_supreme'})
  //Wither Builder
  event.remove({id: 'industrialforegoing:wither_builder'})
  event.shaped('industrialforegoing:wither_builder', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'compressium:soulsand_3', 3: 'extendedcrafting:nether_star_block', 4: '#forge:gears/netherite', 5: 'industrialforegoing:machine_frame_supreme'})
  //Infinity Charger
  event.remove({id: 'industrialforegoing:infinity_charger'})
  event.shaped('industrialforegoing:infinity_charger', ['111','232','454'], {
    1: 'industrialforegoing:plastic', 2: 'compressium:redstone_1', 3: 'mekanism:ultimate_energy_cube', 4: '#forge:gears/netherite', 5: 'industrialforegoing:machine_frame_supreme'})

    //Addons
  //Speed
    //Tier 1
    event.remove({id: 'industrialforegoing:dissolution_chamber/speed_addon_1'})
    event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
      {"tag": "forge:dusts/redstone"},
      {"tag": "forge:sugar"},
      {"tag": "forge:dusts/redstone"},
      {"tag": "forge:gears/gold"},
      {"tag": "forge:gears/gold"},
      {"tag": "forge:glass"},
      {"tag": "forge:storage_blocks/sugar_cane"},
      {"tag": "forge:glass"}],
      "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:latex\"}",
      "output": {"count": 1, "item": 'industrialforegoing:speed_addon_1'}, "processingTime": 200})
    //Tier 2
    event.remove({id: 'industrialforegoing:dissolution_chamber/speed_addon_2'})
    event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
      {"tag": "forge:dusts/redstone"},
      {"tag": "forge:sugar"},
      {"tag": "forge:dusts/redstone"},
      {"tag": "forge:gears/diamond"},
      {"tag": "forge:gears/diamond"},
      {"tag": "forge:glass"},
      {"item": "industrialforegoing:speed_addon_1"},
      {"tag": "forge:glass"}],
      "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
      "output": {"count": 1, "item": 'industrialforegoing:speed_addon_2'}, "processingTime": 200})
  //Processing
    //Tier 1
    event.remove({id: 'industrialforegoing:dissolution_chamber/processing_addon_1'})
    event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
      {"tag": "forge:dusts/redstone"},
      {"item": "minecraft:blast_furnace"},
      {"tag": "forge:dusts/redstone"},
      {"tag": "forge:gears/gold"},
      {"tag": "forge:gears/gold"},
      {"tag": "forge:glass"},
      {"item": "minecraft:blast_furnace"},
      {"tag": "forge:glass"}],
      "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:latex\"}",
      "output": {"count": 1, "item": 'industrialforegoing:processing_addon_1'}, "processingTime": 200})
    //Tier 2
    event.remove({id: 'industrialforegoing:dissolution_chamber/processing_addon_2'})
    event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
      {"tag": "forge:dusts/redstone"},
      {"item": "minecraft:blast_furnace"},
      {"tag": "forge:dusts/redstone"},
      {"tag": "forge:gears/diamond"},
      {"tag": "forge:gears/diamond"},
      {"tag": "forge:glass"},
      {"item": "industrialforegoing:processing_addon_1"},
      {"tag": "forge:glass"}],
      "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
      "output": {"count": 1, "item": 'industrialforegoing:processing_addon_2'}, "processingTime": 200})
  //Efficiency
    //Tier 1
    event.remove({id: 'industrialforegoing:dissolution_chamber/efficiency_addon_1'})
    event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
      {"tag": "forge:dusts/redstone"},
      {"item": "minecraft:blaze_rod"},
      {"tag": "forge:dusts/redstone"},
      {"tag": "forge:gears/gold"},
      {"tag": "forge:gears/gold"},
      {"tag": "forge:glass"},
      {"item": "minecraft:blaze_rod"},
      {"tag": "forge:glass"}],
      "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:latex\"}",
      "output": {"count": 1, "item": 'industrialforegoing:efficiency_addon_1'}, "processingTime": 200})
    //Tier 2
    event.remove({id: 'industrialforegoing:dissolution_chamber/efficiency_addon_2'})
    event.custom({"type": "industrialforegoing:dissolution_chamber","input": [
      {"tag": "forge:dusts/redstone"},
      {"item": "minecraft:blaze_rod"},
      {"tag": "forge:dusts/redstone"},
      {"tag": "forge:gears/diamond"},
      {"tag": "forge:gears/diamond"},
      {"tag": "forge:glass"},
      {"item": "industrialforegoing:efficiency_addon_1"},
      {"tag": "forge:glass"}],
      "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
      "output": {"count": 1, "item": 'industrialforegoing:efficiency_addon_2'}, "processingTime": 200})
})





ServerEvents.recipes(event => {
  event.shaped('industrialforegoing:mob_imprisonment_tool', ['111','121','111'], {
    1: 'industrialforegoing:plastic', 2: 'notenoughwands:capturing_wand'}),
event.custom({
  "type": "industrialforegoing:dissolution_chamber","input": [
    {"tag": "forge:plastic"},
    {"tag": "industrialforegoing:machine_frame/simple"},
    {"tag": "forge:plastic"},
    {"item": "minecraft:netherite_scrap"},
    {"item": "minecraft:netherite_scrap"},
    {"tag": "forge:ingots/gold"},
    {"tag": "forge:gears/diamond"},
    {"tag": "forge:ingots/gold"}],
    "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:pink_slime\"}",
    "output": {"count": 1, "item": "minecraft:dragon_head"}, "processingTime": 300})
})