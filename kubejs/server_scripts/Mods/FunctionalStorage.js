// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'functionalstorage:compacting_drawer'}),
  event.remove({output: 'functionalstorage:storage_controller'}),
  event.remove({output: 'functionalstorage:simple_compacting_drawer'}),
  event.remove({output: 'functionalstorage:fluid_1'}),
  event.remove({output: 'functionalstorage:fluid_2'}),
  event.remove({output: 'functionalstorage:fluid_4'})
  event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('functionalstorage:compacting_drawer', ['111','232','141'], {
    1: '#forge:stone',
    2: 'minecraft:piston',
    3: 'functionalstorage:simple_compacting_drawer',
    4: '#forge:storage_blocks/iron'}),
  event.shaped('functionalstorage:storage_controller', ['111','232','141'], {
    1: '#forge:stone',
    2: 'minecraft:piston',
    3: 'functionalstorage:compacting_drawer',
    4: '#forge:storage_blocks/iron'}),
  event.shaped('functionalstorage:simple_compacting_drawer', ['111','232','141'], {
    1: '#forge:stone',
    2: 'minecraft:piston',
    3: '#functionalstorage:drawer',
    4: '#forge:storage_blocks/iron'}),
  event.shaped('functionalstorage:fluid_1', ['111','232','111'], {
    1: '#minecraft:planks',
    2: '#functionalstorage:drawer',
    3: 'minecraft:bucket'}),
    event.shaped('functionalstorage:fluid_2', ['111','323','111'], {
      1: '#minecraft:planks',
      2: '#functionalstorage:drawer',
      3: 'minecraft:bucket'}),
      event.shaped('functionalstorage:fluid_4', ['131','323','131'], {
        1: '#minecraft:planks',
        2: '#functionalstorage:drawer',
        3: 'minecraft:bucket'})
})