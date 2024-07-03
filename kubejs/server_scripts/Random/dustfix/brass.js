//Remove
ServerEvents.recipes(event => {
  event.shaped('6x alltheores:brass_ingot', ['111','1 1','111'], {1: 'mysticalagriculture:brass_essence'})
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ingots/brass"}},"output":{"item":"alltheores:brass_dust"}})
  event.custom({"type": "thermal:pulverizer","ingredient": {"tag":"forge:ingots/brass"},"result":[{"item":"alltheores:brass_dust","count":1}]})

})