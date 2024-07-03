// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'pickletweaks:flint_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "minecraft:chainmail_helmet"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"}],
    "mana": 10000, "output": {"item": "pickletweaks:flint_helmet"}})}
  //Chestplate
  event.remove({id: 'pickletweaks:flint_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "minecraft:chainmail_chestplate"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"}],
    "mana": 10000, "output": {"item": "pickletweaks:flint_chestplate"}})
  //Leggings
  event.remove({id: 'pickletweaks:flint_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "minecraft:chainmail_leggings"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"}],
    "mana": 10000, "output": {"item": "pickletweaks:flint_leggings"}})
  //Boots
  event.remove({id: 'pickletweaks:flint_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "minecraft:chainmail_boots"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"},
    {"tag": "forge:storage_blocks/flint"}],
    "mana": 10000, "output": {"item": "pickletweaks:flint_boots"}})
})