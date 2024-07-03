// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmetr
  event.remove({id: 'armorplus:smithing/super_star_helmet_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mekanismtools:refined_obsidian_helmet"},
    "ingredients": [
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"}],
    "result": {"item": "armorplus:super_star_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:smithing/super_star_chestplate_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mekanismtools:refined_obsidian_chestplate"},
    "ingredients": [
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"}],
    "result": {"item": "armorplus:super_star_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:smithing/super_star_leggings_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mekanismtools:refined_obsidian_leggings"},
    "ingredients": [
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"}],
    "result": {"item": "armorplus:super_star_leggings"}})
  //Boots
  event.remove({id: 'armorplus:smithing/super_star_boots_base'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mekanismtools:refined_obsidian_boots"},
    "ingredients": [
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"},
      {"item": "armorplus:soul_wither_boss"}],
    "result": {"item": "armorplus:super_star_boots"}})

  event.shaped('armorplus:soul_wither_boss', ['111','121', '111'], {1: 'armorplus:soul_wither_skeleton', 2: 'armorplus:the_ultimate_material'})
  event.remove({id: 'armorplus:crafting/shaped/soul/soul_wither_boss'})
  //Base
  event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_helmet_base'})
  event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_helmet_base_alt'})
  event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_chestplate_base'})
  event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_leggings_base'})
  event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_boots_base'})
  event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_boots_base_alt'})

})

