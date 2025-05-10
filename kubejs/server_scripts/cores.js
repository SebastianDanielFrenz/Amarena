ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:core_t1'),
        [
            ' A ',
            'ATA',
            ' A '
        ],
        {
            A: 'create:andesite_casing',
            T: 'create:railway_casing'
        }
    )
    event.shaped(
        Item.of('kubejs:core_t1'),
        [
            ' B ',
            'BFB',
            ' B '
        ],
        {
            B: 'minecraft:bread',
            F: 'minecolonies:flatbread'
        }
    )
    event.shaped(
        Item.of('kubejs:core_t2'),
        [
            ' M ',
            'MCM',
            ' M '
        ],
        {
            M: 'botania:manasteel_ingot',
            C: 'kubejs:core_t1'
        }
    )
    event.shaped(
        Item.of('kubejs:core_t2'),
        [
            ' R ',
            'RCR',
            ' R '
        ],
        {
            R: 'bloodmagic:reinforcedslate',
            C: 'kubejs:core_t1'
        }
    )
    event.shaped(
        Item.of('kubejs:core_t3'),
        [
            ' O ',
            'RCR',
            ' O '
        ],
        {
            O: 'ad_astra:ostrum_block',
            R: 'deeperdarker:reinforced_echo_shard',
            C: 'kubejs:core_t2'
        }
    )
})
