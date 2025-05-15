ServerEvents.command('clear', event => {
    console.log("\"" + event.getInput() + "\"")
    if ("clear @a" == event.getInput()) {
        var context = event.getParseResults().getContext()
        var source = context.getSource()
        if (!source.isPlayer()) {
            event.server.getCommands().performPrefixedCommand(source, 'tellraw @p[distance=..0.0001] {"text": "Well, you messed up ._.", "color": "red"}')
            event.server.getCommands().performPrefixedCommand(source, "clear @p[distance=..0.0001]")
            event.server.getCommands().performPrefixedCommand(source, 'execute if entity @p[distance=..20] run tellraw @a [{"selector":"@p","color":"dark_purple"}, {"text": " tried to clear all inventories", "color": "red"}]')
            event.cancel()
        }
    }
})
ServerEvents.recipes(event => {
    event.remove({ id: 'industrialforegoing:ore_laser_base' })

    /**
     * @param {Internal.ItemStack_} item 
     */
    function disable(item) {
        event.remove({ output: item })
    }

    disable('lbu2:error_lucky_block')
    disable('lbu2:hacker_lucky_block')
    disable('lbu2:entropy_lucky_block')
    disable('lbu2:original_lucky_block')
    disable('lbu2:eclipse_lucky_block')
    disable('lbu2:bloodmoon_lucky_block')
    disable('lbu2:yin_yang_lucky_block')
    disable('lbu2:murder_drones_lucky_block')
    disable('lbu2:tf_2_lucky_block')
    disable('lbu2:console_lucky_block')
    disable('lbu2:pillager_lucky_block')
    disable('lbu2:dimensional_lucky_block')
    disable('lbu2:classic_lucky_block')
    disable('lbu2:invisible_lucky_block')
    disable('lbu2:creeper_lucky_block')
    disable('lbu2:corrupted_lucky_block')
    disable('lbu2:desert_lucky_block')
    disable('lbu2:limbus_company_lucky_block')
    disable('lbu2:mars_lucky_block')
    disable('lbu2:soul_lucky_block')
    disable('lbu2:wither_lucky_block')
    disable('lbu2:inverted_lucky_block')
    disable('lbu2:cookie_lucky_block')
    disable('lbu2:cave_lucky_block')
    disable('lbu2:forest_lucky_block')
    disable('lbu2:unstable_lucky_block')
    disable('lbu2:machine_lucky_block')
    disable('lbu2:pickle_lucky_block')
    disable('lbu2:blaze_lucky_block')
    disable('lbu2:etherial_lucky_block')
})