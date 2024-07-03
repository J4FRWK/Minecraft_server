// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.remove({output: 'similsaxtranstructors:transtructor_basic'})
  event.remove({output: 'similsaxtranstructors:transtructor_advanced'})
})

//Add
ServerEvents.recipes(event => {
  event.shaped('similsaxtranstructors:transtructor_basic', 
  ['1 1','111',' 2 '], {
    1: '#forge:stone', 
    2: 'minecraft:stick'})
  event.shaped('similsaxtranstructors:transtructor_advanced', 
  ['1 1','111',' 2 '], {
    1: '#forge:gems/diamond', 
    2: 'similsaxtranstructors:transtructor_basic'})
})