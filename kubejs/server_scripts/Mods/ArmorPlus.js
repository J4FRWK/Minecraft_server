// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	//Wooden Rod
	event.remove({output: 'armorplus:wooden_rod'})
	event.shaped('2x armorplus:wooden_rod', ['111','111','111'], {
		1: 'minecraft:stick'})
	//Lava Crystal
	event.custom({
		"type": "exnihilosequentia:sieve",
		"rolls": [{"chance": 0.04, "mesh": "netherite"}],
		"input": {"item": "minecraft:crying_obsidian"},
		"result": {"item": "armorplus:lava_shard"}})
	//Frost Crystal
	event.custom({
		"type": "exnihilosequentia:sieve",
		"rolls": [{"chance": 0.04, "mesh": "netherite"}],
		"input": {"item": "minecraft:blue_ice"},
		"result": {"item": "armorplus:frost_shard"}})
//General Remove
	//Coal Tools
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_sword'})
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_battle_axe'})
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_pickaxe'})
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_bow'})
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_bow_alt'})
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_mace'})
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_arrow'})
	//Emerald
	event.remove({id: 'armorplus:crafting/shaped/emerald/emerald_arrow'})
	//Ender Dragon Tools
	event.remove({id: 'armorplus:smithing/ender_dragon_sword_base'})
	event.remove({id: 'armorplus:smithing/ender_dragon_battle_axe_base'})
	event.remove({id: 'armorplus:smithing/ender_dragon_pickaxe_base'})
	event.remove({id: 'armorplus:smithing/ender_dragon_bow_base'})
	event.remove({id: 'armorplus:smithing/ender_dragon_bow_base_alt'})
	event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_arrow'})
	event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_mace'})
	event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_sword_base'})
	event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_bow_base'})
	event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_bow_base_alt'})
	event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_pickaxe_base'})
	event.remove({id: 'armorplus:crafting/shaped/ender_dragon/ender_dragon_battle_axe_base'})
	//Guardian Tools
	event.remove({id: 'armorplus:smithing/guardian_sword_base'})
	event.remove({id: 'armorplus:smithing/guardian_battle_axe_base'})
	event.remove({id: 'armorplus:smithing/guardian_pickaxe_base'})
	event.remove({id: 'armorplus:smithing/guardian_bow_base'})
	event.remove({id: 'armorplus:smithing/guardian_bow_base_alt'})
	event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_arrow'})
	event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_mace'})
	event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_sword_base'})
	event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_bow_base'})
	event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_bow_base_alt'})
	event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_pickaxe_base'})
	event.remove({id: 'armorplus:crafting/shaped/guardian/guardian_battle_axe_base'})
	//Infused Lava
	event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_sword'})
	event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_battle_axe'})
	event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_pickaxe'})
	event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_bow'})
	event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_bow_alt'})
	event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_mace'})
	event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/infused_lava/infused_lava_arrow'})
	//Lapis Armor/Tools
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_helmet'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_helmet_alt'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_chestplate'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_leggings'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_boots'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_boots_alt'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_sword'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_battle_axe'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_pickaxe'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_bow'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_bow_alt'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_mace'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_arrow'})
	//Obsidian
	event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_sword'})
	event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_battle_axe'})
	event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_pickaxe'})
	event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_bow'})
	event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_bow_alt'})
	event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_mace'})
	event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/obsidian/obsidian_arrow'})
	event.remove({id: 'armorplus:crafting/shaped/storage/compressed_obsidian'})
	event.remove({output: 'armorplus:compressed_obsidian'})
	//Redstone Tools
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_sword'})
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_battle_axe'})
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_pickaxe'})
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_bow'})
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_bow_alt'})
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_mace'})
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_arrow'})
	//Slayer Tools
	event.remove({id: 'armorplus:smithing/slayer_sword_base'})
	event.remove({id: 'armorplus:smithing/slayer_battle_axe_base'})
	event.remove({id: 'armorplus:smithing/slayer_pickaxe_base'})
	event.remove({id: 'armorplus:smithing/slayer_bow_base'})
	event.remove({id: 'armorplus:smithing/slayer_bow_base_alt'})
	event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_mace'})
	event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_sword_base'})
	event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_bow_base'})
	event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_bow_base_alt'})
	event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_pickaxe_base'})
	event.remove({id: 'armorplus:crafting/shaped/slayer/slayer_battle_axe_base'})
	//Super Star Tools
	event.remove({id: 'armorplus:smithing/super_star_sword_base'})
	event.remove({id: 'armorplus:smithing/super_star_battle_axe_base'})
	event.remove({id: 'armorplus:smithing/super_star_pickaxe_base'})
	event.remove({id: 'armorplus:smithing/super_star_bow_base'})
	event.remove({id: 'armorplus:smithing/super_star_bow_base_alt'})
	event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_arrow'})
	event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_mace_alt'})
	event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_mace'})
	event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_sword_base'})
	event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_bow_base'})
	event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_bow_base_alt'})
	event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_pickaxe_base'})
	event.remove({id: 'armorplus:crafting/shaped/super_star/super_star_battle_axe_base'})
//Infused Lava Crystal
	event.custom({"type": "thermal:bottler", 
	"ingredients": [{"item": "armorplus:lava_crystal"},
	{"fluid": "allthemodium:molten_allthemodium", "amount": 1000}],
	"result": [{"item": "armorplus:infused_lava_crystal"}]})
//Infused Frost Crystal
	event.custom({"type": "thermal:bottler", 
	"ingredients": [{"item": "armorplus:frost_crystal"},
	{"fluid": "allthemodium:soul_lava", "amount": 1000}],
	"result": [{"item": "armorplus:infused_frost_crystal"}]})
})