//Remove
ServerEvents.recipes(event => {

  event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:storage_blocks/iridium"},
    "output": {"id": "alltheores:iridium_plate", "count": 9}, "cookTime": 200})

    event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:ingots/iridium"},
    "output": {"id": "alltheores:iridium_plate", "count": 1}, "cookTime": 200})


})