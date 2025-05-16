import axios from "axios";
import { domain } from "../../zustand-store";

export const showCategorice = async (id ) => {
  let final = {
    name: "",
    data: []
  };

  try {
    const res = await axios.get(domain + `/api/categorices/${id}`, {
      params: {
        populate: {products : {populate : "*"}}, 
      },
    });

    final = {
      name: res.data.data.category_name,
      data : res.data.data,
    };
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error; 
  }

  return final;
};
