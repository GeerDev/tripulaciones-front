import postUserService from "./postService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isError: false,
    isSuccess: false,
    message: "",
    post: {},
    isLoading: false,
};

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
    try {
        return await postUserService.createPost(post)
    } catch (error) {
        console.error(error)
    }
})

export const getByIdPost = createAsyncThunk("posts/getById", async (_id) => {
    try {
      return await postUserService.getByIdPost(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const getAllPost = createAsyncThunk("posts/getAll", async () => {
    try {
      return await postUserService.getAllPost();
    } catch (error) {
      console.error(error);
    }
  });

  export const updatePost = createAsyncThunk("posts/editPost", async (post) => {
    try {
      return await postUserService.updatePost(post);
    } catch (error) {
      console.error(error);
    }
  });
  
  export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
    try {
      return await postUserService.deletePost(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const like = createAsyncThunk("posts/like", async (_id) => {
    try {
      return await postUserService.like(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const disLike = createAsyncThunk("posts/disLike", async (_id) => {
    try {
      return await postUserService.disLike(_id);
    } catch (error) {
      console.error(error);
    }
  });

  export const getByDescriptionPost = createAsyncThunk(
    "posts/getByDescriptionPost",
    async (postDescription) => {
      try {
        return await postUserService.getByDescriptionPost(postDescription);
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const postUserSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
          },
    },
    extraReducers: (builder) => {
      builder.addCase(createPost.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload;
        state.posts = [ action.payload, ...state.posts ];
      });
      builder.addCase(createPost.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
        builder.addCase(getAllPost.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getAllPost.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getByIdPost.fulfilled, (state, action) => {
            state.post = action.payload;
          });
          builder.addCase(getByIdPost.pending, (state) => {
            state.isLoading = true;
          });
          builder.addCase(deletePost.fulfilled, (state, action) => {
            state.posts = state.posts.filter(
              (post) => post._id !== action.payload.post._id
            );
          });
          builder.addCase(like.fulfilled, (state, action) => {
            const posts = state.posts.map((post) => {
              if (post._id === action.payload._id) {
                post = action.payload;
              }
              return post;
            });
            state.posts = posts;
            state.post = action.payload;
          });
          builder.addCase(disLike.fulfilled, (state, action) => {
            const posts = state.posts.map((post) => {
              if (post._id === action.payload._id) {
                post = action.payload;
              }
              return post;
            });
            state.posts = posts;
            state.post = action.payload;
          });
          builder.addCase(updatePost.fulfilled, (state, action) => {
            const posts = state.posts.map((post) => {
              if (post._id === action.payload._id) {
                post = action.payload;
              }
              return post;
            });
            state.posts = posts;
            state.post = action.payload;
          });
          
    }
})


export const { reset } = postUserSlice.actions;
export default postUserSlice.reducer;