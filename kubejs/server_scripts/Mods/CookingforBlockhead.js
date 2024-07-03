// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'cookingforblockheads:sink'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('cookingforblockheads:sink', 
  ['222','313', '333'], {
    1: 'mob_grinding_utils:jumbo_tank',
    2: '#forge:storage_blocks/iron',
    3: 'minecraft:terracotta'})
})