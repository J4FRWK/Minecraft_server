ServerEvents.recipes(event => {
//Crushed Skystone
//Certus Quartz
event.custom({"type": "exnihilosequentia:sieve", "rolls":[{"chance":0.25,"mesh":"iron"}],"input": {"item": "exnihiloae:crushed_sky_stone"}, "result": {"item":"ae2:certus_quartz_crystal"}})
//Charged Certus Quartz
event.custom({"type": "exnihilosequentia:sieve", "rolls":[{"chance":0.1,"mesh":"diamond"}],"input": {"item": "exnihiloae:crushed_sky_stone"}, "result": {"item":"ae2:charged_certus_quartz_crystal"}})
//Fluix
event.custom({"type": "exnihilosequentia:sieve", "rolls":[{"chance":0.02,"mesh":"emerald"}],"input": {"item": "exnihiloae:crushed_sky_stone"}, "result": {"item":"ae2:fluix_crystal"}})
})