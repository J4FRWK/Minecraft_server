
//craftingTable.addShapeless("lunar_sappling_to_oak", <item:minecraft:oak_sapling> * 1, [ <item:blue_skies:lunar_sapling>]);

//craftingTable.addShapeless("lunar_sappling_to_oak", <item:ars_nouveau:purple_archwood_sapling> * 4, [ <item:ars_nouveau:purple_archwood_log>]);

craftingTable.addShapeless("minium_shard", <item:miniumstone:minium_shard> * 4, [ <item:magic_vibe_decorations:crystallised_obsidian>, <item:minecraft:redstone> ]);

craftingTable.removeByName("ars_nouveau:archwood_chest");
craftingTable.addShaped("archwood_chest", <item:ars_nouveau:archwood_chest>, [
    [<item:ars_nouveau:archwood_planks>, <item:ars_nouveau:archwood_planks>, <item:ars_nouveau:archwood_planks>], 
    [<item:ars_nouveau:archwood_planks>, <item:minecraft:air>, <item:ars_nouveau:archwood_planks>],
    [<item:ars_nouveau:archwood_planks>, <item:ars_nouveau:archwood_planks>, <item:ars_nouveau:archwood_planks>]
    ]);


//craftingTable.addShapeless("nature_essence", <item:mysticalagriculture:nature_essence> * 4, [ <item:minecraft:dirt>, <item:minecraft:wheat_seeds> ]);
//craftingTable.addShapeless("wood_essence", <item:mysticalagriculture:wood_essence> * 4, [ <tag:items:minecraft:logs>, <item:minecraft:wheat_seeds> ]);



craftingTable.addShapeless("bauxite_ore", <item:janoeo_foundation:bauxite_ore>, [ <item:exdeorum:aluminum_ore_chunk>, <item:exdeorum:aluminum_ore_chunk>,<item:exdeorum:aluminum_ore_chunk>,<item:exdeorum:aluminum_ore_chunk> ]);

// Flint Mesh
craftingTable.addShaped("flint_mesh", <item:exdeorum:flint_mesh>, [
    [<item:minecraft:air>, <item:minecraft:flint>, <item:minecraft:air>], 
    [<item:minecraft:flint>, <item:exdeorum:string_mesh>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>, <item:minecraft:air>]
    ]);

// Iron Mesh
craftingTable.addShaped("iron_mesh", <item:exdeorum:iron_mesh>, [
    [<item:minecraft:air>, <item:minecraft:iron_ingot>, <item:minecraft:air>], 
    [<item:minecraft:iron_ingot>, <item:exdeorum:flint_mesh>, <item:minecraft:iron_ingot>],
    [<item:minecraft:air>, <item:minecraft:iron_ingot>, <item:minecraft:air>]
    ]);

// Gold Mesh
craftingTable.addShaped("golden_mesh", <item:exdeorum:golden_mesh>, [
    [<item:minecraft:air>, <item:minecraft:gold_ingot>, <item:minecraft:air>], 
    [<item:minecraft:gold_ingot>, <item:exdeorum:iron_mesh>, <item:minecraft:gold_ingot>],
    [<item:minecraft:air>, <item:minecraft:gold_ingot>, <item:minecraft:air>]
    ]);

// Diamond Mesh
craftingTable.addShaped("diamond_mesh", <item:exdeorum:diamond_mesh>, [
    [<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>], 
    [<item:minecraft:diamond>, <item:exdeorum:golden_mesh>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>]
    ]);


craftingTable.removeByName("janoeo_foundation:coal_nugget");

craftingTable.addShaped("sourcestone", <item:ars_nouveau:sourcestone> * 32, [
    [<item:minecraft:stone>, <item:minecraft:stone>, <item:minecraft:stone>], 
    [<item:minecraft:stone>, <item:minecraft:obsidian>, <item:minecraft:stone>],
    [<item:minecraft:stone>, <item:minecraft:stone>, <item:minecraft:stone>]
    ]);

craftingTable.addShapeless("nickel_ore", <item:janoeo_foundation:nickel_ore>, [ <item:exdeorum:nickel_ore_chunk>, <item:exdeorum:nickel_ore_chunk>,<item:exdeorum:nickel_ore_chunk>,<item:exdeorum:nickel_ore_chunk> ]);

