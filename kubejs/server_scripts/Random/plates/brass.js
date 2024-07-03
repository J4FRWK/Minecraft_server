//Remove
ServerEvents.recipes(event => {

  event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:storage_blocks/brass"},
    "output": {"id": "alltheores:brass_plate", "count": 9}, "cookTime": 200})

})