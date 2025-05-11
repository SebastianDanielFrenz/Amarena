ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:plutonium_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'ad_extendra:plutonium_block',
            O: 'oretrees:radium_sapling',
            L: 'minecraft:oak_log'
        }
    )
})