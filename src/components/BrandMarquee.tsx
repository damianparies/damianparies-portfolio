import {
  SiWordpress, SiCanvas, SiShopify, SiGumroad, SiNotion,
  SiGrammarly, SiTiktok, SiInstagram, SiClaude,
} from "@icons-pack/react-simple-icons";
import { Linkedin, Bot, Sparkles, Video, ShoppingBag } from "lucide-react";

const brands = [
  { name: "WordPress", Icon: SiWordpress },
  { name: "Canva", Icon: SiCanvas },
  { name: "Shopify", Icon: SiShopify },
  { name: "Gumroad", Icon: SiGumroad },
  { name: "Teespring", Icon: ShoppingBag, lucide: true },
  { name: "Notion", Icon: SiNotion },
  { name: "Grammarly", Icon: SiGrammarly },
  { name: "CapCut", Icon: Video, lucide: true },
  { name: "ChatGPT", Icon: Bot, lucide: true },
  { name: "Claude", Icon: SiClaude },
  { name: "Midjourney", Icon: Sparkles, lucide: true },
  { name: "TikTok", Icon: SiTiktok },
  { name: "Instagram", Icon: SiInstagram },
  { name: "LinkedIn", Icon: Linkedin, lucide: true },
];

export function BrandMarquee() {
  return (
    <section className="border-y border-rule overflow-hidden py-5">
      <div className="marquee-track">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2 text-ink-soft whitespace-nowrap">
            <b.Icon size={18} className="text-ink-soft" color="currentColor" />
            <span className="text-sm uppercase tracking-widest">{b.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
