// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
//Capacitor
  //LV
  event.remove({id: 'immersiveengineering:crafting/capacitor_lv'})
  event.shaped('immersiveengineering:capacitor_lv', ['121','343','121'], {
    1: '#forge:treated_wood', 2: '#forge:plates/lead', 3: '#forge:plates/iron', 4: 'cyclic:battery'})
  //MV
  event.remove({id: 'immersiveengineering:crafting/capacitor_mv'})
  event.shaped('immersiveengineering:capacitor_mv', ['121','343','151'], {
    1: '#forge:treated_wood', 2: '#forge:plates/steel', 3: '#forge:plates/nickel', 4: 'immersiveengineering:capacitor_lv', 5: 'immersiveengineering:redstone_acid_bucket'})
  //HV
  event.remove({id: 'immersiveengineering:crafting/capacitor_hv'})
  event.shaped('immersiveengineering:capacitor_hv', ['121','343','151'], {
    1: '#forge:treated_wood', 2: '#forge:ingots/hop_graphite', 3: '#forge:plates/steel', 4: 'immersiveengineering:capacitor_mv', 5: 'immersiveengineering:redstone_acid_bucket'})
    

})