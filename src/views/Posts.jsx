import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PostsList from "../components/posts/Posts/Posts";
import PostForm from "../components/posts/post-form/PostForm";
import PostFilter from "../components/posts/post-filter/PostFilter";
import CustomModal from "../components/UI/modals/CustomModal";
import CustomButton from "../components/UI/Button/CustomButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/loader";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", search: "" });

  const [visible, setVisible] = useState(false);

  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((item) => post.id !== item.id));
  };

  const changePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="Posts">
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
          {isPostsLoading ? (
            <Loader />
          ) : (
            <PostsList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title="List of Posts 1"
            />
          )}
          <Pagination
            count={totalPages}
            page={page}
            handleChange={changePage}
          />
        </Box>
      </Container>
    </div>
  );
}

export default Posts;
