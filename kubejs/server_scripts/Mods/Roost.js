// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
 event.remove({id: 'chicken_roost:craftingtable/unobtainiumchicken'})
 event.shaped('chicken_roost:c_unobtainium', ['111','121','111'], {1: '#forge:storage_blocks/unobtainium', 2: 'chicken_roost:chicken_essence_tier_8'})
})