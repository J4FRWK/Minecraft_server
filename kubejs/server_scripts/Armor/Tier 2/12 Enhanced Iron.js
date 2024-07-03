// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/enhanced/iron_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/iron_helmet_alt'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "undergarden:cloggrum_helmet"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"}],
    "mana": 10000, "output": {"item": "armorplus:iron_helmet"}})}
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/enhanced/iron_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "undergarden:cloggrum_chestplate"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"}],
    "mana": 10000, "output": {"item": "armorplus:iron_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/enhanced/iron_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "undergarden:cloggrum_leggings"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"}],
    "mana": 10000, "output": {"item": "armorplus:iron_leggings"}})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/enhanced/iron_boots'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/iron_boots_alt'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "undergarden:cloggrum_boots"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"},
    {"item": "armorplus:en_iron"}],
    "mana": 10000, "output": {"item": "armorplus:iron_boots"}})

  event.remove({id: 'armorplus:crafting/shaped/enhanced/en_iron'})
  event.shaped('armorplus:en_iron', ['222','111', '222'], {1: 'compressium:iron_1', 2: '#forge:ingots/iron'})
})