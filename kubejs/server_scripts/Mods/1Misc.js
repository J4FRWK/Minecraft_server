// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	//Cloth (Material Elements)
	event.remove({id: 'material_elements:cloth/cloth_from_strings'})
	event.shaped('4x material_elements:cloth', ['111','1 1', '111'], {1: '#forge:string'})

	//Tesseract
	event.remove({id: 'tesseract:tesseract'})
	event.shaped('tesseract:tesseract', ['121','232', '121'], {    
		1: '#forge:storage_blocks/calorite', 2: '#forge:storage_blocks/ender_pearl', 3: 'mekanism:quantum_entangloporter'})

	//Entangled Block
	event.remove({id: 'entangled:block'})
	event.shaped('entangled:block', ['121','232', '121'], {    
		1: '#forge:storage_blocks/calorite', 2: '#forge:ingots/forgotten_metal', 3: 'mekanism:quantum_entangloporter'})

//Fix for Ultimate Ingot 
	event.custom({
		"type": "extendedcrafting:shapeless_table",
		"ingredients": [
		  {
			"item": "minecraft:copper_ingot"
		  },
		  {
			"item": "minecraft:iron_ingot"
		  },
		  {
			"item": "minecraft:gold_ingot"
		  },
		  {
			"item": "minecraft:netherite_ingot"
		  },
		  {
			"item": "ad_astra:calorite_ingot"
		  },
		  {
			"item": "ad_astra:ostrum_ingot"
		  },
		  {
			"item": "ad_astra:desh_ingot"
		  },
		  {
			"item": "alltheores:brass_ingot"
		  },
		  {
			"item": "alltheores:iridium_ingot"
		  },
		  {
			"item": "alltheores:platinum_ingot"
		  },
		  {
			"item": "alltheores:zinc_ingot"
		  },
		  {
			"item": "allthemodium:allthemodium_ingot"
		  },
		  {
			"item": "allthemodium:vibranium_ingot"
		  },
		  {
			"item": "allthemodium:unobtainium_ingot"
		  },
		  {
			"item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
		  },
		  {
			"item": "allthemodium:unobtainium_vibranium_alloy_ingot"
		  },
		  {
			"item": "allthemodium:vibranium_allthemodium_alloy_ingot"
		  },
		  {
			"item": "armorplus:en_iron"
		  },
		  {
			"item": "armorplus:en_gold"
		  },
		  {
			"item": "armorplus:en_netherite"
		  },
		  {
			"item": "avaritia:crystal_matrix_ingot"
		  },
		  {
			"item": "avaritia:neutron_ingot"
		  },
		  {
			"item": "avaritia:infinity_ingot"
		  },
		  {
			"item": "blue_skies:falsite_ingot"
		  },
		  {
			"item": "blue_skies:ventium_ingot"
		  },
		  {
			"item": "blue_skies:horizonite_ingot"
		  },
		  {
			"item": "botania:manasteel_ingot"
		  },
		  {
			"item": "botania:terrasteel_ingot"
		  },
		  {
			"item": "botania:elementium_ingot"
		  },
		  {
			"item": "botania:gaia_ingot"
		  },
		  {
			"item": "botanicadds:gaiasteel_ingot"
		  },
		  {
			"item": "extendedcrafting:black_iron_ingot"
		  },
		  {
			"item": "extendedcrafting:redstone_ingot"
		  },
		  {
			"item": "extendedcrafting:enhanced_redstone_ingot"
		  },
		  {
			"item": "extendedcrafting:ender_ingot"
		  },
		  {
			"item": "extendedcrafting:enhanced_ender_ingot"
		  },
		  {
			"item": "extendedcrafting:crystaltine_ingot"
		  },
		  {
			"item": "immersiveengineering:ingot_hop_graphite"
		  },
		  {
			"item": "immersiveengineering:ingot_aluminum"
		  },
		  {
			"item": "immersiveengineering:ingot_uranium"
		  },
		  {
			"item": "industrialforegoing:pink_slime_ingot"
		  },
		  {
			"item": "mekanism:ingot_refined_obsidian"
		  },
		  {
			"item": "mekanism:ingot_refined_glowstone"
		  },
		  {
			"item": "mekanism:ingot_osmium"
		  },
		  {
			"item": "mysticalagriculture:soulium_ingot"
		  },
		  {
			"item": "mysticalagriculture:prosperity_ingot"
		  },
		  {
			"item": "mysticalagriculture:inferium_ingot"
		  },
		  {
			"item": "mysticalagriculture:prudentium_ingot"
		  },
		  {
			"item": "mysticalagriculture:tertium_ingot"
		  },
		  {
			"item": "mysticalagriculture:imperium_ingot"
		  },
		  {
			"item": "mysticalagriculture:supremium_ingot"
		  },
		  {
			"item": "mysticalagriculture:awakened_supremium_ingot"
		  },
		  {
			"item": "mysticalagradditions:insanium_ingot"
		  },
		  {
			"item": "powah:steel_energized"
		  },
		  {
			"item": "pneumaticcraft:ingot_iron_compressed"
		  },
		  {
			"item": "spirit:soul_steel_ingot"
		  },
		  {
			"item": "twilightforest:knightmetal_ingot"
		  },
		  {
			"item": "twilightforest:ironwood_ingot"
		  },
		  {
			"item": "twilightforest:fiery_ingot"
		  },
		  {
			"item": "undergarden:forgotten_ingot"
		  },
		  {
			"item": "undergarden:froststeel_ingot"
		  },
		  {
			"item": "undergarden:cloggrum_ingot"
		  },
		  {
			"item": "thermal:steel_ingot"
		  },
		  {
			"item": "thermal:signalum_ingot"
		  },
		  {
			"item": "thermal:lumium_ingot"
		  },
		  {
			"item": "thermal:enderium_ingot"
		  },
		  {
			"item": "thermal:tin_ingot"
		  },
		  {
			"item": "thermal:lead_ingot"
		  },
		  {
			"item": "thermal:silver_ingot"
		  },
		  {
			"item": "thermal:nickel_ingot"
		  },
		  {
			"item": "thermal:bronze_ingot"
		  },
		  {
			"item": "thermal:electrum_ingot"
		  },
		  {
			"item": "thermal:invar_ingot"
		  },
		  {
			"item": "thermal:constantan_ingot"
		  },
		  {
			"item": "thermal_extra:soul_infused_ingot"
		  },
		  {
			"item": "thermal_extra:shellite_ingot"
		  },
		  {
			"item": "thermal_extra:twinite_ingot"
		  },
		  {
			"item": "thermal_extra:dragonsteel_ingot"
		  },
		  {
			"item": "thermal:rose_gold_ingot"
		  },
		  {
			"item": "mythicbotany:alfsteel_ingot"
		  },
		  {
			"item": "redstone_arsenal:flux_ingot"
		  }
		],
		"result": {
		  "item": "extendedcrafting:the_ultimate_ingot"
		}
	  })
})