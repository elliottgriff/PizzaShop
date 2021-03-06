import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonHighlighted ? classes.bump : ''
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonHighlighted(true);
    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
