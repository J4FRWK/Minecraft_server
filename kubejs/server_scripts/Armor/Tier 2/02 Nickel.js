// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'tools_complement:nickel_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "tools_complement:lead_helmet"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"}],
    "mana": 10000, "output": {"item": "tools_complement:nickel_helmet"}})}
  //Chestplate
  event.remove({id: 'tools_complement:nickel_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "tools_complement:lead_chestplate"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"}],
    "mana": 10000, "output": {"item": "tools_complement:nickel_chestplate"}})
  //Leggings
  event.remove({id: 'tools_complement:nickel_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "tools_complement:lead_leggings"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"}],
    "mana": 10000, "output": {"item": "tools_complement:nickel_leggings"}})
  //Boots
  event.remove({id: 'tools_complement:nickel_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "tools_complement:lead_boots"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"},
    {"tag": "forge:storage_blocks/nickel"}],
    "mana": 10000, "output": {"item": "tools_complement:nickel_boots"}})
})