craftingTable.addShaped("lapis_ore", <item:minecraft:lapis_ore>, [
    [<item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>], 
    [<item:minecraft:lapis_lazuli>, <item:minecraft:stone>, <item:minecraft:lapis_lazuli>],
    [<item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>]
    ]);

        craftingTable.addShaped("diamond_ore", <item:minecraft:diamond_ore>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
    [<item:minecraft:diamond>, <item:minecraft:stone>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>]
    ]);

            craftingTable.addShaped("emerald_ore", <item:minecraft:emerald_ore>, [
    [<item:minecraft:emerald>, <item:minecraft:emerald>, <item:minecraft:emerald>], 
    [<item:minecraft:emerald>, <item:minecraft:stone>, <item:minecraft:emerald>],
    [<item:minecraft:emerald>, <item:minecraft:emerald>, <item:minecraft:emerald>]
    ]);

            craftingTable.addShaped("redstone_ore", <item:minecraft:redstone_ore>, [
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>], 
    [<item:minecraft:redstone>, <item:minecraft:stone>, <item:minecraft:redstone>],
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>]
    ]);

            craftingTable.addShaped("coal_ore", <item:minecraft:coal_ore>, [
    [<item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>], 
    [<item:minecraft:coal>, <item:minecraft:stone>, <item:minecraft:coal>],
    [<item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>]
    ]);


            craftingTable.addShaped("inferium_ore", <item:mysticalagriculture:inferium_ore>, [
    [<item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>], 
    [<item:mysticalagriculture:inferium_essence>, <item:minecraft:stone>, <item:mysticalagriculture:inferium_essence>],
    [<item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>]
    ]);

                craftingTable.addShaped("prosperity_ore", <item:mysticalagriculture:prosperity_ore>, [
    [<item:mysticalagriculture:prosperity_shard>, <item:mysticalagriculture:prosperity_shard>, <item:mysticalagriculture:prosperity_shard>], 
    [<item:mysticalagriculture:prosperity_shard>, <item:minecraft:stone>, <item:mysticalagriculture:prosperity_shard>],
    [<item:mysticalagriculture:prosperity_shard>, <item:mysticalagriculture:prosperity_shard>, <item:mysticalagriculture:prosperity_shard>]
    ]);


    //craftingTable.addShapeless("inferium_essence", <item:mysticalagriculture:inferium_essence> * 8, [ <item:mysticalagriculture:nature_essence>, <item:minecraft:ghast_tear> ]);
    //craftingTable.addShapeless("prosperity_shard", <item:mysticalagriculture:prosperity_shard> * 8, [ <item:mysticalagriculture:nature_essence>, <item:minecraft:quartz> ]);


craftingTable.addShaped("iron_chicken_spawn_egg", <item:resourcechickens:iron_chicken_spawn_egg>, [
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>], 
    [<item:minecraft:iron_ingot>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>, <item:minecraft:iron_ingot>]
    ]);

    craftingTable.addShaped("copper_chicken_spawn_egg", <item:resourcechickens:copper_chicken_spawn_egg>, [
    [<item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>], 
    [<item:minecraft:copper_ingot>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:copper_ingot>],
    [<item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>, <item:minecraft:copper_ingot>]
    ]);

        craftingTable.addShaped("silver_chicken_spawn_egg", <item:resourcechickens:silver_chicken_spawn_egg>, [
    [<tag:items:forge:ingots/silver>, <tag:items:forge:ingots/silver>, <tag:items:forge:ingots/silver>], 
    [<tag:items:forge:ingots/silver>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:ingots/silver>],
    [<tag:items:forge:ingots/silver>, <tag:items:forge:ingots/silver>, <tag:items:forge:ingots/silver>]
    ]);

            craftingTable.addShaped("gold_chicken_spawn_egg", <item:resourcechickens:gold_chicken_spawn_egg>, [
    [<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>], 
    [<item:minecraft:gold_ingot>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:gold_ingot>],
    [<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>]
    ]);

                craftingTable.addShaped("zinc_chicken_spawn_egg", <item:resourcechickens:zinc_chicken_spawn_egg>, [
    [<tag:items:forge:ingots/zinc>, <tag:items:forge:ingots/zinc>, <tag:items:forge:ingots/zinc>], 
    [<tag:items:forge:ingots/zinc>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:ingots/zinc>],
    [<tag:items:forge:ingots/zinc>, <tag:items:forge:ingots/zinc>, <tag:items:forge:ingots/zinc>]
    ]);

                craftingTable.addShaped("lapis_chicken_spawn_egg", <item:resourcechickens:lapis_chicken_spawn_egg>, [
    [<item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>], 
    [<item:minecraft:lapis_lazuli>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:lapis_lazuli>],
    [<item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>, <item:minecraft:lapis_lazuli>]
    ]);

                    craftingTable.addShaped("redstone_chicken_spawn_egg", <item:resourcechickens:redstone_chicken_spawn_egg>, [
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>], 
    [<item:minecraft:redstone>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:redstone>],
    [<item:minecraft:redstone>, <item:minecraft:redstone>, <item:minecraft:redstone>]
    ]);

                    craftingTable.addShaped("diamond_chicken_spawn_egg", <item:resourcechickens:diamond_chicken_spawn_egg>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>], 
    [<item:minecraft:diamond>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:diamond>, <item:minecraft:diamond>]
    ]);

                        craftingTable.addShaped("emerald_chicken_spawn_egg", <item:resourcechickens:emerald_chicken_spawn_egg>, [
    [<item:minecraft:emerald>, <item:minecraft:emerald>, <item:minecraft:emerald>], 
    [<item:minecraft:emerald>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:emerald>],
    [<item:minecraft:emerald>, <item:minecraft:emerald>, <item:minecraft:emerald>]
    ]);

                    craftingTable.addShaped("coal_chicken_spawn_egg", <item:resourcechickens:coal_chicken_spawn_egg>, [
    [<item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>], 
    [<item:minecraft:coal>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:coal>],
    [<item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>]
    ]);


