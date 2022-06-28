import React, { useState } from "react";
import CustomField from "../../UI/fields/CustomField";
import CustomButton from "../..//UI/Button/CustomButton";

const PostForm = ({create}) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
        ...form,
        id: Date.now()
    }
    create(newPost)
    setForm({ title: "", description: "" });
  };
  return (
    <form>
      <CustomField
        type="text"
        placeholder="title"
        label="Title"
        variant="outlined"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <CustomField
        type="text"
        placeholder="description"
        label="Description"
        variant="outlined"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <CustomButton
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
