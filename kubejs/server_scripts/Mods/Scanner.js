// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'scannable:scanner'}),
  event.remove({output: 'scannable:blank_module'}),
  event.remove({output: 'scannable:range_module'}),
  event.remove({output: 'scannable:entity_module'}),
  event.remove({output: 'scannable:friendly_entity_module'}),
  event.remove({output: 'scannable:hostile_entity_module'}),
  event.remove({output: 'scannable:block_module'}),
  event.remove({output: 'scannable:common_ores_module'}),
  event.remove({output: 'scannable:rare_ores_module'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('scannable:scanner', 
  ['343','212','343'], {
    1: '#forge:storage_blocks/redstone', 
    2: '#forge:gems/diamond',
    3: '#forge:ingots/iron',
    4: '#forge:ingots/gold'}),
  event.shaped('scannable:blank_module', 
  ['111','323','343'], {
    1: '#forge:paper', 
    2: '#forge:storage_blocks/glowstone',
    3: '#forge:ingots/nether_brick',
    4: '#forge:ingots/gold'}),
  event.shaped('scannable:range_module', 
  ['111','121','111'], {
    1: '#forge:ender_pearls', 
    2: 'scannable:blank_module'}),
  event.shaped('scannable:entity_module', 
  ['111','121','111'], {
    1: '#forge:string', 
    2: 'scannable:blank_module'}),
  event.shaped('scannable:friendly_entity_module', 
  ['131','323','131'], {
    1: '#forge:leather', 
    2: 'scannable:blank_module',
    3: '#forge:wool'})
  event.shaped('scannable:hostile_entity_module', 
  ['131','424','535'], {
    1: '#forge:bones', 
    2: 'scannable:blank_module',
    3: 'minecraft:rotten_flesh',
    4: '#forge:gunpowder', 
    5: 'minecraft:spider_eye'}),
  event.shaped('scannable:block_module', 
  ['111','121','111'], {
    1: '#forge:stone', 
    2: 'scannable:blank_module'}),
  event.shaped('scannable:common_ores_module', 
  ['131','323','131'], {
    1: '#minecraft:coals', 
    2: 'scannable:blank_module', 
    3: '#forge:ingots/iron'}),
  event.shaped('scannable:rare_ores_module', 
  ['131','323','131'], {
    1: '#forge:gems/diamond', 
    2: 'scannable:blank_module', 
    3: '#forge:gems/emerald'})
})