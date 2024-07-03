// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'undergarden:cloggrum_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:elementium_helmet"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"}],
    "mana": 10000, "output": {"item": "undergarden:cloggrum_helmet"}})}
  //Chestplate
  event.remove({id: 'undergarden:cloggrum_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:elementium_chestplate"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"}],
    "mana": 10000, "output": {"item": "undergarden:cloggrum_chestplate"}})
  //Leggings
  event.remove({id: 'undergarden:cloggrum_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:elementium_leggings"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"}],
    "mana": 10000, "output": {"item": "undergarden:cloggrum_leggings"}})
  //Boots
  event.remove({id: 'undergarden:cloggrum_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:elementium_boots"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"},
    {"tag": "forge:storage_blocks/cloggrum"}],
    "mana": 10000, "output": {"item": "undergarden:cloggrum_boots"}})
})