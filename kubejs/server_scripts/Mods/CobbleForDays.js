// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'cobblefordays:tier_2'}),
  event.remove({output: 'cobblefordays:tier_3'}),
  event.remove({output: 'cobblefordays:tier_4'}),
  event.remove({output: 'cobblefordays:tier_5'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('cobblefordays:tier_2', ['111','121','111'], {
    1: 'compressium:cobblestone_1', 2: 'cobblefordays:tier_1'}),
  event.shaped('cobblefordays:tier_3', ['111','121','111'], {
    1: '#forge:storage_blocks/iron', 2: 'cobblefordays:tier_2'}),
  event.shaped('cobblefordays:tier_4', ['111','121','111'], {
    1: '#forge:storage_blocks/gold', 2: 'cobblefordays:tier_3'}),
  event.shaped('cobblefordays:tier_5', ['111','121','111'], {
    1: '#forge:storage_blocks/diamond', 2: 'cobblefordays:tier_4'})
})