// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({id: 'twilightforest:uncrafting_table'})
//Mazestone
event.shaped('6x twilightforest:mazestone', ['111','121','111'], {
  1: 'mysticalagriculture:stone_essence', 2: 'hostilenetworks:twilight_prediction'})
//Maze Wafer
  event.shaped('2x twilightforest:maze_wafer', ['121'], {
    1: 'croptopia:toast', 2: '#forge:mazestone'})
//Experiment 115
event.custom({"type": "pneumaticcraft:explosion_crafting",
"input": {"item": "minecraft:cake"}, "loss_rate": 0,
  "results": [{"item": "twilightforest:experiment_115", "count": 8}]})

  
})