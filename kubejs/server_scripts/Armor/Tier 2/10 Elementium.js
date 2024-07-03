// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'botania:elementium_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:manasteel_helmet"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"}],
    "mana": 10000, "output": {"item": "botania:elementium_helmet"}})}
  //Chestplate
  event.remove({id: 'botania:elementium_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:manasteel_chestplate"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"}],
    "mana": 10000, "output": {"item": "botania:elementium_chestplate"}})
  //Leggings
  event.remove({id: 'botania:elementium_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:manasteel_leggings"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"}],
    "mana": 10000, "output": {"item": "botania:elementium_leggings"}})
  //Boots
  event.remove({id: 'botania:elementium_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "botania:manasteel_boots"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"},
    {"tag": "forge:storage_blocks/elementium"}],
    "mana": 10000, "output": {"item": "botania:elementium_boots"}})
})