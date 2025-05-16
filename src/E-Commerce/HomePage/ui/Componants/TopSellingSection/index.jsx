import styles from './index.module.css'
import ProductCart from '../PoductCart'
import ButtonView from '../ButtonVeiw'
import ProductSliderPhone from '../ProductSliderPhone'
import product from '../../../../../All-Data/topsaling'

export default function TopSellingSection() {
  return (
     <div className="col-12 my-5">
         <div className="container">
           <h2 className="text-center mb-3" id={styles.h2}>الأعلى مبيعا</h2>
           <div className='col-12'>
           <ProductCart products={product} />
            <ProductSliderPhone products={product}/>
           </div>
           <ButtonView catID={"hk5u32h42xmyn48bmr1uw6gx"}/>
         </div>
       </div>
  )
}
