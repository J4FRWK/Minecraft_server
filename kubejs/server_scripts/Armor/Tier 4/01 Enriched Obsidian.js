// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_helmet_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "blue_skies:charoite_helmet"},
    "ingredients": [
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"}],
    "result": {"item": "armorplus:obsidian_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_chestplate'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "blue_skies:charoite_chestplate"},
    "ingredients": [
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"}],
    "result": {"item": "armorplus:obsidian_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_leggings'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "blue_skies:charoite_leggings"},
    "ingredients": [
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"}],
    "result": {"item": "armorplus:obsidian_leggings"}})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_boots'})
  event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_boots_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "blue_skies:charoite_boots"},
    "ingredients": [
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"},
      {"item": "compressium:obsidian_4"}],
    "result": {"item": "armorplus:obsidian_boots"}})
})