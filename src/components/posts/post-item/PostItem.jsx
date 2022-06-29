import React from "react";
import classes from "./PostItem.module.scss";
import CustomButton from "../../UI/Button/CustomButton";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, number, remove }) => {
  const navigate = useNavigate()

  return (
    <div className={classes.postItem}>
      <div className={classes.postItem_content}>
        <strong>{post.id}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className={classes.postItem_btns}>
        <CustomButton
          onClick={() => remove(post)}
          variant="outlined"
          size="medium"
          color="error"
          endIcon={<DeleteIcon />}
        >
          Delete
        </CustomButton>
        <CustomButton
          onClick={() => navigate(`/posts/${post.id}`)}
          variant="outlined"
          size="medium"
          color="primary"
          endIcon={<LaunchIcon />}
        >
          Open
        </CustomButton>
      </div>
    </div>
  );
};

export default PostItem;