//Green Dy chicken_spawn_eg
craftingTable.addShaped("dye_green_chicken_spawn_egg", <item:resourcechickens:dye_green_chicken_spawn_egg>, [
    [<tag:items:forge:dyes/green>, <tag:items:forge:dyes/green>, <tag:items:forge:dyes/green>], 
    [<tag:items:forge:dyes/green>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:dyes/green>],
    [<tag:items:forge:dyes/green>, <tag:items:forge:dyes/green>, <tag:items:forge:dyes/green>]
    ]);


    //yellow Dy chicken_spawn_eg
craftingTable.addShaped("dye_yellow_chicken_spawn_egg", <item:resourcechickens:dye_yellow_chicken_spawn_egg>, [
    [<tag:items:forge:dyes/yellow>, <tag:items:forge:dyes/yellow>, <tag:items:forge:dyes/yellow>], 
    [<tag:items:forge:dyes/yellow>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:dyes/yellow>],
    [<tag:items:forge:dyes/yellow>, <tag:items:forge:dyes/yellow>, <tag:items:forge:dyes/yellow>]
    ]);

        //red Dy chicken_spawn_eg
craftingTable.addShaped("dye_red_chicken_spawn_egg", <item:resourcechickens:dye_red_chicken_spawn_egg>, [
    [<tag:items:forge:dyes/red>, <tag:items:forge:dyes/red>, <tag:items:forge:dyes/red>], 
    [<tag:items:forge:dyes/red>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:dyes/red>],
    [<tag:items:forge:dyes/red>, <tag:items:forge:dyes/red>, <tag:items:forge:dyes/red>]
    ]);

            //blue Dy chicken_spawn_eg
craftingTable.addShaped("dye_blue_chicken_spawn_egg", <item:resourcechickens:dye_blue_chicken_spawn_egg>, [
    [<tag:items:forge:dyes/blue>, <tag:items:forge:dyes/blue>, <tag:items:forge:dyes/blue>], 
    [<tag:items:forge:dyes/blue>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:dyes/blue>],
    [<tag:items:forge:dyes/blue>, <tag:items:forge:dyes/blue>, <tag:items:forge:dyes/blue>]
    ]);


                //white Dy chicken_spawn_eg
craftingTable.addShaped("dye_white_chicken_spawn_egg", <item:resourcechickens:dye_white_chicken_spawn_egg>, [
    [<tag:items:forge:dyes/white>, <tag:items:forge:dyes/white>, <tag:items:forge:dyes/white>], 
    [<tag:items:forge:dyes/white>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:dyes/white>],
    [<tag:items:forge:dyes/white>, <tag:items:forge:dyes/white>, <tag:items:forge:dyes/white>]
    ]);

                    //water Dy chicken_spawn_eg
craftingTable.addShaped("water_chicken_spawn_egg", <item:resourcechickens:water_chicken_spawn_egg>, [
    [<item:assortedtools:wood_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "minecraft:water"}}), <item:assortedtools:wood_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "minecraft:water"}}), <item:assortedtools:wood_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "minecraft:water"}})], 
    [<item:assortedtools:wood_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "minecraft:water"}}), <item:minecraft:chicken_spawn_egg>, <item:assortedtools:wood_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "minecraft:water"}})],
    [<item:assortedtools:wood_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "minecraft:water"}}), <item:assortedtools:wood_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "minecraft:water"}}), <item:assortedtools:wood_bucket>.withTag({Fluid: {Amount: 1000, FluidName: "minecraft:water"}})]
    ]);


                        //cobwebater Dy chicken_spawn_eg
craftingTable.addShaped("cobweb", <item:minecraft:cobweb>, [
    [<item:minecraft:string>, <item:minecraft:string>,<item:minecraft:string>], 
    [<item:minecraft:string>, <item:exdeorum:silk_worm>,<item:minecraft:string>],
    [<item:minecraft:string>, <item:minecraft:string>, <item:minecraft:string>]
    ]);

    craftingTable.addShapeless("tomato_seeds", <item:candlelight:tomato_seeds> * 1, [<item:farmersdelight:tomato_seeds>]);



//CHIKENS------------------------------------------------------------------------------------------------------------------------------------12/14/2023


//black Dy chicken_spawn_eg
craftingTable.addShaped("dye_black_chicken_spawn_egg", <item:resourcechickens:dye_black_chicken_spawn_egg>, [
    [<tag:items:forge:dyes/black>, <tag:items:forge:dyes/black>, <tag:items:forge:dyes/black>], 
    [<tag:items:forge:dyes/black>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:dyes/black>],
    [<tag:items:forge:dyes/black>, <tag:items:forge:dyes/black>, <tag:items:forge:dyes/black>]
    ]);

