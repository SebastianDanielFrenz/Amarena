ServerEvents.recipes(event => {
    event.remove('mekanism:metallurgic_infuser')
    event.shaped(
        Item.of('mekanism:metallurgic_infuser'),
        [
            'ICI',
            'ROR',
            'IFI'
        ],
        {
            I: 'minecraft:iron_ingot',
            C: 'kubejs:core_t1',
            R: 'minecraft:redstone',
            F: 'minecraft:furnace',
            O: 'mekanism:ingot_osmium'
        }
    )

    event.remove('thermal:rf_coil')
    event.shaped(
        Item.of('thermal:rf_coil'),
        [
            '  R',
            ' C ',
            'R  '
        ],
        {
            R: 'minecraft:redstone',
            C: 'kubejs:core_t1'
        }
    )

    event.remove('thermal:redstone_servo')
    event.shaped(
        Item.of('thermal:redstone_servo'),
        [
            ' R ',
            ' C ',
            ' R '
        ],
        {
            R: 'minecraft:redstone',
            C: 'kubejs:core_t1'
        }
    )

    event.remove('mekanism:teleportation_core')
    event.shaped(
        Item.of('mekanism:teleportation_core'),
        [
            'LRL',
            'CDC',
            'LRL'
        ],
        {
            R: 'mekanism:alloy_atomic',
            C: 'kubejs:core_t1',
            L: 'minecraft:ender_pearl',
            D: 'minecraft:diamond',
        }
    )

    event.remove('ae2:network/blocks/inscribers')
    event.shaped(
        Item.of('ae2:inscriber'),
        [
            'IPI',
            'C O',
            'IPI'
        ],
        {
            I: 'minecraft:iron_ingot',
            P: 'minecraft:sticky_piston',
            O: 'kubejs:core_t2',
            C: 'minecraft:copper_ingot'
        }
    )

    event.remove('ae2:network/wireless_part')
    event.shaped(
        Item.of('ae2:wireless_receiver'),
        [
            ' F ',
            'ICI',
            ' I '
        ],
        {
            I: 'minecraft:iron_ingot',
            F: 'ae2:fluix_pearl',
            C: 'kubejs:core_t3'
        }
    )

    event.remove('draconicevolution:components/draconium_core')
    event.shaped(
        Item.of('draconicevolution:draconium_core'),
        [
            'DGD',
            'GCG',
            'DGD'
        ],
        {
            D: 'draconicevolution:draconium_ingot',
            G: 'minecraft:gold_ingot',
            C: 'kubejs:core_t3'
        }
    )

    event.remove('mekanism:portable_teleporter')
    event.shaped(
        Item.of('mekanism:portable_teleporter'),
        [
            ' T ',
            'BCB',
            ' T '
        ],
        {
            T: 'mekanism:energy_tablet',
            B: 'mekanism:basic_control_circuit',
            C: 'draconicevolution:advanced_dislocator'
        }
    )
    
    event.remove('draconicevolution:tools/dislocator')
    event.shaped(
        Item.of('draconicevolution:dislocator'),
        [
            'BDB',
            'DTD',
            'BDB'
        ],
        {
            B: 'minecraft:blaze_powder',
            D: 'draconicevolution:draconium_dust',
            T: 'mekanism:teleportation_core'
        }
    )
})