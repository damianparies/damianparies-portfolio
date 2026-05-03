import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { Reveal } from "@/components/Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Portfolio Gallery — Damian Paries" },
      { name: "description", content: "A curated gallery of work across theme pages, brands, and creative projects." },
      { property: "og:title", content: "Portfolio Gallery — Damian Paries" },
    ],
  }),
  component: GalleryPage,
});

type GalleryItem = { src: string; category: string };

const categories = ["All", "Vault XI", "Master Hustle", "Outerbanks", "Lusso Auto", "NLE Choppa"] as const;

const items: GalleryItem[] = [
  // VAULT XI
  ...[
    "v1777824340/IMG_6493_eaftjc.jpg",
    "v1777824318/Black_Beige_Simple_Typography_Cosmetic_Brand_Business_Card_-_2_zarhwz.jpg",
    "v1777824310/Black_Beige_Simple_Typography_Cosmetic_Brand_Business_Card_-_1_onq9jp.png",
    "v1777824309/IMG_6045_lid4e9.png",
  ].map((p) => ({ src: `https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/${p}`, category: "Vault XI" })),

  // MASTER HUSTLE
  ...[
    "v1777824350/IMG_1421_otcccy.png","v1777824327/IMG_1422_im4edd.png","v1777824327/IMG_8780_h0jt3p.png",
    "v1777824326/IMG_1400_pkiuqn.png","v1777824305/IMG_1420_e49xda.png","v1777824302/IMG_1413_s8ycwg.png",
    "v1777824289/IMG_1414_apzvgk.png","v1777824289/IMG_1418_qjkwut.png","v1777824288/IMG_1419_lrhewe.png",
    "v1777824286/IMG_1417_vtj184.png","v1777824283/IMG_1415_xgaa20.png","v1777824283/IMG_1416_zj80so.png",
    "v1777824280/IMG_1397_hpt90y.png","v1777824279/IMG_0016_ffiahi.png","v1777824276/IMG_1409_hglvsx.png",
    "v1777824274/IMG_1408_sc6xue.png","v1777824273/IMG_1407_ao7n5j.png","v1777824272/IMG_1404_vbar4d.png",
    "v1777824271/IMG_1406_vc2bph.png","v1777824271/IMG_1405_mpobkl.png","v1777824268/IMG_1084_e5m22b.png",
    "v1777824264/IMG_1391_vs00xq.png","v1777824262/IMG_1396_qfnijy.png","v1777824261/IMG_1394_nbm5vg.png",
    "v1777824260/IMG_1395_r3awq4.png","v1777824259/IMG_1393_yxeojr.png","v1777824257/IMG_1392_ddyozn.png",
    "v1777824253/IMG_3800_ggayhf.jpg","v1777824249/F287E9C0-0FAF-45FF-8792-1AAE0B09A42B_iuubji.png",
    "v1777824244/IMG_3894_bsno39.png","v1777824240/807CDBF2-8599-4001-9B87-9FDBC97E0D04_xgg1mr.png",
    "v1777824236/IMG_8743_amqjyh.jpg","v1777824228/IMG_6501_fna0qg.png","v1777824219/IMG_6134_nouyg0.png",
    "v1777824211/IMG_7287_shyzgk.png","v1777824210/IMG_7587_jvcwmd.jpg","v1777824207/IMG_6533_kd1yej.png",
    "v1777824198/IMG_4996_zb4gvj.png","v1777824162/B7F328B2-9F31-4D85-BD07-6E8F92B2DFD6_f71wun.png",
    "v1777824154/IMG_6061_thrrmd.png","v1777824152/IMG_5281_vwwbwn.png","v1777824151/IMG_5282_tjzu97.png",
    "v1777824148/IMG_5059_yby9mp.png","v1777824144/IMG_4466_ofpxfc.png",
    "v1777824139/35BC1D7C-917C-4DAC-B830-49E1A8370A7E_lhen1f.png","v1777824139/IMG_6455_nejnst.png",
    "v1777824132/IMG_4446_nwhkly.png","v1777824128/IMG_3136_exr5sv.jpg","v1777824127/IMG_3561_gcdvp2.png",
    "v1777824122/IMG_1169_shgmpf.png",
  ].map((p) => ({ src: `https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/${p}`, category: "Master Hustle" })),

  // OUTERBANKS
  ...[
    "v1777829197/IMG_2357_r55tmo.png","v1777824254/IMG_6453_ccltoo.png","v1777824204/IMG_0620_oni3c3.png",
    "v1777824203/IMG_7021_nbg7sm.png","v1777824201/IMG_7033_dgkmav.jpg","v1777824194/IMG_6337_sojj1r.png",
    "v1777824183/IMG_6331_jexjgc.png","v1777824174/IMG_6295_i8flbz.png","v1777824170/IMG_6296_vme8ws.jpg",
    "v1777824146/IMG_0618_dovmca.png","v1777824126/IMG_0703_mg5vcd.png","v1777824123/IMG_0702_xgm2sz.png",
    "v1777824101/IMG_1170_nkjh7n.jpg","v1777824097/IMG_0686_bggzpj.png","v1777824074/IMG_0972_dwisqg.jpg",
    "v1777824069/IMG_0971_wpzybc.jpg","v1777824063/IMG_0970_msbfb3.jpg","v1777824059/IMG_0969_m5s1jp.jpg",
    "v1777824050/IMG_0601_wktpgg.png","v1777824041/IMG_2633_z6cnyu.png","v1777824028/IMG_5839_vsj84g.png",
    "v1777824013/IMG_9799_cczjal.png","v1777824013/IMG_6101_pf5unf.jpg","v1777824013/IMG_6099_m2y3g4.jpg",
    "v1777824007/IMG_6098_w2ezxl.jpg","v1777824005/IMG_1291_ydixab.jpg","v1777824003/IMG_2704_pcguxj.jpg",
    "v1777824000/E9EE9DA1-F88C-44D1-B94A-ABB6529587A8_x6rjzi.jpg",
  ].map((p) => ({ src: `https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/${p}`, category: "Outerbanks" })),

  // LUSSO AUTO
  ...[
    "v1777824258/IMG_2601_tgdpfx.png","v1777824245/IMG_2602_kdwbik.png",
  ].map((p) => ({ src: `https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/${p}`, category: "Lusso Auto" })),

  // NLE CHOPPA
  ...[
    "v1777824011/IMG_7302_llthxh.png","v1777824003/IMG_9220_fvped9.jpg",
    "v1777823996/IMG_1798_oieqbh.jpg","v1777823996/IMG_1782_vb590l.jpg",
    "v1777823994/db83dbf0-8dc2-42f7-9adb-8cb5a5cf58c1_plicwq.jpg",
  ].map((p) => ({ src: `https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/${p}`, category: "NLE Choppa" })),
];

