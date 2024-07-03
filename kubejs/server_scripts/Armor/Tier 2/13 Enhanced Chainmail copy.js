// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'armorplus:crafting/shaped/enhanced/chainmail_helmet'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/chainmail_helmet_alt'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:iron_helmet"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"}],
    "mana": 10000, "output": {"item": "armorplus:chainmail_helmet"}})}
  //Chestplate
  event.remove({id: 'armorplus:crafting/shaped/enhanced/chainmail_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:iron_chestplate"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"}],
    "mana": 10000, "output": {"item": "armorplus:chainmail_chestplate"}})
  //Leggings
  event.remove({id: 'armorplus:crafting/shaped/enhanced/chainmail_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:iron_leggings"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"}],
    "mana": 10000, "output": {"item": "armorplus:chainmail_leggings"}})
  //Boots
  event.remove({id: 'armorplus:crafting/shaped/enhanced/chainmail_boots'})
  event.remove({id: 'armorplus:crafting/shaped/enhanced/chainmail_boots_alt'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:iron_boots"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"},
    {"item": "armorplus:en_chainmail"}],
    "mana": 10000, "output": {"item": "armorplus:chainmail_boots"}})

    event.remove({id: 'armorplus:crafting/shaped/enhanced/en_chainmail'})
  event.shaped('armorplus:en_chainmail', ['111','222', '111'], {1: 'armorplus:chainmail', 2: 'compressium:iron_2'})
})