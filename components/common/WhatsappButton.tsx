import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";
const message = encodeURIComponent(
  "Hello! I found your website and would like to book a dental appointment."
);
export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600 active:scale-95"

    >

      <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8" />
    </a>
 
);
}
