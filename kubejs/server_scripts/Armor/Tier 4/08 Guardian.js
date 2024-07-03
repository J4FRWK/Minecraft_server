// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:smithing/guardian_helmet_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:frost_lava_helmet"},
    "ingredients": [
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"}],
    "result": {"item": "armorplus:guardian_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:smithing/guardian_chestplate_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:frost_lava_chestplate"},
    "ingredients": [
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"}],
    "result": {"item": "armorplus:guardian_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:smithing/guardian_leggings_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:frost_lava_leggings"},
    "ingredients": [
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"}],
    "result": {"item": "armorplus:guardian_leggings"}})
  //Boots
  event.remove({id: 'armorplus:smithing/guardian_boots_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:frost_lava_boots"},
    "ingredients": [
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"},
      {"item": "armorplus:soul_elder_guardian"}],
    "result": {"item": "armorplus:guardian_boots"}})

  event.shaped('armorplus:soul_elder_guardian', ['111','121', '111'], {1: 'armorplus:soul_guardian', 2: 'armorplus:the_ultimate_material'})
  event.remove({id: 'armorplus:crafting/shaped/soul/soul_elder_guardian'})
  //Base
  event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_helmet_base'})
  event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_helmet_base_alt'})
  event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_chestplate_base'})
  event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_leggings_base'})
  event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_boots_base'})
  event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_boots_base_alt'})
})