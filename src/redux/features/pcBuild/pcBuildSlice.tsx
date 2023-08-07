import { IProduct } from '@/config/type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';

// Define a type for the slice state
const initialState: IProduct[] = [];

const authSlice = createSlice({
    name: 'pcBuild',
    initialState,
    reducers: {
        addToPCBuild: (state, action: PayloadAction<IProduct>) => {
            const productExists = state.some((product) => product.name === action.payload.name);
            if (productExists) {
                toast.error('This product is already in the PC Build.');
            } else {
                state.push(action.payload);
            }
        },
        removeFromPCBuild: (state, action: PayloadAction<string>) => {
            const productIndex = state.findIndex((product) => product._id === action.payload);

            if (productIndex !== -1) {
                state.splice(productIndex, 1);
                toast.success('Product removed from PC Build.');
            } else {
                toast.error('Product not found in the PC Build.');
            }
        },
        clearPCBuild: (state) => {
            state.splice(0, state.length);
            toast.success('PC Build successfully completed.');
        },
    }
})

export const { addToPCBuild, removeFromPCBuild, clearPCBuild } = authSlice.actions;
export default authSlice.reducer;