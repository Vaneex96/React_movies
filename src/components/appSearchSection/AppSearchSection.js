import AppFilters from "../appFilters/AppFilters";
import AppSearchedItems from "../appSearchedItemsByName/AppSearchedItemsByName.js";

import "./AppSearchSection.scss";

const AppSearchSection = () => {
  return (
    <div className="container">
      <div className="app-search-section">
        <AppFilters />
        <AppSearchedItems />
      </div>
    </div>
  );
};

export default AppSearchSection;
