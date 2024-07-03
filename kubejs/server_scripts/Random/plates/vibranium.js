//Remove
ServerEvents.recipes(event => {

  event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:ingots/vibranium"},
    "output": {"id": "allthemodium:vibranium_plate", "count": 1}, "cookTime": 200})

  event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:storage_blocks/vibranium"},
    "output": {"id": "allthemodium:vibranium_plate", "count": 9}, "cookTime": 200})


})