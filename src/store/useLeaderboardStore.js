import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useLeaderboardStore = create(
  persist(
    (set) => ({
      records: [],

      addRecord: (record) => set((state) => {
        const newRecords = [...state.records, record]
          .sort((a, b) => b.score - a.score)
          .slice(0, 50); 
        
        return { records: newRecords };
      }),

      clearLeaderboard: () => set({ records: [] }),
    }),
    {
      name: 'anagram-leaderboard-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);