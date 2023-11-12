import "./Page404.scss";
import error from "../../resources/source.webp";

const Page404 = () => {
  return (
    <div className="page404">
      <img src={error} alt="error" />
    </div>
  );
};

export default Page404;
