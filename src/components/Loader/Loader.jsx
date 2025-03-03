import { TailSpin } from "react-loader-spinner";
import { RotatingLines } from 'react-loader-spinner';

import css from './Loader.module.css';

//const Loader = () => {
 // return <TailSpin radius={"8px"} height="60" width="60" />;
//};
const Loader = ({ isLoading, strokeColor = '#000000' }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={isLoading}
        height="100%"
        width="100%"
        strokeColor={strokeColor}
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        // wrapperStyle={{}}
        // wrapperClass=""
      />
    </div>
  );
};

export default Loader;
