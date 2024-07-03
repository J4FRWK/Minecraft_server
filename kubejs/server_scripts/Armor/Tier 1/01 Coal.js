// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/coal/coal_helmet_alt'})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/coal/coal_boots_alt'})
})
