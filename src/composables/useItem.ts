import items, { ItemID } from "@/data/item";

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
