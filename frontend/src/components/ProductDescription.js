const ProductDescription = ({ product }) => {
  const productDetails = product.description.specs;

  return (
    <>
      <p>{product.description.main}</p>
      {productDetails.map(prodDetail => (
        <p>- {prodDetail}</p>
      ))}
      <p>{product.description.details}</p>
    </>
  );
};

export default ProductDescription;
