import image1 from '../assets/product_1.png';
import image2 from '../assets/product_2.png';
import image3 from '../assets/product_3.png';
import image4 from '../assets/product_4.png';

const Products = () => {
  return (
    <div className="content content--products">
      <h4 className="content__title">Products</h4>
      <ul className="content__list content__list--products">
        <li>
          <img src={image1} width="150" alt="Product 1" />
        </li>
        <li>
          <img src={image2} width="150" alt="Product 2" />
        </li>
        <li>
          <img src={image3} width="150" alt="Product 3" />
        </li>
        <li>
          <img src={image4} width="150" alt="Product 4" />
        </li>
      </ul>
    </div>
  );
};

export default Products;
