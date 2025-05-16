import CategoriceSec from "../ui/Componants/CategoriceSec";
import BlackSec from "../ui/Componants/BlackSec";
import ReviewSec from "../ui/Componants/ReviewSec";
import { useEffect, useState } from "react";
import { useData, useLoader, useReview } from "../../../zustand-store";
import { RevewRepo } from "../../../data/repos/RevewRepo";
import Brands from "../ui/Componants/Brands";
import { CatsRepo } from "../../../data/repos/Cat_Repo";
import HeroSection from "../ui/Componants/HeroSection";
import NewarivalSection from "../ui/Componants/NewarivalSection";
import TopSellingSection from "../ui/Componants/TopSellingSection";
export default function HomePages() {
  const { openLoader, closeLoader } = useLoader();
  const [products, setProducts] = useState();
  const { setData } = useData();
  const { setReviews } = useReview();



  return (
    <div className="col-12">
      <HeroSection />
      <Brands />
      <NewarivalSection />
      <TopSellingSection  />
      <CategoriceSec />
      <ReviewSec />
      <BlackSec />
    </div>
  );
}
