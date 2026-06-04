import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileSpreadsheet, Sparkles } from 'lucide-react';

const productsData = {
  'dorb': {
    title: 'De-Oiled Rice Bran (DORB)',
    tag: 'Industrial / Feed',
    img: '/dorb_feed.png',
    desc: 'After crude oil has been extracted from the hard outer brown layer of rice after chaff (rice husk), De-Oiled Rice Bran (DORB) is obtained. DORB is widely used in the manufacture of poultry feed, cattle feed, and fish feed. It is also used for manufacturing sodium silicate, silica gel, insulation bricks, etc. Brands include Magik, A.B.U. Platinum, and A.B.U Premium.',
    grades: [
      { name: 'GRADE 1', specs: { Moisture: '10% – 12%', Protein: 'Min 16%', Fibre: 'Max 14%', 'Sand silica': 'Max 5%', Form: 'Powder and Pellets' } },
      { name: 'GRADE 2', specs: { Moisture: '10% – 12%', Protein: '15% – 18%', Fibre: '16% – 18%', 'Sand silica': 'Max 5%', Form: 'Powder and Pellets' } },
      { name: 'GRADE 3', specs: { Moisture: '10% – 12%', Protein: '15% – 18%', Fibre: '18% – 20%', 'Sand silica': 'Max 5%', Form: 'Powder and Pellets' } }
    ]
  },
  'gums': {
    title: 'Rice Bran Gums',
    tag: 'Cosmetics / Detergents',
    img: '/rice_bran_lecithin.png',
    desc: 'Rice Gums are sold in lubricants and detergent industry. After purification, it can be used as an emulsifying and stabilizing agent in food (eg, margarine, chocolate production), pharmaceutical, and cosmetic (eg, creams, lipsticks, conditioners) industries. When used as detergents it does not harm the fabric. Infact, it helps in retaining the shine of the clothes thus making it a NO. 1 natural product to be used in every household.',
    specs: { FFA: '7%', OIL: '10-15%', 'IODINE VALUE': '75-80', 'INSOLUBLE MATTER': '55%', 'ACID VALUE': '40%', 'SAP VAL': '82%' }
  },
  'lecithin': {
    title: 'Rice Bran Lecithin',
    tag: 'Nutraceuticals / Food',
    img: '/rice_bran_lecithin.png',
    desc: 'Rice Bran Lecithin exhibits an excellent combination of fatty acid profiles that are well balanced and has micronutrients and natural antioxidants. Therefore, RBL is an appealing option for those who choose non-genetically modified lecithin over other alternatives. It can act as an alternative to soybean and sunflower lecithins for food and industrial applications. RBL is rich in the matter that cannot be treated by saponification; therefore, it may be used for cosmetic applications.',
    specs: { FFA: '25%', MIV: '1%', Colour: 'Brown', 'Acid Value': '50' }
  },
  'wax': {
    title: 'Rice Bran Wax',
    tag: 'Cosmetics / Polishes',
    img: '/rice_bran_wax.png',
    desc: 'A hard, crystalline, high-melting vegetable wax obtained during the winterization of crude rice bran oil. Used extensively in cosmetics, pharmaceuticals, and industrial polishes as a natural, safe alternative to synthetic waxes.',
    specs: { 'Appearance': 'Hard brownish wax', 'Melting Point': '75-82°C', 'Saponification Value': '75-120', 'Nature': '100% Vegetable Derived' }
  },
  'fatty-acids-spent-earth': {
    title: 'Fatty Acids & Spent Bleaching Earth',
    tag: 'Industrial By-Products',
    img: '/refinery_plant.png',
    desc: 'AB Udyog recovers high-yield fatty acids and bleaching clays during the physical refining process. Rice Bran Fatty Acids are distilled derivatives used extensively in manufacturing paper coatings, candles, electric insulation, crayons, and industrial lubricants. Spent Bleaching Earth is a silicate clay residue collected after oil bleaching, which is recycled for cement manufacturing, boiler fuel mixture, or soil conditioning.',
    specs: {
      'Fatty Acid - Appearance': 'White semi-solid',
      'Fatty Acid - Acid Value': '180 - 185 mg KOH/gm',
      'Fatty Acid - Saponification': '192 – 198',
      'Fatty Acid - Total Fatty Matter': '99.5% Min',
      'Spent Earth - Moisture': '10% Max',
      'Spent Earth - Oil Content': '20% Max',
      'Spent Earth - Form': 'Dry clay powder'
    }
  }
};

