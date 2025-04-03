import "../styles/main.css";
interface ShopByCategoryProps {
  images: string[];
}

const ShopByCategory: React.FC<ShopByCategoryProps> = ({ images }) => {
  return (
    <section className="shopbycategory">
      {images.map((imageSrc, index) => (
        <div className="shopbycategory-div" key={index}>
          <img
            src={imageSrc}
            alt={`Category ${index + 1}`}
            className="shopbycategory-img"
          />
        </div>
      ))}
    </section>
  );
};

export default ShopByCategory;
