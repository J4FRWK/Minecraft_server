// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'mob_catcher:netherite_mob_catcher'}),
  event.remove({output: 'mob_catcher:diamond_mob_catcher'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('mob_catcher:netherite_mob_catcher', 
  [' 1 ','121',' 1 '], {
    1: '#forge:ingots/netherite', 
    2: 'mob_catcher:diamond_mob_catcher'}),
  event.shaped('mob_catcher:diamond_mob_catcher', 
  [' 1 ','121',' 1 '], {
    1: '#forge:gems/diamond', 
    2: 'minecraft:lead'})
})