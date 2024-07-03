// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({"type": "extendedcrafting:shaped_table",
    "pattern": [
      "ABBCCCBBA",
      "DDDCCCDDD",
      "EEEFFFEEE",
      "EEEGHIEEE",
      "FFFJKJFFF",
      "EEEGHIEEE",
      "EEEFFFEEE",
      "DDDCCCDDD",
      "ABBCCCBBA"],
    "key": {"A": {"item": "armorplus:soul_slayer"},
            "B": {"item": "bhc:soul_heart_canister"},
            "C": {"item": "mekaevolution:infinite_control_circuit"},
            "D": {"item": "blue_skies:soul_fragment"},
            "E": {"item": "avaritia:infinity_nugget"},
            "F": {"item": "mysticalagradditions:insanium_essence"},
            "G": {"type": "forge:nbt", "item": "mysticalagriculture:passive_soulium_dagger", "count": 1, "nbt": "{Damage:0}"},
            "H": {"item": "allthemodium:allthemodium_sword"},
            "I": {"type": "forge:nbt", "item": "mysticalagriculture:hostile_soulium_dagger", "count": 1, "nbt": "{Damage:0}"},
            "J": {"item": "extendedcrafting:the_ultimate_ingot"},
            "K": {"item": "spirit:soul_cage"}},
    "result": {"item": "mysticalagriculture:creative_soulium_dagger"}})
})