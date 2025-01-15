'use client';

import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"
import { useCartStore } from "@/stores/cart-store";

type Props = {
  item: Product;
}

export const ProductItem = ({item}: Props) => {
  const {toast} = useToast();
  const {upsertCartItem} = useCartStore(state => state);

  const handleAddButton = () => {
    upsertCartItem(item, 1);
   toast({title: "Produto adicionado ao carrinho:", description: item.name});
  }

  return (
    <div className="">
      <div className="rounded-md overflow-hidden">
        <div className="">
          <img src={item.image} alt={item.name} className="w-full h-32 object-cover"/>
        </div>
        <div className="mt-3 flex flex-col object-cover gap-2">
          <p className="text-lg">{item.name}</p>
          <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
          <Button className="" variant={"outline"} onClick={handleAddButton}>Adicionar</Button>
        </div>
      </div>
    </div>
  )
}

function upSertCartItem(item: Product, arg1: number) {
  throw new Error("Function not implemented.");
}
