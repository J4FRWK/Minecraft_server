// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'botania:manasteel_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "minecraft:iron_helmet"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"}],
    "mana": 10000, "output": {"item": "botania:manasteel_helmet"}})}
  //Chestplate
  event.remove({id: 'botania:manasteel_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "minecraft:iron_chestplate"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"}],
    "mana": 10000, "output": {"item": "botania:manasteel_chestplate"}})
  //Leggings
  event.remove({id: 'botania:manasteel_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "minecraft:iron_leggings"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"}],
    "mana": 10000, "output": {"item": "botania:manasteel_leggings"}})
  //Boots
  event.remove({id: 'botania:manasteel_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "minecraft:iron_boots"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"},
    {"tag": "forge:storage_blocks/manasteel"}],
    "mana": 10000, "output": {"item": "botania:manasteel_boots"}})
})