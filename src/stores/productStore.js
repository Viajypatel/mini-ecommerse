import {create} from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  categories: [],
  productDetail: null,
  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setProductDetail: (product) => set({ productDetail: product }),
}));

