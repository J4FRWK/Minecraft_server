//Remove
ServerEvents.recipes(event => {
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:amethyst_shard"}},"output":{"item":"thermal_extra:amethyst_dust"}})
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:amethyst_block"}},"output":{"item":"thermal_extra:amethyst_dust", "count": 4}})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"minecraft:amethyst_block"},"result":[{"item":"thermal_extra:amethyst_dust","count":4}]})

})