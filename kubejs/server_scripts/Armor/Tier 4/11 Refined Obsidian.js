// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmetr
  event.remove({id: 'mekanismtools:refined_obsidian/armor/helmet'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "cyclic:crystal_helmet"},
    "ingredients": [
      {"item": "mekanism:block_refined_obsidian"},
      {"item": "compressium:obsidian_6"},
      {"item": "compressium:obsidian_6"},
      {"item": "compressium:obsidian_6"}],
    "result": {"item": "mekanismtools:refined_obsidian_helmet"}})
  //Chestplate
  event.remove({id: 'mekanismtools:refined_obsidian/armor/chestplate'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "cyclic:crystal_chestplate"},
    "ingredients": [
      {"item": "mekanism:block_refined_obsidian"},
      {"item": "compressium:obsidian_6"},
      {"item": "compressium:obsidian_6"},
      {"item": "compressium:obsidian_6"}],
    "result": {"item": "mekanismtools:refined_obsidian_chestplate"}})
  //Leggings
  event.remove({id: 'mekanismtools:refined_obsidian/armor/leggings'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "cyclic:crystal_leggings"},
    "ingredients": [
      {"item": "mekanism:block_refined_obsidian"},
      {"item": "compressium:obsidian_6"},
      {"item": "compressium:obsidian_6"},
      {"item": "compressium:obsidian_6"}],
    "result": {"item": "mekanismtools:refined_obsidian_leggings"}})
  //Boots
  event.remove({id: 'mekanismtools:refined_obsidian/armor/boots'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "cyclic:crystal_boots"},
    "ingredients": [
      {"item": "mekanism:block_refined_obsidian"},
      {"item": "compressium:obsidian_6"},
      {"item": "compressium:obsidian_6"},
      {"item": "compressium:obsidian_6"}],
    "result": {"item": "mekanismtools:refined_obsidian_boots"}})
})

