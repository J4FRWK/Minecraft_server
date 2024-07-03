// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'pneumaticcraft:pressure_tube'}),
  event.remove({id: 'pneumaticcraft:thermo_plant/reinforced_pressure_tube'}),
  event.remove({id: 'pneumaticcraft:assembly/advanced_pressure_tube'}),
  event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'}),
  event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'}),
  event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'}),
  event.remove({id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'}),
  event.remove({id: 'pneumaticcraft:pressure_chamber/capacitor'}),
  event.remove({id: 'pneumaticcraft:pressure_chamber/transistor'}),
  event.remove({id: 'pneumaticcraft:pressure_chamber/empty_pcb'}),
  event.remove({id: 'pneumaticcraft:reinforced_stone'}),
  event.remove({id: 'pneumaticcraft:small_tank'}),
  event.remove({id: 'pneumaticcraft:refinery'}),
  event.remove({id: 'pneumaticcraft:thermopneumatic_processing_plant'}),
  event.remove({id: 'pneumaticcraft:fluid_mixer'}),
  event.remove({id: 'pneumaticcraft:air_compressor'}),
  event.remove({id: 'pneumaticcraft:liquid_compressor'}),
  event.remove({id: 'pneumaticcraft:flux_compressor'})
})


//Add
ServerEvents.recipes(event => {
//Normal Crafting
  event.shaped('2x pneumaticcraft:pressure_tube', ['121'], {1: '#forge:ingots/compressed_iron', 2: '#forge:ingots/hop_graphite'}),
  event.shaped('pneumaticcraft:ingot_iron_compressed', ['121'], {1: '#forge:ingots/hop_graphite', 2: '#forge:ingots/iron'}),
  event.shaped('pneumaticcraft:reinforced_stone', ['111', '121', '111'], {1: 'compressium:stone_1', 2: '#forge:ingots/compressed_iron'}),
  event.shaped('pneumaticcraft:small_tank', ['121', '232', '121'], {1: '#forge:ingots/hop_graphite', 2: '#forge:ingots/compressed_iron', 3:'immersiveengineering:fluid_pipe'}),
  event.shaped('pneumaticcraft:refinery', ['141', '232', '141'], {1: '#forge:ingots/compressed_iron', 2: '#forge:storage_blocks/redstone', 3:'pneumaticcraft:small_tank', 
                                                                  4: '#forge:ingots/hop_graphite'}),
  event.shaped('pneumaticcraft:thermopneumatic_processing_plant', ['121', '343', '121'], {1: '#forge:ingots/compressed_iron', 2: '#forge:ingots/hop_graphite', 
                                                                                          3:'pneumaticcraft:small_tank', 4: 'pneumaticcraft:refinery'}),
  event.shaped('pneumaticcraft:fluid_mixer', [' 1 ', '232', '141'], {1: 'pneumaticcraft:small_tank', 2: '#forge:ingots/hop_graphite', 3:'#forge:ingots/compressed_iron', 
                                                                     4: 'pneumaticcraft:refinery'}),
  event.shaped('pneumaticcraft:air_compressor', ['111', '1 2', '131'], {1: '#pneumaticcraft:reinforced_stone', 2: 'pneumaticcraft:pressure_tube', 3: '#forge:ingots/hop_graphite'}),
  event.shaped('pneumaticcraft:liquid_compressor', ['121', '343'], {1: 'pneumaticcraft:pressure_tube', 2: 'pneumaticcraft:small_tank', 3: '#forge:ingots/hop_graphite',
                                                                    4: 'pneumaticcraft:air_compressor'}),
  event.shaped('pneumaticcraft:flux_compressor', ['121', '323', '456'], {1: 'pneumaticcraft:printed_circuit_board', 2: '#forge:ingots/hop_graphite', 
                                                                         3: 'pneumaticcraft:advanced_pressure_tube', 4: 'pneumaticcraft:advanced_liquid_compressor', 
                                                                         5: '#forge:storage_blocks/compressed_iron', 6: 'pneumaticcraft:advanced_air_compressor'})

//Pressure Chamber
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", "inputs": [
      {"tag": "forge:storage_blocks/redstone",},
      {"item": "pneumaticcraft:compressed_iron_block"},
      {"type": "pneumaticcraft:stacked_item", "item": "pneumaticcraft:pressure_tube", "count": 2 }],
        "pressure": 2.0, "results": [{ "item": "pneumaticcraft:reinforced_pressure_tube"}]}),
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", "inputs": [
      {"item": "immersiveengineering:ingot_hop_graphite",}],
        "pressure": 2.0, "results": [{"item": "pneumaticcraft:ingot_iron_compressed"}]}),
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", "inputs": [
      {"type": "pneumaticcraft:stacked_item", "item": "immersiveengineering:ingot_hop_graphite", "count": 9 }],
        "pressure": 2.0, "results": [{"item": "pneumaticcraft:compressed_iron_block"}]}),
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", "inputs": [
      {"item": "pneumaticcraft:plastic",},
      {"item": "minecraft:slime_block",},
      {"type": "pneumaticcraft:stacked_item", "item": "immersiveengineering:ingot_hop_graphite", "count": 2 }],
        "pressure": 1.0, "results": [{"item": "pneumaticcraft:transistor"}]}),
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", "inputs": [
      {"item": "pneumaticcraft:plastic",},
      {"item": "minecraft:honey_block",},
      {"type": "pneumaticcraft:stacked_item", "item": "immersiveengineering:ingot_hop_graphite", "count": 2 }],
        "pressure": 1.0, "results": [{"item": "pneumaticcraft:capacitor"}]}),
  event.custom({
    "type": "pneumaticcraft:pressure_chamber", "inputs": [
      {"item": "pneumaticcraft:plastic",},
      {"item": "thermal:steel_nugget",},
      {"item": "pneumaticcraft:ingot_iron_compressed"}],
        "pressure": 1.0, "results": [{"item": "pneumaticcraft:empty_pcb"}]})
//Assembly Controller
  event.custom({
    "type": "pneumaticcraft:assembly_laser",
    "input": {"item": "pneumaticcraft:reinforced_pressure_tube"},
    "result": {"item": "pneumaticcraft:advanced_pressure_tube"},
    "program": "laser"})
})