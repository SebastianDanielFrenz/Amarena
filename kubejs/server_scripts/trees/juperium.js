ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:juperium_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'ad_extendra:juperium_block',
            O: 'oretrees:calorite_sapling',
            L: 'minecraft:oak_log'
        }
    )
})