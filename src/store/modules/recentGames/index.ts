import { CaseReducer, createSlice, PayloadAction, } from '@reduxjs/toolkit';

interface ICart {
  id: string;
  type: string;
  price: number;
  color: string;
  numbers: number[];
  enabled: boolean;
}

type CreateSliceProps = {
  items: ICart[];
}

const addItemToCart: CaseReducer<CreateSliceProps , PayloadAction<ICart>> = (state, action) => {
  const newItem = action.payload;
  state.items.push(newItem);
}

const recentGamesSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  } as CreateSliceProps,
  reducers: {
    addItemToCart
  },
});

const RecentGamesActions = recentGamesSlice.actions;

export { recentGamesSlice, RecentGamesActions};