//brown Dy chicken_spawn_eg
craftingTable.addShaped("dye_brown_chicken_spawn_egg", <item:resourcechickens:dye_brown_chicken_spawn_egg>, [
    [<tag:items:forge:dyes/brown>, <tag:items:forge:dyes/brown>, <tag:items:forge:dyes/brown>], 
    [<tag:items:forge:dyes/brown>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:dyes/brown>],
    [<tag:items:forge:dyes/brown>, <tag:items:forge:dyes/brown>, <tag:items:forge:dyes/brown>]
    ]);

//dirt chicken
craftingTable.addShaped("dirt_chicken_spawn_egg", <item:resourcechickens:dirt_chicken_spawn_egg>, [
    [<item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>], 
    [<item:minecraft:dirt>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:dirt>],
    [<item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]
    ]);

//lava Dy chicken_spawn_eg
craftingTable.addShaped("lava_chicken_spawn_egg", <item:resourcechickens:lava_chicken_spawn_egg>, [
    [<item:exdeorum:porcelain_lava_bucket>, <item:exdeorum:porcelain_lava_bucket>, <item:exdeorum:porcelain_lava_bucket>], 
    [<item:exdeorum:porcelain_lava_bucket>, <item:minecraft:chicken_spawn_egg>, <item:exdeorum:porcelain_lava_bucket>],
    [<item:exdeorum:porcelain_lava_bucket>, <item:exdeorum:porcelain_lava_bucket>, <item:exdeorum:porcelain_lava_bucket>]
    ]);


//log chicken
craftingTable.addShaped("log_chicken_spawn_egg", <item:resourcechickens:log_chicken_spawn_egg>, [
    [<item:minecraft:oak_log>, <item:minecraft:oak_log>, <item:minecraft:oak_log>], 
    [<item:minecraft:oak_log>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:oak_log>],
    [<item:minecraft:oak_log>, <item:minecraft:oak_log>, <item:minecraft:oak_log>]
    ]);

//soul sand chicken
craftingTable.addShaped("soulsand_chicken_spawn_egg", <item:resourcechickens:soulsand_chicken_spawn_egg>, [
    [<item:minecraft:soul_sand>, <item:minecraft:soul_sand>, <item:minecraft:soul_sand>], 
    [<item:minecraft:soul_sand>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:soul_sand>],
    [<item:minecraft:soul_sand>, <item:minecraft:soul_sand>, <item:minecraft:soul_sand>]
    ]);


//flint chicken
craftingTable.addShaped("flint_chicken_spawn_egg", <item:resourcechickens:flint_chicken_spawn_egg>, [
    [<item:minecraft:flint>, <item:minecraft:flint>, <item:minecraft:flint>], 
    [<item:minecraft:flint>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:flint>],
    [<item:minecraft:flint>, <item:minecraft:flint>, <item:minecraft:flint>]
    ]);

//dust chicken
craftingTable.addShaped("dust_chicken_spawn_egg", <item:resourcechickens:dust_chicken_spawn_egg>, [
    [<item:exdeorum:dust>, <item:exdeorum:dust>, <item:exdeorum:dust>], 
    [<item:exdeorum:dust>, <item:minecraft:chicken_spawn_egg>, <item:exdeorum:dust>],
    [<item:exdeorum:dust>, <item:exdeorum:dust>, <item:exdeorum:dust>]
    ]);

//clay chicken
craftingTable.addShaped("clay_chicken_spawn_egg", <item:resourcechickens:clay_chicken_spawn_egg>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>], 
    [<item:minecraft:clay_ball>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ]);

//aluminum chicken
craftingTable.addShaped("aluminium_chicken_spawn_egg", <item:resourcechickens:aluminium_chicken_spawn_egg>, [
    [<tag:items:forge:ingots/aluminum>, <tag:items:forge:ingots/aluminum>, <tag:items:forge:ingots/aluminum>], 
    [<tag:items:forge:ingots/aluminum>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:ingots/aluminum>],
    [<tag:items:forge:ingots/aluminum>, <tag:items:forge:ingots/aluminum>, <tag:items:forge:ingots/aluminum>]
    ]);

//cactus chicken
craftingTable.addShaped("cacti_chicken_spawn_egg", <item:resourcechickens:cacti_chicken_spawn_egg>, [
    [<item:minecraft:cactus>, <item:minecraft:cactus>, <item:minecraft:cactus>], 
    [<item:minecraft:cactus>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:cactus>],
    [<item:minecraft:cactus>, <item:minecraft:cactus>, <item:minecraft:cactus>]
    ]);

//quartz chicken
craftingTable.addShaped("quartz_chicken_spawn_egg", <item:resourcechickens:quartz_chicken_spawn_egg>, [
    [<item:minecraft:quartz>, <item:minecraft:quartz>, <item:minecraft:quartz>], 
    [<item:minecraft:quartz>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:quartz>],
    [<item:minecraft:quartz>, <item:minecraft:quartz>, <item:minecraft:quartz>]
    ]);

