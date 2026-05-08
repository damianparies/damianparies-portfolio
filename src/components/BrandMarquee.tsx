import {
  SiWordpress, SiCanva, SiShopify, SiGumroad, SiNotion,
  SiGrammarly, SiTiktok, SiInstagram, SiLinkedin,
  SiOpenai, SiClaude,
} from "@icons-pack/react-simple-icons";

const brands = [
  { name: "WordPress", Icon: SiWordpress },
  { name: "Canva", Icon: SiCanva },
  { name: "Shopify", Icon: SiShopify },
  { name: "Gumroad", Icon: SiGumroad },
  { name: "Notion", Icon: SiNotion },
  { name: "Grammarly", Icon: SiGrammarly },
  { name: "TikTok", Icon: SiTiktok },
  { name: "Instagram", Icon: SiInstagram },
  { name: "LinkedIn", Icon: SiLinkedin },
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Claude", Icon: SiClaude },
];

export function BrandMarquee() {
  return (
    <section className="border-y border-rule overflow-hidden py-5">
      <div className="marquee-track">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2 text-ink-soft whitespace-nowrap">
            <b.Icon size={18} className="text-ink-soft" />
            <span className="text-sm uppercase tracking-widest">{b.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
