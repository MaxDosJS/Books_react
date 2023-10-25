import create from "zustand";

const useStore = create((set) => ({
  API_KEY: "AIzaSyC3yXpWoze3nK74dNz3ktZsk_SxtXhaDts",
  books: [],
  query: "",
  isButtonClicked: false,
  wishlist: [],
  setBooks: (books) => set({ books }),
  setQuery: (query) => set({ query }),
  setIsButtonClicked: (isButtonClicked) => set({ isButtonClicked }),
  addToWishlist: (book) => {
    set((state) => {
      if (!state.wishlist.some((item) => item.id === book.id)) {
        state.wishlist.push(book);
      }
      return { wishlist: state.wishlist };
    });
  },
}));

export default useStore;