//osmium chicken
craftingTable.addShaped("osmium_chicken_spawn_egg", <item:resourcechickens:osmium_chicken_spawn_egg>, [
    [<item:mekanism:ingot_osmium>, <item:mekanism:ingot_osmium>, <item:mekanism:ingot_osmium>], 
    [<item:mekanism:ingot_osmium>, <item:minecraft:chicken_spawn_egg>, <item:mekanism:ingot_osmium>],
    [<item:mekanism:ingot_osmium>, <item:mekanism:ingot_osmium>, <item:mekanism:ingot_osmium>]
    ]);

//silicon chicken
craftingTable.addShaped("silicon_chicken_spawn_egg", <item:resourcechickens:silicon_chicken_spawn_egg>, [
    [<item:refinedstorage:silicon>, <item:refinedstorage:silicon>, <item:refinedstorage:silicon>], 
    [<item:refinedstorage:silicon>, <item:minecraft:chicken_spawn_egg>, <item:refinedstorage:silicon>],
    [<item:refinedstorage:silicon>, <item:refinedstorage:silicon>, <item:refinedstorage:silicon>]
    ]);

//sand chicken
craftingTable.addShaped("sand_chicken_spawn_egg", <item:resourcechickens:sand_chicken_spawn_egg>, [
    [<item:minecraft:sand>, <item:minecraft:sand>, <item:minecraft:sand>], 
    [<item:minecraft:sand>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:sand>],
    [<item:minecraft:sand>, <item:minecraft:sand>, <item:minecraft:sand>]
    ]);

//inferium chicken
craftingTable.addShaped("inferium_chicken_spawn_egg", <item:resourcechickens:inferium_chicken_spawn_egg>, [
    [<item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>], 
    [<item:mysticalagriculture:inferium_essence>, <item:minecraft:chicken_spawn_egg>, <item:mysticalagriculture:inferium_essence>],
    [<item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>, <item:mysticalagriculture:inferium_essence>]
    ]);

//Manasteel chicken
craftingTable.addShaped("manasteel_chicken_spawn_egg", <item:resourcechickens:manasteel_chicken_spawn_egg>, [
    [<item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>], 
    [<item:botania:manasteel_ingot>, <item:minecraft:chicken_spawn_egg>, <item:botania:manasteel_ingot>],
    [<item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>]
    ]);

    //terrasteel chicken
craftingTable.addShaped("terrasteel_chicken_spawn_egg", <item:resourcechickens:terrasteel_chicken_spawn_egg>, [
    [<item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>], 
    [<item:botania:terrasteel_ingot>, <item:minecraft:chicken_spawn_egg>, <item:botania:terrasteel_ingot>],
    [<item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>]
    ]);

    //netherite chicken
craftingTable.addShaped("netherite_chicken_spawn_egg", <item:resourcechickens:netherite_chicken_spawn_egg>, [
    [<item:minecraft:netherite_scrap>, <item:minecraft:netherite_scrap>, <item:minecraft:netherite_scrap>], 
    [<item:minecraft:netherite_scrap>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:netherite_scrap>],
    [<item:minecraft:netherite_scrap>, <item:minecraft:netherite_scrap>, <item:minecraft:netherite_scrap>]
    ]);

    //quartz enriched chicken
craftingTable.addShaped("quartz_enriched_iron_chicken_spawn_egg", <item:resourcechickens:quartz_enriched_iron_chicken_spawn_egg>, [
    [<item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:quartz_enriched_iron>], 
    [<item:refinedstorage:quartz_enriched_iron>, <item:minecraft:chicken_spawn_egg>, <item:refinedstorage:quartz_enriched_iron>],
    [<item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:quartz_enriched_iron>, <item:refinedstorage:quartz_enriched_iron>]
    ]);

    //nickel chicken
craftingTable.addShaped("nickel_chicken_spawn_egg", <item:resourcechickens:nickel_chicken_spawn_egg>, [
    [<tag:items:forge:ingots/nickel>, <tag:items:forge:ingots/nickel>, <tag:items:forge:ingots/nickel>], 
    [<tag:items:forge:ingots/nickel>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:ingots/nickel>],
    [<tag:items:forge:ingots/nickel>, <tag:items:forge:ingots/nickel>, <tag:items:forge:ingots/nickel>]
    ]);

    //tin chicken
craftingTable.addShaped("tin_chicken_spawn_egg", <item:resourcechickens:tin_chicken_spawn_egg>, [
    [<tag:items:forge:ingots/tin>, <tag:items:forge:ingots/tin>, <tag:items:forge:ingots/tin>], 
    [<tag:items:forge:ingots/tin>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:ingots/tin>],
    [<tag:items:forge:ingots/tin>, <tag:items:forge:ingots/tin>, <tag:items:forge:ingots/tin>]
    ]);

    //uranium chicken
