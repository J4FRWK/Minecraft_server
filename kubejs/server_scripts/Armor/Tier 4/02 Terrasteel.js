// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'botania:terrasteel_helmet'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:obsidian_helmet"},
    "ingredients": [
      {"item": "botania:terrasteel_block"},
      {"item": "botania:terrasteel_block"},
      {"item": "botania:terrasteel_block"},
      {"item": "botania:gaia_ingot"}],
    "result": {"item": "botania:terrasteel_helmet"}})
  //Chestplate
  event.remove({id: 'botania:terrasteel_chestplate'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:obsidian_chestplate"},
    "ingredients": [
      {"item": "botania:terrasteel_block"},
      {"item": "botania:terrasteel_block"},
      {"item": "botania:terrasteel_block"},
      {"item": "botania:gaia_ingot"}],
    "result": {"item": "botania:terrasteel_chestplate"}})
  //Leggings
  event.remove({id: 'botania:terrasteel_leggings'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:obsidian_leggings"},
    "ingredients": [
      {"item": "botania:terrasteel_block"},
      {"item": "botania:terrasteel_block"},
      {"item": "botania:terrasteel_block"},
      {"item": "botania:gaia_ingot"}],
    "result": {"item": "botania:terrasteel_leggings"}})
  //Boots
  event.remove({id: 'botania:terrasteel_boots'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:obsidian_boots"},
    "ingredients": [
      {"item": "botania:terrasteel_block"},
      {"item": "botania:terrasteel_block"},
      {"item": "botania:terrasteel_block"},
      {"item": "botania:gaia_ingot"}],
    "result": {"item": "botania:terrasteel_boots"}})
})