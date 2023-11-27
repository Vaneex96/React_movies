import AppSearchedItems from "../appSearchedItems/AppSearchedItems.js";
import AppFiltersByName from "../appFiltersByName/appFiltersByName.js";
import "./AppSearchByNameSection.scss";

const AppSearchByNameSection = () => {
  return (
    <div className="container">
      <div className="app-search-section">
        <AppFiltersByName />
        <AppSearchedItems />
      </div>
    </div>
  );
};

export default AppSearchByNameSection;
