StartupEvents.registry('minecraft:item', event => {
    event.create('core_t1')
    event.create('core_t2')
    event.create('core_t3')
    event.create('compressed_hellforged_parts')
})
StartupEvents.registry('minecraft:block', event => {
    event.create('compressed_nitro_generator').woodSoundType().hardness(2.0).resistance(20.0).requiresTool()
})