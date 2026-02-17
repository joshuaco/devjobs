import { create } from 'zustand';

interface FavoritesState {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
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
    get().isFavorite(id) ? get().removeFavorite(id) : get().addFavorite(id),
}));

export default useFavoritesStore;
