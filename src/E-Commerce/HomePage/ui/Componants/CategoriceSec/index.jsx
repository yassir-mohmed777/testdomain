import styles from "./index.module.css";
import { domain, useData } from "../../../../../zustand-store";
import { Link } from "react-router-dom";
import categorice from '../../../../../All-Data/Categorice'
export default function CategoriceSec() {

  const casualCategory =
    categorice && categorice.find((cat) => cat.category_name === "شبابية");
  const formalCategory =
    categorice && categorice.find((cat) => cat.category_name === "الاناقة");
  const partyCategory =
    categorice && categorice.find((cat) => cat.category_name === "نسائية");
  const gymCategory =
    categorice && categorice.find((cat) => cat.category_name === "رياضة");

  return (
    <div
      className="container col-12 p-3 p-md-5 d-flex flex-column align-items-center rounded-5"
      id={styles.backgrauond}
    >
      <h2 className="mb-4">تصفح حسب نمطك</h2>

      <div className="row g-3 d-flex flex-lg-wrap">
        {casualCategory && (
          <div className="col-12 col-lg-4">
              <Link to={`/categories/${casualCategory.documentId}`}>
              <p className="position-absolute p-3">شبابية</p>
              <img  src={casualCategory.img}/>
          </Link>
            </div>
        )}
        {formalCategory && (
          <div className="col-12 col-lg-8">
            <Link to={`/categories/${formalCategory.documentId}`}>
            <p className="position-absolute p-3">الاناقة</p>
            <img  src={formalCategory.img}/>
          </Link>
          </div>
        )}
        {partyCategory && (
          <div className="col-12 col-lg-8">
            <Link to={`/categories/${partyCategory.documentId}`}>
            <p className="position-absolute p-3">نسائية</p>
            <img  src={partyCategory.img}/>
          </Link>
          </div>
        )}
        {gymCategory && (
          <div className="col-12 col-lg-4">
            <Link to={`/categories/${gymCategory.documentId}`}>
            <p className="position-absolute p-3">رياضة</p>
            <img src={gymCategory.img}/>
          </Link>
          </div>
        )}
      </div>
    </div>
  );
}
