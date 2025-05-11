ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:quartz_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'minecraft:quartz_block',
            O: 'minecraft:warped_fungus',
            L: 'minecraft:warped_stem'
        }
    )
})