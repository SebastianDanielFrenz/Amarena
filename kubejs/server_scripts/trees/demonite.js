ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:demonite_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'bloodmagic:dungeon_metal',
            O: 'oretrees:stone_sapling',
            L: 'minecraft:oak_log'
        }
    )
})