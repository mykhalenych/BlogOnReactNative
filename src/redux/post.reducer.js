import { LOAD_POSTS, TOGGLE_BOOKED, ADD_POST } from "./types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked),
        loading: false,
      };
    case TOGGLE_BOOKED: {
      const allPosts = state.allPosts.map((item) => {
        if (item.id === action.payload) {
          item.booked = !item.booked;
        }
        return item;
      });
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((item) => item.booked),
      };
    }
    case ADD_POST:
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts],
      };
    default:
      return state;
  }
};
