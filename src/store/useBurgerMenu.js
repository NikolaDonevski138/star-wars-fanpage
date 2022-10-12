import create from 'zustand';

export const useBurgerMenu = create((set, get) => ({
    isOpened: false,
    setOpen() {
      set({isOpened: true});
    },
    setClose() {
      set({isOpened: false});
    }
}))