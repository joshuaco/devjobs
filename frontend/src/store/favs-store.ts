import { create } from 'zustand';

interface FavoritesState {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  countFavorites: () => number;
}

const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],
  addFavorite: (id: string) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites
        : [...state.favorites, id],
    })),

  removeFavorite: (id: string) =>
    set((state) => ({
      favorites: state.favorites.filter((favorite) => favorite !== id),
    })),

  isFavorite: (id: string) => get().favorites.includes(id),

  toggleFavorite: (id: string) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((favorite) => favorite !== id)
        : [...state.favorites, id],
    })),

  countFavorites: () => get().favorites.length,
}));

export default useFavoritesStore;
