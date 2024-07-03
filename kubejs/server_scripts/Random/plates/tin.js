//Remove
ServerEvents.recipes(event => {

  event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:storage_blocks/tin"},
    "output": {"id": "thermal:tin_plate", "count": 9}, "cookTime": 200})

})