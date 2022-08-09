import create from 'zustand';

interface User {
  userId: string;
  username?: string;
  email?: string;
  profilePictureUrl?: string;
}

interface State {
  userDetails: User | undefined;
  setUserDetails: (userDetails: User) => void;
  loggoutUser: () => void;
}
export const useStore = create<State>((set) => ({
  userDetails: undefined,
  setUserDetails: (userDetails: User) => set({ userDetails }),
  loggoutUser: () => set({ userDetails: undefined }),
}));
