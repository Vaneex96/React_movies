import AppFilters from "../appFilters/AppFilters";
import AppSearchedItems from "../appSearchedItems/AppSearchedItems";

import "./AppSearchSection.scss";

const AppSearchSection = () => {
  return (
    <div className="container">
      <div className="app-search-section">
        <AppFilters />
        {/* <AppSearchedItems /> */}
      </div>
    </div>
  );
};

export default AppSearchSection;
