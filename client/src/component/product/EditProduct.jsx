import React, { useRef } from "react";

const EditProduct = ({ item, onEdit, onDelete }) => {
  const {
    brand,
    category1,
    category2,
    category3,
    category4,
    h_price,
    image,
    l_price,
    link,
    maker,
    mall_name,
    product_count,
    title,
    product_id,
  } = item;

  const formRef = useRef();
  const brandRef = useRef();
  const category1Ref = useRef();
  const category2Ref = useRef();
  const category3Ref = useRef();
  const category4Ref = useRef();
  const h_priceRef = useRef();
  const imageRef = useRef();
  const l_priceRef = useRef();
  const linkRef = useRef();
  const makerRef = useRef();
  const mall_nameRef = useRef();
  const product_countRef = useRef();
  const titleRef = useRef();

  const onEditHandler = (e) => {
    e.preventDefault();

    const editInfo = {
      product_id,
      title: titleRef.current.value,
      product_count: product_countRef.current.value,
      mall_name: mall_nameRef.current.value,
      maker: makerRef.current.value,
      link: linkRef.current.value,
      l_price: l_priceRef.current.value,
      image: imageRef.current.value,
      h_price: h_priceRef.current.value,
      category1: category1Ref.current.value,
      category2: category2Ref.current.value,
      category3: category3Ref.current.value,
      category4: category4Ref.current.value,
      brand: brandRef.current.value,
    };

    onEdit(editInfo);
  };

  const onDeleteHandler = (e) => {
    e.preventDefault();

    onDelete(product_id);
  };

  return (
    <div>
      <form ref={formRef}>
        <input ref={brandRef} type="text" name="brand" defaultValue={brand} />
        <input
          ref={category1Ref}
          type="text"
          name="category1"
          defaultValue={category1}
        />
        <input
          ref={category2Ref}
          type="text"
          name="category2"
          defaultValue={category2}
        />
        <input
          ref={category3Ref}
          type="text"
          name="category3"
          defaultValue={category3}
        />
        <input
          ref={category4Ref}
          type="text"
          name="category4"
          defaultValue={category4}
        />
        <input
          ref={h_priceRef}
          type="text"
          name="h_price"
          defaultValue={h_price}
        />
        <input ref={imageRef} type="text" name="image" defaultValue={image} />
        <input
          ref={l_priceRef}
          type="text"
          name="l_price"
          defaultValue={l_price}
        />
        <input ref={linkRef} type="text" name="link" defaultValue={link} />
        <input ref={makerRef} type="text" name="maker" defaultValue={maker} />
        <input
          ref={mall_nameRef}
          type="text"
          name="mall_name"
          defaultValue={mall_name}
        />
        <input
          ref={product_countRef}
          type="text"
          name="product_count"
          defaultValue={product_count}
        />
        <input ref={titleRef} type="text" name="title" defaultValue={title} />
        <button type="submit" onClick={onEditHandler}>
          변경
        </button>
        <button onClick={onDeleteHandler}>삭제</button>
      </form>
    </div>
  );
};

export default EditProduct;
