const Filters = () => {
  const filters = ['Brand', 'Colour', 'Price', 'Gender'];

  return (
    <div class="content">
      <h4 className="content__title">Filters</h4>

      <ul className="content__list">
        {filters.map((filter, index) => (
          <li key={index}>{filter}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
