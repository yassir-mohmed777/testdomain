import { useNavigate, useParams } from "react-router-dom";
import BlackSec from "../../HomePage/ui/Componants/BlackSec";
import MinHeader from "../ui/Componants/minHeader";
import ProductDetail from "../ui/Componants/ProductDetail";
import { useEffect, useState } from "react";
import ReviewSec from "../../HomePage/ui/Componants/ReviewSec";
import ProductImg from "../ui/Componants/ProductImg";
import  AllProduct  from "../../../All-Data/AllProduct";

export default function ProductDetailPage() {
  const [product, setProduct] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const product = AllProduct.find((p) => p.id === parseInt(productId));
    if (!product) {
      navigate("/error");
    } else {
      setProduct(product);
      // setImgUrl(product.product_img.url); 
    }
  }, [productId, navigate]);

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: "80vh" }}>
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="col-12">
      <div className="container">
        <MinHeader
          // productName={product.product_name}
          // catName={product.categorice.category_name}
          // catId={product.categorice.documentId}
        />
        <div className="col-12 d-flex flex-wrap flex-md-nowrap">
          <ProductImg product={product} productImg={imgUrl} setImg={setImgUrl} />
          <ProductDetail product={product} productImg={imgUrl} />
        </div>
        <ReviewSec />
        <BlackSec />
      </div>
    </div>
  );
}
