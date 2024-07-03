//Remove
ServerEvents.recipes(event => {
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:ender_pearls"}},"output":{"item":"thermal:ender_pearl_dust"}})
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"cyclic:eye_teleport"}},"output":{"item":"thermal:ender_pearl_dust", "count": 9}})
  event.custom({"type": "thermal:pulverizer","ingredient": {"item":"cyclic:eye_teleport"},"result":[{"item":"thermal:ender_pearl_dust","count":9}]})
})