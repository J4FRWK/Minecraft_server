// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'blue_skies:horizonite_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:pyrope_helmet"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"}],
    "mana": 10000, "output": {"item": "blue_skies:horizonite_helmet"}})}
  //Chestplate
  event.remove({id: 'blue_skies:horizonite_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:pyrope_chestplate"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"}],
    "mana": 10000, "output": {"item": "blue_skies:horizonite_chestplate"}})
  //Leggings
  event.remove({id: 'blue_skies:horizonite_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:pyrope_leggings"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"}],
    "mana": 10000, "output": {"item": "blue_skies:horizonite_leggings"}})
  //Boots
  event.remove({id: 'blue_skies:horizonite_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:pyrope_boots"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"},
    {"tag": "blue_skies:storage_blocks/horizonite"}],
    "mana": 10000, "output": {"item": "blue_skies:horizonite_boots"}})
})