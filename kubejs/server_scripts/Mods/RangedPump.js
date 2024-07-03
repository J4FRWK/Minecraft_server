// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'rangedpumps:pump'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('rangedpumps:pump', 
  ['343','125','343'], {
    1: 'immersiveengineering:capacitor_hv', 
    2: 'minecraft:nether_star',
    3: '#forge:ingots/hop_graphite',
    4: 'minecraft:netherite_pickaxe',
    5: 'mob_grinding_utils:jumbo_tank'})
})