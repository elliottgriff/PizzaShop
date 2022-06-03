import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import bannerImage from '../../assets/pizzaBanner.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Pizza</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={bannerImage} alt="a table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
