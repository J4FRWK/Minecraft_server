// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {{
  //Helmet
  event.remove({id: 'blue_skies:aquite_helmet'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:horizonite_helmet"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"}],
    "mana": 10000, "output": {"item": "blue_skies:aquite_helmet"}})}
  //Chestplate
  event.remove({id: 'blue_skies:aquite_chestplate'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:horizonite_chestplate"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"}],
    "mana": 10000, "output": {"item": "blue_skies:aquite_chestplate"}})
  //Leggings
  event.remove({id: 'blue_skies:aquite_leggings'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:horizonite_leggings"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"}],
    "mana": 10000, "output": {"item": "blue_skies:aquite_leggings"}})
  //Boots
  event.remove({id: 'blue_skies:aquite_boots'})
  event.custom({"type": "botania:runic_altar", "ingredients": [
    {"item": "blue_skies:horizonite_boots"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"},
    {"tag": "blue_skies:storage_blocks/aquite"}],
    "mana": 10000, "output": {"item": "blue_skies:aquite_boots"}})
})