import styles from "./index.module.css";
import ButtonView from "../ButtonVeiw";
import ProductCart from "../PoductCart";
import ProductSliderPhone from "../ProductSliderPhone";
import product from '../../../../../All-Data/arrevalproduct'
export default function NewarivalSection() {


  return (
    <div className="col-12 my-5 ">
      <div className="container">
        <h2 className="text-center mb-3" id={styles.h2}>
       ألبضاعة الجديدة
        </h2>
        <div className="col-12">
          <ProductCart products={product} />
          <ProductSliderPhone products={product}/>
        </div>
        <ButtonView catID={"hhsv73wydbkc0z0tgmg8jn3p"} />
        <hr />
      </div>
    </div>
  );
}
