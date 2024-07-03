// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmet
  event.remove({id: 'armorplus:smithing/netherite_helmet'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "minecraft:netherite_helmet"},
    "ingredients": [
      {"item": "armorplus:en_netherite"},
      {"item": "armorplus:en_netherite"},
      {"item": "armorplus:en_netherite"},
      {"item": "compressium:netherite_2"}],
    "result": {"item": "armorplus:netherite_helmet"}})
  //Chestplate
  event.remove({id: 'armorplus:smithing/netherite_chestplate'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "minecraft:netherite_chestplate"},
    "ingredients": [
      {"item": "armorplus:en_netherite"},
      {"item": "armorplus:en_netherite"},
      {"item": "armorplus:en_netherite"},
      {"item": "compressium:netherite_2"}],
    "result": {"item": "armorplus:netherite_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:smithing/netherite_leggings'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "minecraft:netherite_leggings"},
    "ingredients": [
      {"item": "armorplus:en_netherite"},
      {"item": "armorplus:en_netherite"},
      {"item": "armorplus:en_netherite"},
      {"item": "compressium:netherite_2"}],
    "result": {"item": "armorplus:netherite_leggings"}})
  //Boots
  event.remove({id: 'armorplus:smithing/netherite_boots'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/netherite_boots_alt'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "minecraft:netherite_boots"},
    "ingredients": [
      {"item": "armorplus:en_netherite"},
      {"item": "armorplus:en_netherite"},
      {"item": "armorplus:en_netherite"},
      {"item": "compressium:netherite_2"}],
    "result": {"item": "armorplus:netherite_boots"}})

    event.remove({id: 'armorplus:crafting/shaped/enhanced/en_netherite'})
    event.shaped('armorplus:en_netherite', ['222','111', '222'], {1: 'compressium:netherite_1', 2: '#forge:ingots/netherite'})
})