ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:electrolyte_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'ad_extendra:electrolyte_block',
            O: 'oretrees:plutonium_sapling',
            L: 'minecraft:oak_log'
        }
    )
})