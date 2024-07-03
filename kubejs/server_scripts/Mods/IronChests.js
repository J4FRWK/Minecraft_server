// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'ironchest:iron_chest'}),
  event.remove({output: 'ironchest:gold_chest'}),
  event.remove({output: 'ironchest:diamond_chest'}),
  event.remove({output: 'ironchest:copper_chest'}),
  event.remove({output: 'ironchest:crystal_chest'}),
  event.remove({output: 'ironchest:obsidian_chest'}),
  event.remove({output: 'ironchest:iron_to_gold_chest_upgrade'}),
  event.remove({output: 'ironchest:gold_to_diamond_chest_upgrade'}),
  event.remove({output: 'ironchest:copper_to_iron_chest_upgrade'}),
  event.remove({output: 'ironchest:diamond_to_crystal_chest_upgrade'}),
  event.remove({output: 'ironchest:wood_to_iron_chest_upgrade'}),
  event.remove({output: 'ironchest:wood_to_copper_chest_upgrade'}),
  event.remove({output: 'ironchest:diamond_to_obsidian_chest_upgrade'}),
  event.remove({output: 'ironchest:dirt_chest'}),
  event.remove({output: 'ironchest:trapped_iron_chest'}),
  event.remove({output: 'ironchest:trapped_gold_chest'}),
  event.remove({output: 'ironchest:trapped_diamond_chest'}),
  event.remove({output: 'ironchest:trapped_copper_chest'}),
  event.remove({output: 'ironchest:trapped_crystal_chest'}),
  event.remove({output: 'ironchest:trapped_obsidian_chest'}),
  event.remove({output: 'ironchest:trapped_dirt_chest'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('ironchest:copper_chest', 
  ['111','121','111'], {
    1: '#forge:ingots/copper', 
    2: '#forge:chests'}),
  event.shaped('ironchest:iron_chest', 
  ['111','121','111'], {
    1: '#forge:ingots/iron', 
    2: 'ironchest:copper_chest'}),
  event.shaped('ironchest:gold_chest', 
  ['111','121','111'], {
    1: '#forge:ingots/gold', 
    2: 'ironchest:iron_chest'}),
  event.shaped('ironchest:diamond_chest', 
  ['111','121','111'], {
    1: '#forge:gems/diamond',
    2: 'ironchest:gold_chest'}),
  event.shaped('ironchest:crystal_chest', 
  ['111','121','111'], {
    1: '#forge:glass', 
    2: 'ironchest:diamond_chest'}),
  event.shaped('ironchest:obsidian_chest',
  ['111','121','111'], {
    1: '#forge:obsidian', 
    2: 'ironchest:crystal_chest'})
})