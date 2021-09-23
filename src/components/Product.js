import React from 'react';
import { useContext } from 'react';
import ProductContext from '../contexts/ProductsContext';

const Products = () => {
	const {products, addItem} = useContext(ProductContext);
	return (
		<div className="products-container">
			{props.products.map(product => (
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
					addItem={addItem}
				/>
			))}
		</div>
