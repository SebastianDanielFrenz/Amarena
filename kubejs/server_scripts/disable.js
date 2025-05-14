ServerEvents.command('clear', event => {
    console.log("\"" + event.getInput() + "\"")
    if ("clear @a" == event.getInput()) {
        var context = event.getParseResults().getContext()
        var source = context.getSource()
        if (!source.isPlayer()) {
            source.sendSystemMessage(Text.red("Well, you messed up.  ._."))
            event.server.getCommands().performPrefixedCommand(source, "clear @p[distance=..0.0001]")
            event.server.getCommands().performPrefixedCommand(source, 'execute if entity @p[distance=..20] run tellraw @a [{"selector":"@p","color":"dark_purple"}, {"text": " tried to clear all inventories", "color": "red"}]')
            event.cancel()
        }
    }
})
ServerEvents.recipes(event => {
    event.remove({ id: 'industrialforegoing:ore_laser_base' })
})