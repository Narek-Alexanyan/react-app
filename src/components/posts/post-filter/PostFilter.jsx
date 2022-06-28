import React from "react";
import CustomField from "../../UI/fields/CustomField";
import CustomSelect from "../../UI/select/CustomSelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <div className="search_wrapper">
        <CustomField
          type="text"
          placeholder="Search..."
          label="Search"
          variant="outlined"
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        />
      </div>
      <div className="sort_wrapper">
        <CustomSelect
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          label="sort"
          defaultValue="sort of"
          options={[
            { value: "title", name: "of title" },
            { value: "body", name: "of body" },
          ]}
        />
      </div>
    </div>
  );
};

export default PostFilter;