const slugAlias = {
  'de-oiled-rice-bran': 'dorb',
  'rice-bran-wax': 'wax',
  'rice-bran-gums': 'gums',
  'rice-bran-lecithin': 'lecithin',
  'fatty-acid': 'fatty-acids-spent-earth',
  'spent-earth': 'fatty-acids-spent-earth',
  'lecithine': 'lecithin'
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const targetSlug = slugAlias[slug] || slug;
  const product = productsData[targetSlug];
  
  if (!product) return {};
  
  return {
    title: `${product.title} Technical Specifications`,
    description: `Detailed chemical specifications, grades, and industrial parameters for ${product.title} by AB Udyog.`
  };
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const targetSlug = slugAlias[slug] || slug;
  const product = productsData[targetSlug];
  
  if (!product) {
    notFound();
  }

  return (
    <div className="w-full pt-12 pb-24 bg-dot-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Back navigation link */}
        <div>
          <Link 
            href="/products" 
            className="text-accent hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold tracking-widest uppercase group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1 max-w-max active-press-sm"
          >
            <ArrowLeft size={14} className="transform group-hover:-translate-x-0.5 transition-transform" /> Back to Master Portfolios
          </Link>
        </div>

        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Premium visual card */}
          <div className="lg:col-span-5 relative w-full">
            <div className="lg:sticky lg:top-28">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-square md:aspect-[4/5] border border-accent/20 bg-background/50 backdrop-blur-sm p-1.5 group">
                <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden">
                  <Image 
                    src={product.img} 
                    alt={`${product.title} packaging mockup representation`} 
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover transform group-hover:scale-[1.03] transition-transform duration-[1000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent pointer-events-none" />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 premium-card rounded-2xl z-10 space-y-2">
                  <div className="bg-primary/80 backdrop-blur-md text-white border border-white/10 text-[9px] font-mono font-bold uppercase tracking-widest inline-block px-3.5 py-1.5 rounded-full">
                    {product.tag}
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif text-foreground font-bold leading-tight pt-1">
                    {product.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spec sheet */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-serif text-foreground font-bold leading-tight">
                {product.title}
              </h1>
              <p className="text-foreground/75 font-light text-sm md:text-base leading-relaxed">
                {product.desc}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <FileSpreadsheet size={16} />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-foreground font-bold">
                  Technical Specifications Sheet
                </h3>
              </div>
              
              {/* Dynamic Grades (DORB) vs Single Table Rendering */}
              {product.grades ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.grades.map((grade, idx) => (
                    <div 
                      key={idx} 
                      className="premium-card rounded-[2rem] p-6 flex flex-col"
                    >
                      <div className="bg-accent text-white text-[9px] font-mono font-bold px-3.5 py-1.5 rounded-full inline-block mb-6 tracking-widest uppercase self-start">
                        {grade.name}
                      </div>
                      <div className="space-y-3.5 flex-grow">
                        {Object.entries(grade.specs).map(([key, val]) => (
                          <div 
                            key={key} 
                            className="flex flex-col pb-3.5 border-b border-border/60 last:border-0 last:pb-0"
                          >
                            <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-0.5">
                              {key}
                            </span>
                            <span className="text-sm font-medium text-foreground">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="premium-card rounded-[2rem] p-6 md:p-8 overflow-hidden">
                  <div className="space-y-4">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div 
                        key={key} 
                        className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border/60 last:border-0 last:pb-0"
                      >
                        <span className="text-[10px] sm:text-xs font-bold text-foreground/50 uppercase tracking-widest w-full sm:w-1/3 mb-1 sm:mb-0">
                          {key}
                        </span>
                        <span className="text-sm md:text-base font-semibold text-foreground w-full sm:w-2/3 sm:text-right">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Action Request */}
            <div className="pt-6 border-t border-border">
              <Link 
                href={`/contact?product=${targetSlug}`} 
                className="bg-primary hover:bg-accent text-white hover:text-white px-8 py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full md:w-auto hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent active-press"
              >
                Inquire about wholesale supplies <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
