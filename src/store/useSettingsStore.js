import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useSettingsStore = create(
  persist(
    (set) => ({
      timeLimit: 60,
      difficulty: 'normal',
      allowHints: true,

      setSettings: (newSettings) => set((state) => ({
        ...state,
        ...newSettings
      })),

      resetSettings: () => set({ 
        timeLimit: 60, 
        difficulty: 'normal', 
        allowHints: true 
      }),
    }),
    {
      name: 'anagram-settings-storage', 
      storage: createJSONStorage(() => localStorage),
    }
  )
);