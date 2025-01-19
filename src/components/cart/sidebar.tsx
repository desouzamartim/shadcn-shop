'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { CartItem } from "./item"
import { useState } from "react"
import { CheckoutDialog } from "@/components/checkout/dialog"


export const CartSidebar = () => {

  const { cart } = useCartStore(state => state);

  let subtotal = 0;
  for(const item of cart) {
    subtotal += item.product.price * item.quantity;
  }

  const [checkoutOpen, setCheckoutIsOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart className="mr-2"/>
          <p>Carrinho</p>
          {cart.length > 0 && 
            <div className="bg-red-600 text-white rounded-full px-2 py-2 text-xs -right-1 -top-1 absolute"></div>
          }

        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}

        </div>
        <Separator className="my-4"/>
        <div className="flex justify-between items-center text-xs">
          <div className="">Subtotal:</div>
          <div className="">R$ {subtotal.toFixed(2)}</div>
        </div>
        <Separator className="my-4"/>
        <div className="text-center">
          <Button onClick={() => setCheckoutIsOpen(true)} disabled={cart.length === 0} >Finalizar compra</Button>
        </div>

        <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutIsOpen} />
      </SheetContent>
    </Sheet>
  )
}