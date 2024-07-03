// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmetr
  event.remove({id: 'armorplus:smithing/slayer_helmet_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:ender_dragon_helmet"},
    "ingredients": [
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"}],
    "result": {"item": "armorplus:slayer_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:smithing/slayer_chestplate_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:ender_dragon_chestplate"},
    "ingredients": [
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"}],
    "result": {"item": "armorplus:slayer_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:smithing/slayer_leggings_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:ender_dragon_leggings"},
    "ingredients": [
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"}],
    "result": {"item": "armorplus:slayer_leggings"}})
  //Boots
  event.remove({id: 'armorplus:smithing/slayer_boots_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:ender_dragon_boots"},
    "ingredients": [
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"},
      {"item": "armorplus:soul_slayer"}],
    "result": {"item": "armorplus:slayer_boots"}})

  event.shaped('armorplus:soul_slayer', ['121','343', '121'], {1: 'armorplus:soul_ender_dragon', 2: 'armorplus:soul_wither_boss', 3: 'armorplus:soul_elder_guardian', 4: 'armorplus:the_ultimate_material'})
  event.remove({id: 'armorplus:crafting/shapeless/soul_slayer'})
  //Base
  event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_helmet_base'})
  event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_helmet_base_alt'})
  event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_chestplate_base'})
  event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_leggings_base'})
  event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_boots_base'})
  event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_boots_base_alt'})
})

  