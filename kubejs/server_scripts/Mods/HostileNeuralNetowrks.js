// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'hostilenetworks:deep_learner'}),
  event.remove({output: 'hostilenetworks:blank_data_model'}),
  event.remove({output: 'hostilenetworks:empty_prediction'}),
  event.remove({output: 'hostilenetworks:sim_chamber'}),
  event.remove({output: 'hostilenetworks:loot_fabricator'}),
  event.remove({output: 'hostilenetworks:nether_prediction'}),
  event.remove({output: 'hostilenetworks:end_prediction'})
  
})

//Add
ServerEvents.recipes(event => {
  event.shaped('hostilenetworks:deep_learner', ['131','323','131'], {1: 'spirit:soul_steel_block', 2: 'spirit:soul_cage', 3: 'blue_skies:soul_fragment'}),
  event.shaped('hostilenetworks:blank_data_model', ['121','232','121'], {1: 'spirit:soul_powder', 2: 'undergarden:cloggrum_ingot', 3: 'twilightforest:magic_map'}),
  event.shaped('16x hostilenetworks:empty_prediction', ['12 ','232',' 21'], {1: '#forge:ingots/regalium', 2: 'undergarden:sediment_glass_pane', 3: 'twilightforest:magic_beans'}),
  event.shaped('hostilenetworks:sim_chamber', [' 1 ','232','454'], {1: '#forge:ingots/netherite', 2: 'twilightforest:ironwood_ingot', 3: 'undergarden:sediment_glass_pane', 
                                                                    4: '#forge:ingots/regalium', 5: 'undergarden:cloggrum_ingot'}),
  event.shaped('hostilenetworks:loot_fabricator', [' 1 ','232','454'], {1: '#forge:ingots/netherite', 2: 'twilightforest:carminite_block', 3: 'minecraft:nether_star',
                                                                        4: '#forge:ingots/regalium', 5: '#forge:ingots/forgotten_metal'}),
  event.shaped('hostilenetworks:nether_prediction', ['111','121','111'], {1: 'mysticalagriculture:nether_essence', 2: 'hostilenetworks:overworld_prediction'}),
  event.shaped('hostilenetworks:end_prediction', ['111','121','111'], {1: 'mysticalagriculture:end_essence', 2: 'hostilenetworks:nether_prediction'})
})