// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'reliquary:alkahestry_tome'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('reliquary:alkahestry_tome', 
  ['232','415','262'], {
    1: 'minecraft:writable_book', 
    2: 'extendedcrafting:nether_star_block',
    3: 'reliquary:eye_of_the_storm',
    4: 'reliquary:fertile_essence',
    5: 'reliquary:crimson_cloth',
    6: 'reliquary:infernal_claw'})
})