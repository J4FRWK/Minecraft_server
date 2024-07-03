ServerEvents.recipes(event => {
  for (let i = 1; i <= 9; i++) {
    let seed = `chicken_roost:chicken_food_tier_${i}`
    let crop = `chicken_roost:chickenfoodcrop_${i}3`
    event.custom({
      "type": "botanypots:crop",
      "seed": { "item": seed },
      "categories": ["farmland"],
      "growthTicks": 1200,
      "display": {"block": crop },
      "drops": [
        {
          "chance": 1.00,
          "output": { "item": seed }
        }
      ]
    })
  }
})