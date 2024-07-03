// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
  //Helmetr
  event.remove({id: 'mythicbotany:alfsteel_helmet_smithing'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:guardian_helmet"},
    "ingredients": [
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "botanicadds:gaiasteel_block"}],
    "result": {"item": "mythicbotany:alfsteel_helmet"}})
  //Chestplate
  event.remove({id: 'mythicbotany:alfsteel_chestplate_smithing'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:guardian_chestplate"},
    "ingredients": [
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "botanicadds:gaiasteel_block"}],
    "result": {"item": "mythicbotany:alfsteel_chestplate"}})
  //Leggings
  event.remove({id: 'mythicbotany:alfsteel_leggings_smithing'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:guardian_leggings"},
    "ingredients": [
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "botanicadds:gaiasteel_block"}],
    "result": {"item": "mythicbotany:alfsteel_leggings"}})
  //Boots
  event.remove({id: 'mythicbotany:alfsteel_boots_smithing'})
  event.custom({ "type": "mysticalagriculture:awakening", "essences": {
    "air": 40, "earth": 40, "water": 40, "fire": 40},
    "input": {"item": "armorplus:guardian_boots"},
    "ingredients": [
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "mythicbotany:alfsteel_block"},
      {"item": "botanicadds:gaiasteel_block"}],
    "result": {"item": "mythicbotany:alfsteel_boots"}})
})