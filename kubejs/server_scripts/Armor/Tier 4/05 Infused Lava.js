// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_helmet_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:netherite_helmet"},
    "ingredients": [
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"}],
    "result": {"item": "armorplus:infused_lava_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_chestplate'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:netherite_chestplate"},
    "ingredients": [
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"}],
    "result": {"item": "armorplus:infused_lava_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_leggings'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:netherite_leggings"},
    "ingredients": [
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"}],
    "result": {"item": "armorplus:infused_lava_leggings"}})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_boots'})
  event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_boots_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:netherite_boots"},
    "ingredients": [
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"},
      {"item": "armorplus:compressed_infused_lava_crystal"}],
    "result": {"item": "armorplus:infused_lava_boots"}})
})