import React, { useState } from "react";
import CustomField from "../../UI/fields/CustomField";
import CustomButton from "../..//UI/Button/CustomButton";

const PostForm = ({ create }) => {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...form,
      id: Date.now(),
    };
    create(newPost);
    setForm({ title: "", body: "" });
  };
  return (
    <form>
      <CustomField
        sx={{ mb: 2 }}
        type="text"
        placeholder="title..."
        label="Title"
        variant="outlined"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <CustomField
        sx={{ mb: 2 }}
        type="text"
        placeholder="body..."
        label="Body"
        variant="outlined"
        value={form.body}
        onChange={(e) => setForm({ ...form, body: e.target.value })}
      />
      <CustomButton
        sx={{ mx: "auto" }}
        onClick={addNewPost}
        variant="outlined"
        size="medium"
        color="primary"
      >
        Create Post
      </CustomButton>
    </form>
  );
};

export default PostForm;