function GalleryPage() {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  const openLightbox = useCallback((idx: number) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightbox === null) return;
      setLightbox((lightbox + dir + filtered.length) % filtered.length);
    },
    [lightbox, filtered.length],
  );

  return (
    <div>
      {/* Header */}
      <section className="container-page pt-20 md:pt-28 pb-12">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-accent">Gallery</p>
          <h1 className="mt-4 text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            The work, up close.
          </h1>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="container-page pb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-all border ${
              active === cat
                ? "bg-accent text-accent-foreground border-accent"
                : "border-rule text-ink-soft hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Masonry Grid */}
      <section className="container-page pb-24 columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {filtered.map((item, i) => (
          <Reveal
            key={item.src}
            variant={i % 3 === 0 ? "scale" : i % 3 === 1 ? "fade" : "up"}
            delay={(i % 8) * 60}
            className="break-inside-avoid"
          >
            <button
              onClick={() => openLightbox(i)}
              className="group relative w-full overflow-hidden rounded-lg border border-rule block"
            >
              <img
                src={item.src}
                alt={`${item.category} project`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-xs uppercase tracking-widest text-accent">
                  {item.category}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
          >
            <X className="size-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 md:left-8 text-foreground/50 hover:text-foreground transition-colors"
          >
            <ChevronLeft className="size-8" />
          </button>

          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].category}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />

          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 md:right-8 text-foreground/50 hover:text-foreground transition-colors"
          >
            <ChevronRight className="size-8" />
          </button>

          <p className="absolute bottom-6 text-xs uppercase tracking-widest text-ink-soft">
            {filtered[lightbox].category} · {lightbox + 1} / {filtered.length}
          </p>
        </div>
      )}
    </div>
  );
}
