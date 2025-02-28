import { TailSpin } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="pageLoader">
      <TailSpin radius={"8px"} height="60" width="60" />
    </div>
  );
};

export default PageLoader;
