//Remove
ServerEvents.recipes(event => {

  event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:storage_blocks/diamond"},
    "output": {"id": "alltheores:diamond_plate", "count": 9}, "cookTime": 200})


})