// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'tools_complement:lead_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:golden_helmet"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"}],
    "mana": 10000, "output": {"item": "tools_complement:lead_helmet"}})}
  //Chestplate
  event.remove({id: 'tools_complement:lead_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:golden_chestplate"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"}],
    "mana": 10000, "output": {"item": "tools_complement:lead_chestplate"}})
  //Leggings
  event.remove({id: 'tools_complement:lead_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:golden_leggings"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"}],
    "mana": 10000, "output": {"item": "tools_complement:lead_leggings"}})
  //Boots
  event.remove({id: 'tools_complement:lead_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "armorplus:golden_boots"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"},
    {"tag": "forge:storage_blocks/lead"}],
    "mana": 10000, "output": {"item": "tools_complement:lead_boots"}})
})