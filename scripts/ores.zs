import crafttweaker.api.item.IItemStack;
 
val removeRecipes = [
		<item:ad_astra:steel_ingot>,
	] as IItemStack[];
 
	for item in removeRecipes {
		mods.jei.JEI.hideItem(item);
	}