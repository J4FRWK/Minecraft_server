//Remove
ServerEvents.recipes(event => {

  event.remove({id: 'allthecompatibility:ad_astra/compressing/steel'})

  event.custom({"conditions": [{"type": "forge:mod_loaded", "modid": "ad_astra"}],
    "type": "ad_astra:compressing", "input": {"tag": "forge:storage_blocks/steel"},
    "output": {"id": "thermal:steel_plate", "count": 9}, "cookTime": 200})

})