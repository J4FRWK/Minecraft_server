// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'storagenetwork:builder_remote'}),
  event.remove({output: 'storagenetwork:picker_remote'}),
  event.remove({output: 'storagenetwork:collector_remote'}),
  event.remove({output: 'storagenetwork:exchange'}),
  event.remove({output: 'storagenetwork:master'}),
  event.remove({output: 'storagenetwork:inventory'}),
  event.remove({output: 'storagenetwork:request'}),
  event.remove({output: 'storagenetwork:collector'}),
  event.remove({output: 'storagenetwork:kabel'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('storagenetwork:master', 
  ['121','131','121'], {
    1: '#forge:stone', 
    2: '#forge:ingots/iron', 
    3: '#forge:gems/diamond'}),
  event.shaped('storagenetwork:inventory', 
  ['131','424','131'], {
    1: '#forge:ingots/iron', 
    2: 'ironchest:obsidian_chest', 
    3: '#forge:gems/diamond',
    4: '#forge:storage_blocks/iron'}),
  event.shaped('storagenetwork:inventory', 
  ['131','424','131'], {
    1: '#forge:ingots/iron', 
    2: 'storagedrawers:controller', 
    3: '#forge:gems/diamond',
    4: '#forge:storage_blocks/iron'}),
  event.shaped('storagenetwork:inventory', 
  ['131','424','131'], {
    1: '#forge:ingots/iron', 
    2: 'functionalstorage:storage_controller', 
    3: '#forge:gems/diamond',
    4: '#forge:storage_blocks/iron'}),
  event.shaped('storagenetwork:request', 
  ['131','121','131'], {
    1: '#forge:gems/diamond', 
    2: 'storagenetwork:inventory', 
    3: 'cyclic:crafting_bag'}),
  event.shaped('storagenetwork:collector', 
  ['131','323','131'], {
    1: '#forge:gems/diamond', 
    2: 'storagenetwork:request', 
    3: '#forge:ender_pearls'}),
  event.shaped('4x storagenetwork:kabel', 
  [' 1 ','121',' 1 '], {
    1: '#forge:ingots/iron', 
    2: 'cyclic:item_pipe'})
})