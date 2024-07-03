// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'angelring:angel_ring'}),
  event.remove({output: 'angelring:diamond_ring'})
})

//Add
ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table ('angelring:angel_ring',  [
  '5566655',
  '5111115',
  '6142416',
  '6132316',
  '6142416',
  '5111115',
  '5566655'
],  {
  1: '#forge:ingots/netherite', 
  2: 'angelring:diamond_ring', 
  3: 'minecraft:elytra',
  4: 'extendedcrafting:ender_star', 
  5: 'extendedcrafting:elite_component',
  6: 'extendedcrafting:elite_catalyst'
}),
event.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "pattern": ["111","121","111"],
  "key": {
    "1": {"item": "minecraft:diamond_block"},
    "2": {"item": "minecraft:ghast_spawn_egg"}
  },
  "result": {"item": "angelring:diamond_ring"}})
})