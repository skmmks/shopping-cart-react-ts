import Button from '@material-ui/core/Button';

import { CartItemType } from '../App';

import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};
