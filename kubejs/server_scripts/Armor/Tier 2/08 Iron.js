// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'minecraft:iron_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:aquite_helmet"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"}],
    "mana": 10000, "output": {"item": "minecraft:iron_helmet"}})}
  //Chestplate
  event.remove({id: 'minecraft:iron_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:aquite_chestplate"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"}],
    "mana": 10000, "output": {"item": "minecraft:iron_chestplate"}})
  //Leggings
  event.remove({id: 'minecraft:iron_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:aquite_leggings"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"}],
    "mana": 10000, "output": {"item": "minecraft:iron_leggings"}})
  //Boots
  event.remove({id: 'minecraft:iron_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:aquite_boots"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"},
    {"tag": "forge:storage_blocks/iron"}],
    "mana": 10000, "output": {"item": "minecraft:iron_boots"}})
})