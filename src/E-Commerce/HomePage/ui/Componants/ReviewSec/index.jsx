import styles from "./index.module.css";
import { useModalReview, useReview } from "../../../../../zustand-store";
import { FcOk } from "react-icons/fc";
import { toast } from "react-toastify";
import reviews from '../../../../../All-Data/Reviows'
export default function ReviewSec() {
  const { openReview } = useModalReview();
  // const { ReviewsData: reviews } = useReview();


  return (
    <div className="col-12 container my-5" id={styles.myDiv}>
      <div className="d-flex justify-content-between align-items-center">
        <h2>تقييمات عملائنا</h2>
        <button onClick={() => openReview()} className="btn btn-dark rounded-5">
          اكتب تقييم
        </button>
      </div>
      <div className="d-flex flex-wrap">
        {reviews &&
          reviews.map((el) => (
            <div key={el.documentId} className="col-12 col-md-4 p-2 ">
              <div
                className="col-12 p-2 p-lg-4 border rounded-5"
                id={styles.container}
              >
                <div>
                  {[...Array(5)].map((_, index) => (
                    <span
                      className="fs-2"
                      key={index}
                      style={{
                        color: index < Number(el.rating_no) ? "gold" : "#ccc",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="d-flex my-3 align-items-center gap-2">
                  <h5 className="m-0">{el.name}</h5>
                  <FcOk className="text-success fs-4" />
                </div>
                <p>{el.text_content}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
