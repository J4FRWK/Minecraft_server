// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'blue_skies:pyrope_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "pickletweaks:flint_helmet"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"}],
    "mana": 10000, "output": {"item": "blue_skies:pyrope_helmet"}})}
  //Chestplate
  event.remove({id: 'blue_skies:pyrope_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "pickletweaks:flint_chestplate"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"}],
    "mana": 10000, "output": {"item": "blue_skies:pyrope_chestplate"}})
  //Leggings
  event.remove({id: 'blue_skies:pyrope_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "pickletweaks:flint_leggings"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"}],
    "mana": 10000, "output": {"item": "blue_skies:pyrope_leggings"}})
  //Boots
  event.remove({id: 'blue_skies:pyrope_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "pickletweaks:flint_boots"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"},
    {"tag": "blue_skies:storage_blocks/pyrope"}],
    "mana": 10000, "output": {"item": "blue_skies:pyrope_boots"}})
})