const ProductDescription = ({ product }) => {
  const productDetails = product.description.specs;

  return (
    <>
      <p>{product.description.main}</p>
      <ul>
        {productDetails.map(prodDetail => (
          <li>{prodDetail}</li>
        ))}
      </ul>
      <p>{product.description.details}</p>
    </>
  );
};

export default ProductDescription;
