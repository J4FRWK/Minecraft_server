ServerEvents.recipes(event => {
//Coarse Dirt
//Dirt
event.custom({"type": "exnihilosequentia:sieve", "rolls":[{"chance":1,"mesh":"string"},{"chance":0.4,"mesh":"string"}],"input": {"item": "minecraft:coarse_dirt"}, "result": {"item": "minecraft:dirt"}})
//Gravel
event.custom({"type": "exnihilosequentia:sieve", "rolls":[{"chance":0.4,"mesh":"string"}],"input": {"item": "minecraft:coarse_dirt"}, "result": {"item": "minecraft:gravel"}})
})