craftingTable.addShaped("uranium_chicken_spawn_egg", <item:resourcechickens:uranium_chicken_spawn_egg>, [
    [<item:mekanism:ingot_uranium>, <item:mekanism:ingot_uranium>, <item:mekanism:ingot_uranium>], 
    [<item:mekanism:ingot_uranium>, <item:minecraft:chicken_spawn_egg>, <item:mekanism:ingot_uranium>],
    [<item:mekanism:ingot_uranium>, <item:mekanism:ingot_uranium>, <item:mekanism:ingot_uranium>]
    ]);

    //Elementum chicken
craftingTable.addShaped("elementium_chicken_spawn_egg", <item:resourcechickens:elementium_chicken_spawn_egg>, [
    [<item:botania:elementium_ingot>, <item:botania:elementium_ingot>, <item:botania:elementium_ingot>], 
    [<item:botania:elementium_ingot>, <item:minecraft:chicken_spawn_egg>, <item:botania:elementium_ingot>],
    [<item:botania:elementium_ingot>, <item:botania:elementium_ingot>, <item:botania:elementium_ingot>]
    ]);

    //Bone chicken
craftingTable.addShaped("bone_chicken_spawn_egg", <item:resourcechickens:bone_chicken_spawn_egg>, [
    [<item:minecraft:bone_meal>, <item:minecraft:bone_meal>, <item:minecraft:bone_meal>], 
    [<item:minecraft:bone_meal>, <item:minecraft:chicken_spawn_egg>, <item:minecraft:bone_meal>],
    [<item:minecraft:bone_meal>, <item:minecraft:bone_meal>, <item:minecraft:bone_meal>]
    ]);

    //Lead chicken
craftingTable.addShaped("lead_chicken_spawn_egg", <item:resourcechickens:lead_chicken_spawn_egg>, [
    [<tag:items:forge:ingots/lead>, <tag:items:forge:ingots/lead>, <tag:items:forge:ingots/lead>], 
    [<tag:items:forge:ingots/lead>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:ingots/lead>],
    [<tag:items:forge:ingots/lead>, <tag:items:forge:ingots/lead>, <tag:items:forge:ingots/lead>]
    ]);


