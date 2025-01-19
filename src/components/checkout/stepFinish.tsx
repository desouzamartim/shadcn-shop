import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";


export const StepFinish = () => {
 
  const { name } = useCheckoutStore(state => state);
 


  const message = generateMessage();
  const linkZap = `https://wa.me/${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;

  return (
    <div className="text-center flec flex-col gap-5">
      <p className="text-sm">Perfeito <strong>{name}</strong>!</p>
      <p className="text-sm">Agora envie o seu pedido para o nosso whatsapp para concluir. Nosso atendente irá te guiar sobre o andamento do pedido.</p>
      <Button className="mt-4 w-full">
        <Link target="_blank" href={linkZap}>Enviar para o whatsapp</Link>
      </Button>
    </div>
  )
}