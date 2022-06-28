import PostItem from "../post-item/PostItem";
import classes from "./Posts.module.scss";

const Posts = ({ posts, title, remove }) => {
  return (
    <div className={classes.posts}>
      <h2 className={classes.posts_title}>{title}</h2>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
