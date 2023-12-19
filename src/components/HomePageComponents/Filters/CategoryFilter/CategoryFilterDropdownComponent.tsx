import useCategoryState from "./useCategoryState";

const CategoryFilterDropdownComponent = () => {
  const { onClickingOnCategory } = useCategoryState();
  return (
    <div className="d-flex flex-column p-0 m-2">
      <label className="dropdown-css">Select by category</label>

      <select
        onChange={(e) => {
          onClickingOnCategory(e.currentTarget.value);
          e.preventDefault();
        }}
      >
        <option value="">All</option>
        <option value="classroom">classroom</option>
        <option value="laboratories">laboratories</option>
        <option value="restrooms">restrooms</option>
        <option value="library">library</option>
        <option value="common_areas">common areas</option>
        <option value="cafeteria">cafeteria</option>
        <option value="outdoor">outdoor</option>
        <option value="transport">transport</option>
        <option value="halls">halls</option>
      </select>
    </div>
  );
};

export default CategoryFilterDropdownComponent;

/*  (classroom, "classroom"), (laboratories,
      "laboratories"), (restrooms, "restrooms"), (library, "library"),
      (common_areas, "common areas"), (cafeteria, "cafeteria"), (outdoor,
      "outdoor"), (transport, "transport"), (halls, "halls") */
