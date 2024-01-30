import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/CartSlice';
import { RootState } from '../store/store';

function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  function addItem(itemId: string) {
    dispatch(cartActions.addItem(+itemId));
  }
  function decreaseQuantity(itemId: string) {
    dispatch(cartActions.decreaseQuantity(+itemId));
  }
  function removeItem(itemId: string) {
    dispatch(cartActions.removeItem(+itemId));
  }
  return { cart, addItem, decreaseQuantity, removeItem };
}

export default useCart;
