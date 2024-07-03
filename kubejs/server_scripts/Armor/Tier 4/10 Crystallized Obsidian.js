// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmetr
  event.remove({id: 'cyclic:crystal_helmet'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mythicbotany:alfsteel_helmet"},
    "ingredients": [
      {"item": "cyclic:gem_obsidian"},
      {"item": "compressium:obsidian_5"},
      {"item": "compressium:obsidian_5"},
      {"item": "compressium:obsidian_5"}],
    "result": {"item": "cyclic:crystal_helmet"}})
  //Chestplate
  event.remove({id: 'cyclic:crystal_chestplate'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mythicbotany:alfsteel_chestplate"},
    "ingredients": [
      {"item": "cyclic:gem_obsidian"},
      {"item": "compressium:obsidian_5"},
      {"item": "compressium:obsidian_5"},
      {"item": "compressium:obsidian_5"}],
    "result": {"item": "cyclic:crystal_chestplate"}})
  //Leggings
  event.remove({id: 'cyclic:crystal_leggings'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mythicbotany:alfsteel_leggings"},
    "ingredients": [
      {"item": "cyclic:gem_obsidian"},
      {"item": "compressium:obsidian_5"},
      {"item": "compressium:obsidian_5"},
      {"item": "compressium:obsidian_5"}],
    "result": {"item": "cyclic:crystal_leggings"}})
  //Boots
  event.remove({id: 'cyclic:crystal_boots'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "mythicbotany:alfsteel_boots"},
    "ingredients": [
      {"item": "cyclic:gem_obsidian"},
      {"item": "compressium:obsidian_5"},
      {"item": "compressium:obsidian_5"},
      {"item": "compressium:obsidian_5"}],
    "result": {"item": "cyclic:crystal_boots"}})
})

