// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({id: 'redstone_arsenal:materials/flux_dust'})
  event.remove({id: 'redstone_arsenal:materials/flux_gem'})
  event.remove({id: 'thermal:compat/redstone_arsenal/bottler_rsa_flux_gem'})
  event.remove({output: 'redstone_arsenal:flux_plating'})
  event.remove({id: 'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust'})
  event.remove({output: 'redstone_arsenal:flux_obsidian_rod'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('redstone_arsenal:obsidian_rod', 
  ['  1',' 2 ','1  '], {
    1: '#forge:obsidian',
    2: 'redstone_arsenal:flux_ingot'}),
  event.shaped('redstone_arsenal:flux_obsidian_rod', 
  ['  1',' 2 ','1  '], {
    1: 'redstone_arsenal:flux_plating',
    2: 'redstone_arsenal:obsidian_rod'}),
//Induction Smelter
  event.custom({
  "type": "thermal:smelter",
    "input": [
    { "tag": "forge:dusts/redstone", "count": 8 },
    { "tag": "forge:dusts/diamond"}],
  "result": [{"item": "redstone_arsenal:flux_gem", "count": 1}],
    "energy": 20000}),
  event.custom({
  "type": "thermal:smelter",
    "input": [
    { "tag": "forge:dusts/redstone", "count": 8 },
    { "tag": "forge:gems/diamond"}],
  "result": [{"item": "redstone_arsenal:flux_dust", "count": 1}],
    "energy": 20000}),
  event.custom({
  "type": "thermal:smelter",
    "input": [
    { "item": "redstone_arsenal:flux_ingot", "count": 4 },
    { "item": "redstone_arsenal:flux_gem"}],
  "result": [{"item": "redstone_arsenal:flux_plating", "count": 1}],
    "energy": 20000})
})