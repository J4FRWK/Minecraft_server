// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')
//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'blue_skies:zeal_lighter'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('blue_skies:alchemy_table',
  ['111','323','333'], {
    1: '#forge:paper', 
    2: '#forge:dyes/purple', 
    3: 'minecraft:crimson_planks'}),
  event.shaped('blue_skies:zeal_lighter', 
  ['323','212','323'], {
    1: 'minecraft:flint_and_steel', 
    2: '#forge:dyes/purple', 
    3: '#forge:dyes/light_blue'})
})