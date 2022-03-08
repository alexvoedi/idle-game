import ItemID from "@/data/items/ItemID";
import items from "@/data/items/items";

export const useItem = () => {
  const getItem = (itemID: ItemID) => {
    const item = items.find((item) => item.id === itemID);

    if (!item) throw new Error(`Item with ID ${itemID} not found`);

    return item;
  };

  return {
    getItem,
  };
};
