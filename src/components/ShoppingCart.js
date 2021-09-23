import React from 'react';
import { useContext } from 'react';
import CartContext from '../contexts/CartContext';
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {
const ShoppingCart = () => {
	const cart = useContext(CartContext)
	const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{props.cart.map(item => (
			{cart.map(item => (
				<Item key={item.id} {...item} />
			))}

