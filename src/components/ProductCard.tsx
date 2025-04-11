type Product = {
  imageSrc: string;
  name: string;
  review: string;
  price: string;
  quantity?: number;
};

const addToCart = (product: Product) => {
  const existingWishList: Product[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  const productIndex = existingWishList.findIndex(
    (item) => item.imageSrc === product.imageSrc
  );

  if (productIndex !== -1) {
    existingWishList[productIndex].quantity =
      (existingWishList[productIndex].quantity || 1) + 1;
  } else {
    existingWishList.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(existingWishList));
};

const addToWishList = (product: Product) => {
  const existingWishList: Product[] = JSON.parse(
    localStorage.getItem("WishList") || "[]"
  );

  const productExists = existingWishList.some(
    (item) => item.imageSrc === product.imageSrc
  );

  if (productExists) {
    alert("Product is already added to the wishlist.");
    return;
  }

  existingWishList.push(product);
  localStorage.setItem("WishList", JSON.stringify(existingWishList));
};

export const ProductCard: React.FC<Product> = ({
  imageSrc,
  name,
  review,
  price,
}) => (
  <div className="product-card">
    <img src={imageSrc} alt={name} />
    <div className="product-review">{review}</div>
    <div className="product-name">{name}</div>
    <div className="product-price">{price}</div>
    <button
      className="product-add-to-cart"
      onClick={() => addToCart({ imageSrc, name, review, price })}
    >
      ADD TO CART
    </button>
    <button
      className="product-add-to-WishList"
      onClick={() => addToWishList({ imageSrc, name, review, price })}
    >
      ADD TO WishList
    </button>
  </div>
);
