import { create } from "zustand";
import { itemList } from "../lib/constants";

create((set) => ({
  items: itemList,
  addItem: (text) => {
    const newItem = {
      id: new Date().getTime(),
      name: text,
      packed: false,
    };
    set((state) => ({ items: [...state.items, newItem] }));
  },
  deleteAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: itemList }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const newList = state.items.map((item) => {
        return { ...item, packed: true };
      });
      return { items: newList };
    });
  },
  markAllIncomplete: () => {
    set((state) => {
      const newList = state.items.map((item) => {
        return { ...item, packed: false };
      });
      return { items: newList };
    });
  },
  deleteItem: (id) => {
    set((state) => {
      const newList = state.items.filter((item) => item.id !== id);
      return { items: newList };
    });
  },
  toggleItem: (id) => {
    set((state) => {
      const newList = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newList };
    });
  },
}));
