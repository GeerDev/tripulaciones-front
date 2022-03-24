import postUserService from "./postUserService";

const initialState = {
    posts: [],
    post: {}
};

export const postUserSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.fulFilled, (state, action) => {
            state.post = [action.payload, ...state.post]
        })
    }
})

export const create = createAsyncThunk("post/createPost", async (post) => {
    try {
        return await postUserService.create(post)
    } catch (error) {
        console.error(error)
    }
})

export default postUserSlice;