import AppSearchedItemsByName from "../appSearchedItemsByName/AppSearchedItemsByName.js";
import AppFiltersByName from "../appFiltersByName/appFiltersByName.js";
import "./AppSearchByNameSection.scss";

const AppSearchByNameSection = () => {
  return (
    <div className="container">
      <div className="app-search-section">
        <AppFiltersByName />
        <AppSearchedItemsByName />
      </div>
    </div>
  );
};

export default AppSearchByNameSection;
