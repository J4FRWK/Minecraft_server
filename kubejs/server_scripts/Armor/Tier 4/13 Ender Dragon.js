// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmetr
  event.remove({id: 'armorplus:smithing/ender_dragon_helmet_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:super_star_helmet"},
    "ingredients": [
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"}],
    "result": {"item": "armorplus:ender_dragon_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:smithing/ender_dragon_chestplate_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:super_star_chestplate"},
    "ingredients": [
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"}],
    "result": {"item": "armorplus:ender_dragon_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:smithing/ender_dragon_leggings_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:super_star_leggings"},
    "ingredients": [
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"}],
    "result": {"item": "armorplus:ender_dragon_leggings"}})
  //Boots
  event.remove({id: 'armorplus:smithing/ender_dragon_boots_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:super_star_boots"},
    "ingredients": [
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"},
      {"item": "armorplus:soul_ender_dragon"}],
    "result": {"item": "armorplus:ender_dragon_boots"}})

  event.shaped('armorplus:soul_ender_dragon', ['111','121', '111'], {1: 'armorplus:soul_enderman', 2: 'armorplus:the_ultimate_material'})
  event.remove({id: 'armorplus:crafting/shaped/soul/soul_ender_dragon'})
  //Base
  event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_helmet_base'})
  event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_helmet_base_alt'})
  event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_chestplate_base'})
  event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_leggings_base'})
  event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_boots_base'})
  event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_boots_base_alt'})
})

