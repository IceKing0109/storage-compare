import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    images: [
        { id: 1, name: "Filecoin_SP1", location: 'Seattle, USA', latency: 1000, speed: 3 , cost: 1, weight:0  },
        { id: 2, name: "Filecoin_SP2", location: 'Shanghai China', latency: 1200, speed: 2 , cost: 1, weight:0 },
        { id: 3, name: "Sia_SP1", location: 'Frankfurt, Germany', latency: 400, speed: 6 , cost: 2, weight:0  },
        { id: 4, name: "Sia_SP2", location: 'San Francisco, USA', latency: 450, speed: 8 , cost: 3, weight:0  },
        { id: 5, name: "Arweave", location: 'Global', latency: 350, speed: 7 , cost: 10, weight:0  },
        { id: 6, name: "Filecoin_SP3", location: 'New York, USA', latency: 1100, speed: 3 , cost: 1, weight:0  },
        { id: 7, name: "Sia_SP3", location: 'Paris France', latency: 420, speed: 5 , cost: 4, weight:0  },
        { id: 8, name: "Sia_SP4", location: 'Sydney, Australia', latency: 460, speed: 8 , cost: 2, weight:0  },
        { id: 9, name: "Filecoin_SP4", location: 'Seattle, USA', latency: 1300, speed: 2 , cost: 1, weight:0  },
        { id: 10, name: "Sia_SP5", location: 'Mumbai, India', latency: 470, speed: 7 , cost: 2, weight:0  }
    ]
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.images = action.payload;
        }
    },

})

export const { setData } = imageSlice.actions

export default imageSlice.reducer