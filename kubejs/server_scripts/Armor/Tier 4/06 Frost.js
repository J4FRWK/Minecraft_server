// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/frost/frost_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/frost/frost_helmet_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:infused_lava_helmet"},
    "ingredients": [
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"}],
    "result": {"item": "armorplus:frost_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/frost/frost_chestplate'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:infused_lava_chestplate"},
    "ingredients": [
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"}],
    "result": {"item": "armorplus:frost_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/frost/frost_leggings'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:infused_lava_leggings"},
    "ingredients": [
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"}],
    "result": {"item": "armorplus:frost_leggings"}})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/frost/frost_boots'})
  event.remove({id: 'armorplus:crafting/shaped/frost/frost_boots_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:infused_lava_boots"},
    "ingredients": [
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"},
      {"item": "armorplus:block_frost_crystal"}],
    "result": {"item": "armorplus:frost_boots"}})

    event.shaped('armorplus:block_frost_crystal', ['111','111', '111'], {1: 'armorplus:frost_crystal'})

})