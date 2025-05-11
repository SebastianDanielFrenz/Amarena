ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:radium_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'ad_extendra:radium_block',
            O: 'oretrees:neptunium_sapling',
            L: 'minecraft:oak_log'
        }
    )
})