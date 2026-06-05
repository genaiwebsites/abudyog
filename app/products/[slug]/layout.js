const productData = {
  'ab-health': {
    title: 'AB Health Gamma Oryzanol',
    desc: 'Concentrated Gamma Oryzanol nutraceutical supplements.',
  },
  'de-oiled-rice-bran': {
    title: 'De-Oiled Rice Bran (DORB)',
    desc: 'High-protein, low-fat animal feed foundation.',
  },
  'rice-bran-wax': {
    title: 'Rice Bran Wax',
    desc: 'Hard, crystalline natural vegetable wax.',
  },
  'rice-bran-gums': {
    title: 'Rice Bran Gums',
    desc: 'Natural emulsifier derived during oil degumming.',
  },
  'rice-bran-lecithin': {
    title: 'Rice Bran Lecithin',
    desc: 'Premium natural emulsifier and antioxidant.',
  },
  'fatty-acids-spent-earth': {
    title: 'Fatty Acids & Spent Earth',
    desc: 'Eco-friendly derivatives for industrial use.',
  }
};

export async function generateMetadata({ params }) {
  const unwrappedParams = await params;
  const product = productData[unwrappedParams.slug];
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.title,
    description: product.desc
  };
}

export default function ProductLayout({ children }) {
  return <>{children}</>;
}
