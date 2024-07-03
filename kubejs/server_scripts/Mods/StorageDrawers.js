// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'storagedrawers:iron_storage_upgrade'}),
  event.remove({output: 'storagedrawers:gold_storage_upgrade'}),
  event.remove({output: 'storagedrawers:diamond_storage_upgrade'}),
  event.remove({output: 'storagedrawers:emerald_storage_upgrade'}),
  event.remove({output: 'storagedrawers:compacting_drawers_3'}),
  event.remove({output: 'storagedrawers:controller'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('storagedrawers:iron_storage_upgrade',
  ['111','323','111'], {
    1: '#forge:rods/wooden',
    2: 'storagedrawers:upgrade_template',
    3: 'storagedrawers:obsidian_storage_upgrade'}),
  event.shaped('storagedrawers:gold_storage_upgrade',
  ['111','323','111'], {
    1: '#forge:rods/wooden',
    2: 'storagedrawers:upgrade_template',
    3: 'storagedrawers:iron_storage_upgrade'}),
  event.shaped('storagedrawers:diamond_storage_upgrade',
  ['111','323','111'], {
    1: '#forge:rods/wooden',
    2: 'storagedrawers:upgrade_template',
    3: 'storagedrawers:gold_storage_upgrade'}),
  event.shaped('storagedrawers:emerald_storage_upgrade',
  ['111','323','111'], {
    1: '#forge:rods/wooden',
    2: 'storagedrawers:upgrade_template',
    3: 'storagedrawers:diamond_storage_upgrade'}),
  event.shaped('storagedrawers:compacting_drawers_3',
  ['111','232','141'], {
    1: '#forge:stone',
    2: 'minecraft:piston',
    3: '#storagedrawers:drawers',
    4: '#forge:storage_blocks/iron'}),
  event.shaped('storagedrawers:controller',
  ['111','232','141'], {
    1: '#forge:stone',
    2: 'minecraft:piston',
    3: 'storagedrawers:compacting_drawers_3',
    4: '#forge:storage_blocks/iron'})
})