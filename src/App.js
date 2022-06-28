import "../src/styles/App.css";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Posts from "./components/posts/Posts/Posts";
import PostForm from "./components/posts/post-form/PostForm";
import CustomSelect from "./components/UI/select/CustomSelect";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      description: "language of programing",
    },
    {
      id: 2,
      title: "Python",
      description: "language of programing 2",
    },
    {
      id: 3,
      title: "Java",
      description: "language of programing 3",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const sortedPosts = getSortedPosts()

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => post.id !== item.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="xl">
        <Box className="posts_box" sx={{ bgcolor: "#f8f8ff", height: "100vh" }}>
          <div className="posts_form">
            <PostForm create={createPost} />
          </div>
          <hr />
          <div className="sort_wrapper">
            <CustomSelect
              value={selectedSort}
              onChange={sortPosts}
              label="sort"
              defaultValue="sort of"
              options={[
                { value: "title", name: "of title" },
                { value: "description", name: "of description" },
              ]}
            />
          </div>
          {posts.length ? (
            <Posts remove={removePost} posts={sortedPosts} title="List of Posts 1" />
          ) : (
            <h2 style={{ textAlign: "center", padding: "15px 0" }}>
              List is empty
            </h2>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default App;
