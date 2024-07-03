//Remove
ServerEvents.recipes(event => {
  event.shaped('alltheores:iridium_ingot', ['111','1 1','111'], {1: 'mysticalagriculture:iridium_essence'})
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/iridium"}},"output":{"item":"alltheores:iridium_dust"}})
  event.custom({"type": "thermal:pulverizer","ingredient": {"tag":"forge:ingots/iridium"},"result":[{"item":"alltheores:iridium_dust","count":1}]})

})