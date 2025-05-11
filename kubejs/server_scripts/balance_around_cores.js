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

    event.remove('pipez:improved_upgrade')
    event.shaped(
        Item.of('pipez:improved_upgrade'),
        [
            'GCG',
            'CBC',
            'GCG'
        ],
        {
            G: 'minecraft:gold_ingot',
            C: 'kubejs:core_t3',
            B: 'pipez:basic_upgrade'
        }
    )

    event.remove('pipez:advanced_upgrade')
    event.shaped(
        Item.of('pipez:advanced_upgrade'),
        [
            'DRD',
            'RIR',
            'DRD'
        ],
        {
            D: 'minecraft:diamond_block',
            R: 'minecraft:redstone_block',
            I: 'pipez:improved_upgrade'
        }
    )

    event.remove('rftoolsdim:dimension_builder')
    event.shaped(
        Item.of('rftoolsdim:dimension_builder'),
        [
            'EDE',
            'CFC',
            'AAA'
        ],
        {
            E: 'ad_extendra:electrolyte_block',
            D: 'draconicevolution:item_chaotic_energy_link',
            F: 'rftoolsbase:machine_frame',
            C: 'rftoolspower:dimensionalcell_advanced',
            A: 'mekanism:pellet_antimatter'
        }
    )

    event.remove('mekanism:mekasuit_helmet')
    event.shaped(
        Item.of('mekanism:mekasuit_helmet'),
        [
            'HCH',
            'HNH',
            'PIP'
        ],
        {
            H: 'mekanism:hdpe_sheet',
            C: 'draconicevolution:chaotic_core',
            N: 'advanced_ae:quantum_helmet',
            P: 'mekanism:pellet_polonium',
            I: 'mekanism:ultimate_induction_cell'
        }
    )

    event.remove('mekanism:mekasuit_bodyarmor')
    event.shaped(
        Item.of('mekanism:mekasuit_bodyarmor'),
        [
            'HCH',
            'HNH',
            'PIP'
        ],
        {
            H: 'mekanism:hdpe_sheet',
            C: 'draconicevolution:reactor_core',
            N: 'advanced_ae:quantum_chestplate',
            P: 'mekanism:pellet_polonium',
            I: 'mekanism:ultimate_induction_cell'
        }
    )

    event.remove('mekanism:mekasuit_pants')
    event.shaped(
        Item.of('mekanism:mekasuit_pants'),
        [
            'HCH',
            'HNH',
            'PIP'
        ],
        {
            H: 'mekanism:hdpe_sheet',
            C: 'draconicevolution:chaotic_core',
            N: 'advanced_ae:quantum_leggings',
            P: 'mekanism:pellet_polonium',
            I: 'mekanism:ultimate_induction_cell'
        }
    )

    event.remove('mekanism:mekasuit_boots')
    event.shaped(
        Item.of('mekanism:mekasuit_boots'),
        [
            'HCH',
            'HNH',
            'PIP'
        ],
        {
            H: 'mekanism:hdpe_sheet',
            C: 'draconicevolution:chaotic_core',
            N: 'advanced_ae:quantum_boots',
            P: 'mekanism:pellet_polonium',
            I: 'mekanism:ultimate_induction_cell'
        }
    )

    event.remove('mekanism:digital_miner')
    event.shaped(
        Item.of('mekanism:digital_miner'),
        [
            'ACA',
            'LRL',
            'TST'
        ],
        {
            A: 'mekanism:alloy_atomic',
            C: 'kubejs:core_t2',
            L: 'mekanism:logistical_sorter',
            R: 'mekanism:robit',
            T: 'mekanism:teleportation_core',
            S: 'mekanism:steel_casing'
        }
    )

    event.remove('shrink:shrinking_device')
    event.shaped(
        Item.of('shrink:shrinking_device'),
        [
            'IEI',
            'IGI',
            'ICI'
        ],
        {
            I: 'minecraft:iron_ingot',
            E: 'minecraft:ender_pearl',
            G: '#forge:glass',
            C: 'kubejs:core_t3'
        }
    )

})