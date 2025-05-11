ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:desh_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'ad_astra:desh_block',
            O: 'oretrees:iron_sapling',
            L: 'minecraft:oak_log'
        }
    )
})