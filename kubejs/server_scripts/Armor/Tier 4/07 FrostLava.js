// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/frost_lava/frost_lava_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/frost_lava/frost_lava_helmet_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:frost_helmet"},
    "ingredients": [
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"}],
    "result": {"item": "armorplus:frost_lava_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/frost_lava/frost_lava_chestplate'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:frost_chestplate"},
    "ingredients": [
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"}],
    "result": {"item": "armorplus:frost_lava_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/frost_lava/frost_lava_leggings'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:frost_leggings"},
    "ingredients": [
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"}],
    "result": {"item": "armorplus:frost_lava_leggings"}})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/frost_lava/frost_lava_boots'})
  event.remove({id: 'armorplus:crafting/shaped/frost_lava/frost_lava_boots_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:frost_boots"},
    "ingredients": [
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"},
      {"item": "armorplus:infused_frost_lava_crystal"}],
    "result": {"item": "armorplus:frost_lava_boots"}})

  event.shaped('armorplus:infused_frost_lava_crystal', ['121','232', '121'], 
  {1: 'armorplus:block_infused_lava_crystal', 2: 'armorplus:block_infused_frost_crystal', 3: 'armorplus:compressed_infused_lava_crystal'})
  event.shaped('armorplus:block_infused_frost_crystal', ['111','111', '111'], {1: 'armorplus:infused_frost_crystal'})
  event.shapeless('9x armorplus:infused_frost_crystal', ['armorplus:block_infused_frost_crystal'])
  event.remove({id: 'armorplus:smithing/infused_lava_crystal'})
  event.remove({id: 'armorplus:smithing/infused_frost_crystal'})
})