import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "../post-item/PostItem";
import classes from "./Posts.module.scss";

const Posts = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h2 style={{ textAlign: "center", padding: "15px 0" }}>List is empty</h2>
    );
  }
  return (
    <div className={classes.posts}>
      <h2 className={classes.posts_title}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Posts;