craftingTable.addShaped("wshears_charred", <item:woodenshears:wshears_charred>, [
    [<tag:items:forge:rods/wooden>, <tag:items:minecraft:planks>, <item:minecraft:air>], 
    [<tag:items:minecraft:planks>, <tag:items:forge:rods/wooden>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
    ]);


craftingTable.addShapeless("ancient_iron_ingot", <item:epicempires:ancient_iron_ingot>, [<item:minecraft:iron_ingot>, <item:minecraft:ender_pearl>, <tag:items:forge:ingots/steel>]);
craftingTable.addShapeless("ancient_gold_ingot", <item:epicempires:ancient_gold_ingot>, [ <item:minecraft:gold_ingot>, <item:minecraft:ender_pearl>, <tag:items:forge:ingots/steel>]);

craftingTable.addShapeless("zombie_heart", <item:reliquary:zombie_heart>, [ <item:minecraft:ghast_tear>, <item:minecraft:rotten_flesh>]);
craftingTable.addShapeless("squid_beak", <item:reliquary:squid_beak>, [ <item:minecraft:ghast_tear>, <item:minecraft:ink_sac>]);
craftingTable.addShapeless("rib_bone", <item:reliquary:rib_bone>, [ <item:minecraft:ghast_tear>, <item:minecraft:bone>]);
craftingTable.addShapeless("catalyzing_gland", <item:reliquary:catalyzing_gland>, [ <item:minecraft:ghast_tear>, <item:minecraft:gunpowder>]);
craftingTable.addShapeless("slime_pearl", <item:reliquary:slime_pearl>, [ <item:minecraft:ghast_tear>, <item:minecraft:slime_ball>]);
craftingTable.addShapeless("bat_wing", <item:reliquary:bat_wing>, [ <item:minecraft:ghast_tear>, <item:inventorypets:nugget_coal>]);
craftingTable.addShapeless("withered_rib", <item:reliquary:withered_rib>, [ <item:minecraft:ghast_tear>, <item:enderio:withering_powder>]);
craftingTable.addShapeless("molten_core", <item:reliquary:molten_core>, [ <item:minecraft:ghast_tear>, <item:minecraft:magma_cream>]);
craftingTable.addShapeless("eye_of_the_storm", <item:reliquary:eye_of_the_storm>, [ <item:minecraft:ghast_tear>, <item:minecraft:fire_charge>]);
craftingTable.addShapeless("frozen_core", <item:reliquary:frozen_core>, [ <item:minecraft:ghast_tear>, <item:minecraft:snowball>]);
craftingTable.addShapeless("guardian_spike", <item:reliquary:guardian_spike>, [ <item:minecraft:ghast_tear>, <item:minecraft:prismarine_shard>]);
craftingTable.addShapeless("nebulous_heart", <item:reliquary:nebulous_heart>, [ <item:minecraft:ghast_tear>, <item:minecraft:ender_pearl>]);


craftingTable.addShapeless("mor", <item:wizards_reborn:mor>, [<item:minecraft:brown_mushroom>, <item:minecraft:ink_sac>]);
craftingTable.addShapeless("elder_mor", <item:wizards_reborn:elder_mor>, [ <item:minecraft:red_mushroom>, <item:minecraft:ink_sac>]);

craftingTable.removeByName("angelring:diamond_ring");
craftingTable.addShaped("diamond_ring", <item:angelring:diamond_ring>, [
    [<item:minecraft:ghast_tear>, <item:minecraft:ghast_tear>, <item:minecraft:ghast_tear>], 
    [<item:minecraft:ghast_tear>, <item:forbidden_arcanus:dark_nether_star>, <item:minecraft:ghast_tear>],
    [<item:minecraft:ghast_tear>, <item:minecraft:ghast_tear>, <item:minecraft:ghast_tear>]
    ]);

craftingTable.addShaped("elytra", <item:minecraft:elytra>, [
    [<item:minecraft:ghast_tear>, <item:minecraft:chorus_fruit>, <item:minecraft:ghast_tear>], 
    [<item:minecraft:chorus_fruit>, <item:angelring:diamond_ring>, <item:minecraft:chorus_fruit>],
    [<item:minecraft:ghast_tear>, <item:minecraft:chorus_fruit>, <item:minecraft:ghast_tear>]
    ]);

craftingTable.addShaped("runic_stone", <item:forbidden_arcanus:runic_stone>, [
    [<item:forbidden_arcanus:rune>, <item:forbidden_arcanus:rune>, <item:forbidden_arcanus:rune>], 
    [<item:forbidden_arcanus:rune>, <item:minecraft:stone>, <item:forbidden_arcanus:rune>],
    [<item:forbidden_arcanus:rune>, <item:forbidden_arcanus:rune>, <item:forbidden_arcanus:rune>]
    ]);

craftingTable.addShaped("jade_ore", <item:epicsamurai:jade_ore>, [
    [<item:epicsamurai:jade>, <item:epicsamurai:jade>, <item:epicsamurai:jade>], 
    [<item:epicsamurai:jade>, <item:minecraft:stone>, <item:epicsamurai:jade>],
    [<item:epicsamurai:jade>, <item:epicsamurai:jade>, <item:epicsamurai:jade>]
    ]);


craftingTable.addShaped("arcane_crystal_ore", <item:forbidden_arcanus:arcane_crystal_ore>, [
    [<item:forbidden_arcanus:arcane_crystal>, <item:forbidden_arcanus:arcane_crystal>, <item:forbidden_arcanus:arcane_crystal>], 
    [<item:forbidden_arcanus:arcane_crystal>, <item:minecraft:stone>, <item:forbidden_arcanus:arcane_crystal>],
    [<item:forbidden_arcanus:arcane_crystal>, <item:forbidden_arcanus:arcane_crystal>, <item:forbidden_arcanus:arcane_crystal>]
    ]);

craftingTable.addShaped("arcanum_ore", <item:wizards_reborn:arcanum_ore>, [
    [<item:wizards_reborn:arcanum>, <item:wizards_reborn:arcanum>, <item:wizards_reborn:arcanum>], 
    [<item:wizards_reborn:arcanum>, <item:minecraft:stone>, <item:wizards_reborn:arcanum>],
    [<item:wizards_reborn:arcanum>, <item:wizards_reborn:arcanum>, <item:wizards_reborn:arcanum>]
    ]);

craftingTable.addShaped("apatite_ore", <item:thermal:apatite_ore>, [
    [<item:thermal:apatite>, <item:thermal:apatite>, <item:thermal:apatite>], 
    [<item:thermal:apatite>, <item:minecraft:stone>, <item:thermal:apatite>],
    [<item:thermal:apatite>, <item:thermal:apatite>, <item:thermal:apatite>]
    ]);

craftingTable.addShaped("cinnabar_ore", <item:thermal:cinnabar_ore>, [
    [<item:thermal:cinnabar>, <item:thermal:cinnabar>, <item:thermal:cinnabar>], 
    [<item:thermal:cinnabar>, <item:minecraft:stone>, <item:thermal:cinnabar>],
    [<item:thermal:cinnabar>, <item:thermal:cinnabar>, <item:thermal:cinnabar>]
    ]);

craftingTable.addShaped("ruby_ore", <item:thermal:ruby_ore>, [
    [<item:thermal:ruby>, <item:thermal:ruby>, <item:thermal:ruby>], 
    [<item:thermal:ruby>, <item:minecraft:stone>, <item:thermal:ruby>],
    [<item:thermal:ruby>, <item:thermal:ruby>, <item:thermal:ruby>]
    ]);

craftingTable.addShaped("sapphire_ore", <item:thermal:sapphire_ore>, [
    [<item:thermal:sapphire>, <item:thermal:sapphire>, <item:thermal:sapphire>], 
    [<item:thermal:sapphire>, <item:minecraft:stone>, <item:thermal:sapphire>],
    [<item:thermal:sapphire>, <item:thermal:sapphire>, <item:thermal:sapphire>]
    ]);

craftingTable.addShaped("aquamarine_ore", <item:epicsamurai:aquamarine_ore>, [
    [<item:epicsamurai:aquamarine>, <item:epicsamurai:aquamarine>, <item:epicsamurai:aquamarine>], 
    [<item:epicsamurai:aquamarine>, <item:minecraft:stone>, <item:epicsamurai:aquamarine>],
    [<item:epicsamurai:aquamarine>, <item:epicsamurai:aquamarine>, <item:epicsamurai:aquamarine>]
    ]);

craftingTable.addShaped("block_cosmic_ore", <item:cosmosportals:block_cosmic_ore>, [
    [<item:cosmosportals:item_cosmic_material>, <item:cosmosportals:item_cosmic_material>, <item:cosmosportals:item_cosmic_material>], 
    [<item:cosmosportals:item_cosmic_material>, <item:minecraft:stone>, <item:cosmosportals:item_cosmic_material>],
    [<item:cosmosportals:item_cosmic_material>, <item:cosmosportals:item_cosmic_material>, <item:cosmosportals:item_cosmic_material>]
    ]);

craftingTable.addShaped("onyx_ore", <item:epicsamurai:onyx_ore>, [
    [<item:epicsamurai:onyx>, <item:epicsamurai:onyx>, <item:epicsamurai:onyx>], 
    [<item:epicsamurai:onyx>, <item:minecraft:stone>, <item:epicsamurai:onyx>],
    [<item:epicsamurai:onyx>, <item:epicsamurai:onyx>, <item:epicsamurai:onyx>]
    ]);

craftingTable.addShaped("elytra_booster", <item:relics:elytra_booster>, [
    [<item:minecraft:iron_nugget>, <item:minecraft:chorus_fruit>, <item:minecraft:iron_nugget>], 
    [<item:minecraft:chorus_fruit>, <item:angelring:diamond_ring>, <item:minecraft:chorus_fruit>],
    [<item:minecraft:iron_nugget>, <item:minecraft:chorus_fruit>, <item:minecraft:iron_nugget>]
    ]);


craftingTable.addShapeless("warden_tendril", <item:apotheosis:warden_tendril> * 2, [ <item:minecraft:echo_shard>, <item:minecraft:black_dye>,<item:exdeorum:sculk_core>,<item:forbidden_arcanus:dark_nether_star> ]);


// Wheat seeds from nature wood_essence
craftingTable.addShapeless("wheat_seeds", <item:minecraft:wheat_seeds> * 16, [ <item:mysticalagriculture:nature_essence>, <item:mysticalagriculture:nature_essence> ]);

// primitive alloy
craftingTable.removeByName("enderio:primitive_alloy_smelter");
craftingTable.addShaped("primitive_alloy_smelter", <item:enderio:primitive_alloy_smelter>, [
    [<item:minecraft:furnace>, <item:minecraft:furnace>, <item:minecraft:furnace>], 
    [<item:minecraft:stone>, <item:enderio:grains_of_infinity>, <item:minecraft:stone>],
    [<item:minecraft:stone>, <item:minecraft:stone>, <item:minecraft:stone>]
    ]);


// siganlum chicken
craftingTable.addShaped("signalum_chicken_spawn_egg", <item:resourcechickens:signalum_chicken_spawn_egg>, [
    [<tag:items:forge:ingots/signalum>, <tag:items:forge:ingots/signalum>, <tag:items:forge:ingots/signalum>], 
    [<tag:items:forge:ingots/signalum>, <item:minecraft:chicken_spawn_egg>, <tag:items:forge:ingots/signalum>],
    [<tag:items:forge:ingots/signalum>, <tag:items:forge:ingots/signalum>, <tag:items:forge:ingots/signalum>]
    ]);


// mechanical sieve
craftingTable.removeByName("exdeorum:mechanical_sieve");
craftingTable.addShaped("mechanical_sieve", <item:exdeorum:mechanical_sieve>, [
    [<item:betterfurnacesreforged:iron_conductor_block>, <item:minecraft:glass_pane>, <item:betterfurnacesreforged:iron_conductor_block>], 
    [<item:betterfurnacesreforged:iron_conductor_block>, <item:assortedstorage:hopper_diamond>, <item:betterfurnacesreforged:iron_conductor_block>],
    [<item:minecraft:iron_bars>, <item:assortedstorage:chest_diamond>, <item:minecraft:iron_bars>]
    ]);

    // ancient framgments

craftingTable.addShaped("ancient_fragment", <item:solarcraft:ancient_fragment>, [
    [<item:solarcraft:solar_rune_urba>, <item:solarcraft:solar_rune_ardo>, <item:solarcraft:solar_rune_zeta>], 
    [<item:solarcraft:solar_rune_kelda>, <item:bloodmagic:ironfragment>, <item:solarcraft:solar_rune_tera>],
    [<item:solarcraft:solar_rune_fira>, <item:solarcraft:solar_rune_ultima>, <item:solarcraft:solar_rune_giro>]
    ]);
