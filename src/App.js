import "../src/styles/App.css";
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Posts from "./components/posts/Posts/Posts";
import PostForm from "./components/posts/post-form/PostForm";
import PostFilter from "./components/posts/post-filter/PostFilter";
import CustomModal from "./components/UI/modals/CustomModal";
import CustomButton from "./components/UI/Button/CustomButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', search: '' });

  const [visible, setVisible] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search)

  useEffect(() => {
    fetchPosts()
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => post.id !== item.id));
  };

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    setPosts(response.data)
  }


  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="posts_box" sx={{ bgcolor: "#f8f8ff", height: "100vh" }}>
          <CustomButton
            onClick={() => setVisible(true)}
            variant="outlined"
            size="medium"
            color="primary"
            endIcon={<AddCircleOutlineIcon />}
          >
            Create post
          </CustomButton>
          <CustomModal visible={visible} setVisible={setVisible}>
            <PostForm create={createPost} />
          </CustomModal>
          <PostFilter filter={filter} setFilter={setFilter} />
          <Posts remove={removePost} posts={sortedAndSearchedPosts} title="List of Posts 1" />
        </Box>
      </Container>
    </div>
  );
}

export default App;
