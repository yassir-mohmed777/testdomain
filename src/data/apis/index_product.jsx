import axios from "axios";
import { domain } from "../../zustand-store";

export const indexProduct = async (
  pageNo,
  pageSize,
  categoryId = null,
  sortBy = "newest",
  minPrice = null,
  maxPrice = null
) => {
  let final = {
    total: 0,
    data: [],
  };

  const sortQuery = getSortQuery(sortBy);

  try {
    const res = await axios.get(domain + "/api/products", {
      params: {
        populate: "*",
        pagination: {
          page: pageNo,
          pageSize: pageSize,
        },
        filters: {
          ...(categoryId && {
            categorice: {
              documentId: {
                $eq: categoryId,
              },
            },
          }),
          ...(minPrice != null || maxPrice != null) && {
            product_new_price: {
              ...(minPrice != null && { $gte: minPrice }),
              ...(maxPrice != null && { $lte: maxPrice })
            }
          }
        },
        sort: sortQuery,
      },
    });

    final = {
      total: res.data.meta.pagination.total,
      data: res.data.data,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return final;
};

function getSortQuery(sortBy) {
  switch (sortBy) {
    case "product_new_price-asc":
      return "product_new_price:asc";
    case "product_new_price-desc":
      return "product_new_price:desc";
    case "product_name-asc":
      return "product_name:asc";
    case "newest":
    default:
      return "createdAt:desc";
  }
}
