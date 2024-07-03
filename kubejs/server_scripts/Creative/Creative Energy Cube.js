// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

//Remove
ServerEvents.recipes(event => {
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AABCDCBAA",
      "AEEEEEEEA",
      "BEFFFFFEB",
      "GEHIJIHEG",
      "DKILMLIKD",
      "GEHIJIHEG",
      "BEFFFFFEB",
      "AEEEEEEEA",
      "AABCDCBAA"
    ],
    "key": {
      "A": {
        "type": "forge:nbt",
        "item": "thermal:energy_cell",
        "count": 1,
        "nbt": "{BlockEntityTag:{AmountIn:1000,AmountOut:1000,Energy:1000000,EnergyMax:1000000,EnergyRecv:1000,EnergySend:1000,RSControl:{RSMode:0b,RSThreshold:0b},Sides:[B;0B,0B,0B,0B,0B,0B],Xfer:{XferIn:0b,XferOut:1b}},Properties:{}}"
      },
      "B": {
        "type": "forge:nbt",
        "item": "immersiveengineering:capacitor_hv",
        "count": 1,
        "nbt": "{energy:4000000,sideConfig_0:0,sideConfig_1:1,sideConfig_2:0,sideConfig_3:0,sideConfig_4:0,sideConfig_5:2}"
      },
      "C": {
        "type": "forge:nbt",
        "item": "powah:battery_nitro",
        "count": 1,
        "nbt": "{powah_tile_data:{energy_stored_main_energy:2000000000L}}"
      },
      "D": {
        "type": "forge:nbt",
        "item": "solarpanels:creative_energy_tablet",
        "count": 1,
        "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"2000000000\"}]}}"
      },
      "E": {
        "item": "fluxnetworks:flux_block"
      },
      "F": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "G": {
        "type": "forge:nbt",
        "item": "powah:energy_cell_nitro",
        "count": 1,
        "nbt": "{powah_tile_data:{energy_stored_main_energy:2000000000L}}"
      },
      "H": {
        "type": "forge:nbt",
        "item": "thermal:flux_capacitor",
        "count": 1,
        "nbt": "{Active:0b,Energy:500000}"
      },
      "I": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "J": {
        "item": "mysticalagradditions:creative_essence"
      },
      "K": {
        "type": "forge:nbt",
        "item": "mekaevolution:infinite_energy_cube",
        "count": 1,
        "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"65536000000\"}]}}"
      },
      "L": {
        "type": "forge:nbt",
        "item": "solarflux:sp_avaritia.infinity",
        "count": 1,
        "nbt": "{Chargeable:[],Energy:249036800000L,Upgrades:[]}"
      },
      "M": {
        "item": "powah:reactor_nitro"
      }
  },
    "result": {
      "item": "powah:energy_cell_creative"
    }
  })
})