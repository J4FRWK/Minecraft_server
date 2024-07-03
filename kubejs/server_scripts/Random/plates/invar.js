//Remove
ServerEvents.recipes(event => {

  event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:storage_blocks/invar"},
    "output": {"id": "thermal:invar_plate", "count": 9}, "cookTime": 200})

})