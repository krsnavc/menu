function Categories({ category, filterItems }) {
  return (
    <div className="btn-container">
      {category.map((category) => {
        return (
          <button
            type="button"
            key={category}
            onClick={() => filterItems(category)}
            className="btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
