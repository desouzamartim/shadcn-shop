import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  cartItem: Cart;
};

export const CartItemQuantity = ({ cartItem }: Props) => {

  const {upsertCartItem} = useCartStore(state => state);

  const handlePlusButton = () => {upsertCartItem(cartItem.product, 1)};
  const handleMinusButton = () => {upsertCartItem(cartItem.product, -1)};

  return (
    <div className="flex items-center gap-2">
      <Button onClick={handlePlusButton} className="size-8" variant={"outline"} size={"icon"}>
        <PlusIcon/>
      </Button>
      <div className="text-sm">{cartItem.quantity}</div>
      <Button onClick={handleMinusButton} className="size-8" variant={"outline"} size={"icon"}>
        <MinusIcon/>
      </Button>
    </div>
  )
}