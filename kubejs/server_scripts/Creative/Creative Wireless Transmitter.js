// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')


ServerEvents.recipes(event => {

  event.remove({id: 'creativewirelesstransmitter:creative_wireless_transmitter'})

  event.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAAAAAAAA",
      "BBBCCCBBB",
      "BDDDDDDDB",
      "BEFFFFFEB",
      "GHGIHIGHG",
      "BEFFFFFEB",
      "BDDDDDDDB",
      "BBBCCCBBB",
      "AAAAAAAAA"
    ],
    "key": {
      "A": {
        "item": "extradisks:withering_processor"
      },
      "B": {
        "item": "extrastorage:neural_processor"
      },
      "C": {
        "item": "rebornstorage:super_advanced_processor"
      },
      "D": {
        "item": "extendedcrafting:the_ultimate_ingot"
      },
      "E": {
        "item": "rsinfinitybooster:infinity_card"
      },
      "F": {
        "item": "mekaevolution:infinite_control_circuit"
      },
      "G": {
        "item": "rebornstorage:advanced_wireless_transmitter"
      },
      "H": {
        "item": "refinedstorage:network_transmitter"
      },
      "I": {
        "item": "mysticalagradditions:creative_essence"
      }
    },
    "result": {
      "item": "creativewirelesstransmitter:creative_wireless_transmitter"
    }
  })
})