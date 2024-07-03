// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
//Neutronium Solar Panel
  event.custom({"type": "extendedcrafting:shaped_table", "pattern": ["  AAAAA  ",
	  " ABBCBBA ",
	  "AB DED BA",
	  "ABFEAEFBA",
	  "ACEAGAECA",
	  "ABFEAEFBA",
	  "AB DED BA",
	  " ABBCBBA ",
	  "  AAAAA  "],
	"key": {
	  "A": {"item": "avaritia:neutron_ingot"},
	  "B": {"item": "extendedcrafting:the_ultimate_ingot"},
	  "C": {"item": "solarflux:sp_8"},
	  "D": {"item": "solarpanels:photonic_solar_panel"},
	  "E": {"item": "avaritia:neutron_nugget"},
	  "F": {"item": "solargeneration:solar_panel_ultimate"},
	  "G": {"item": "avaritia:infinity_catalyst"}},
	"result": {"item": "solarflux:sp_avaritia.neutronium", "count": 2}})

//Solar Panel of Infinity
  event.custom({"type": "extendedcrafting:shaped_table","pattern": [ "   ABA   ",
	  "  CADAC  ",
	  " C AEA C ",
	  "AAAEFEAAA",
	  "BDEFGFEDB",
	  "AAAEFEAAA",
	  " C AEA C ",
	  "  CADAC  ",
	  "   ABA   "],
	"key": {
	  "A": {"item": "extendedcrafting:the_ultimate_ingot"},
	  "B": {"item": "avaritia:infinity"},
	  "C": {"item": "mysticalagradditions:insanium_ingot"},
	  "D": {"item": "avaritia:neutron"},
	  "E": {"item": "avaritia:neutron_ingot"},
	  "F": {"item": "avaritia:infinity_ingot"},
	  "G": {"item": "solarflux:sp_avaritia.neutronium"}},
	"result": {"item": "solarflux:sp_avaritia.infinity"}})

})