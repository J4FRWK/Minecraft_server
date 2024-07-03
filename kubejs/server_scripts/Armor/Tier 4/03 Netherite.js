// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'minecraft:netherite_helmet_smithing'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "botania:terrasteel_helmet"},
    "ingredients": [
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"}],
    "result": {"item": "minecraft:netherite_helmet"}})
  //Chestplate
  event.remove({id: 'minecraft:netherite_chestplate_smithing'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "botania:terrasteel_chestplate"},
    "ingredients": [
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"}],
    "result": {"item": "minecraft:netherite_chestplate"}})
  //Leggings
  event.remove({id: 'minecraft:netherite_leggings_smithing'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "botania:terrasteel_leggings"},
    "ingredients": [
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"}],
    "result": {"item": "minecraft:netherite_leggings"}})
  //Boots
  event.remove({id: 'minecraft:netherite_boots_smithing'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "botania:terrasteel_boots"},
    "ingredients": [
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"},
      {"item": "compressium:netherite_2"}],
    "result": {"item": "minecraft:netherite_boots"}})
})