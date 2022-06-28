import React from "react";
import classes from "./PostItem.module.scss";
import CustomButton from "../../UI/Button/CustomButton";
import DeleteIcon from "@mui/icons-material/Delete";

const PostItem = ({ post, number, remove }) => {

  return (
    <div className={classes.postItem}>
      <div className={classes.postItem_content}>
        <strong>{number}. {post.title}</strong>
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
      </div>
    </div>
  );
};

export default PostItem;
