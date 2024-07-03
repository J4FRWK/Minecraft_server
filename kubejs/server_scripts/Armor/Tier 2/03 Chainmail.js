// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "tools_complement:nickel_helmet"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"}],
    "mana": 10000, "output": {"item": "minecraft:chainmail_helmet"}})}
  //Chestplate
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "tools_complement:nickel_chestplate"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"}],
    "mana": 10000, "output": {"item": "minecraft:chainmail_chestplate"}})
  //Leggings
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "tools_complement:nickel_leggings"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"}],
    "mana": 10000, "output": {"item": "minecraft:chainmail_leggings"}})
  //Boots

  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "tools_complement:nickel_boots"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"},
    {"item": "armorplus:chainmail"}],
    "mana": 10000, "output": {"item": "minecraft:chainmail_boots"}})

  event.shaped('armorplus:chainmail', ['111'], {1: '#forge:storage_blocks/iron'})
})