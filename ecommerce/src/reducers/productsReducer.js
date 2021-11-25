const initialState = {
  products: [
    {
      id: 1,
      productName: "Watch Band",
      description:
        "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
      actualPrice: "$50",
      listingPrice: "$39",
      // TODO use id
      category: "Watch band",
      compatibleWith: "Apple Watch 38mm, 40mm, 41mm",
      color: "Red Fusion",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0984/6842/products/Red-Fusion-38-40_1024x1024.jpg?v=1611006835",
      stock: 12,
    },
    {
      id: 2,
      productName: "Watch Band",
      description:
        "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
      actualPrice: "$50",
      listingPrice: "$39",
      // TODO use id
      category: "Watch band",
      compatibleWith: "Apple Watch 38mm, 40mm, 41mm",
      color: "Pomegrenate",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0984/6842/products/Pomegranate-40_1024x1024.jpg?v=1620410372",
      stock: 123,
    },
    {
      id: 3,
      productName: "Watch Band",
      description:
        "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
      actualPrice: "$50",
      listingPrice: "$39",
      // TODO use id
      category: "Watch band",
      compatibleWith: "Apple Watch 38mm, 40mm, 41mm",
      color: "Midnight Blue",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0984/6842/products/Sport_Loop-Midnight-40_1024x1024.jpg?v=1620410372",
      stock: 13,
    },
    {
      id: 4,
      productName: "Iphone Case",
      description:
        "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
      actualPrice: "$50",
      listingPrice: "$39",
      // TODO use id
      category: "Cases",
      compatibleWith: "Apple Watch 38mm, 40mm, 41mm",
      color: "Black",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0984/6842/products/12-Black_1024x1024.jpg?v=1604525686",
      stock: 67,
    },
    {
      id: 5,
      productName: "Iphone Case",
      description:
        "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
      actualPrice: "$50",
      listingPrice: "$39",
      // TODO use id
      category: "Cases",
      compatibleWith: "Apple Watch 38mm, 40mm, 41mm",
      color: "Sunflower",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0984/6842/products/12-Sunflower_1024x1024.jpg?v=1630739597",
      stock: 98,
    },
    {
      id: 6,
      productName: "Iphone Case",
      description:
        "Comfort. Day in, day out. Stretchable recycled yarn interwoven with silicone threads designed for ultra-comfort with no buckles or clasps.",
      actualPrice: "$50",
      listingPrice: "$39",
      // TODO use id
      category: "Cases",
      compatibleWith: "Apple Watch 38mm, 40mm, 41mm",
      color: "Mystery Flame",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0984/6842/products/12-Mystery-Flame_1024x1024.jpg?v=1606412986",
      stock: 121,
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DELETE_PRODUCT":
      const { productId } = payload;
      return {
        products: state.products.filter((prod) => prod.id !== productId),
      };
    case "ADD_PRODUCT":
      const { product } = payload;
      return {
        products: [...state.products, product],
      };
    default:
      return state;
  }
};

export default productsReducer;
