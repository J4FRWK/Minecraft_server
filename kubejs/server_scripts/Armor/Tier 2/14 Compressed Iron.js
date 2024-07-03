// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'pneumaticcraft:compressed_iron_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:chainmail_helmet"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"}],
    "mana": 10000, "output": {"item": "pneumaticcraft:compressed_iron_helmet"}})}
  //Chestplate
  event.remove({id: 'pneumaticcraft:compressed_iron_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:chainmail_chestplate"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"}],
    "mana": 10000, "output": {"item": "pneumaticcraft:compressed_iron_chestplate"}})
  //Leggings
  event.remove({id: 'pneumaticcraft:compressed_iron_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:chainmail_leggings"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"}],
    "mana": 10000, "output": {"item": "pneumaticcraft:compressed_iron_leggings"}})
  //Boots
  event.remove({id: 'pneumaticcraft:compressed_iron_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:chainmail_boots"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"},
    {"tag": "forge:storage_blocks/compressed_iron"}],
    "mana": 10000, "output": {"item": "pneumaticcraft:compressed_iron_boots"}})
})