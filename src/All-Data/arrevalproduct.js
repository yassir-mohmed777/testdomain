import a from '../../public/arrevalImg/bn.png'
import b from '../../public/arrevalImg/n.webp'
import c from '../../public/arrevalImg/ne5.png'
import d from '../../public/arrevalImg/nn.png'
const products = [
  {
    id: 82,
    name: "تيشيرت للجيم",
    img: a,
    price: 110,
    newPrice: 90,
    description: "هذا التيشيرت المطبوع مثالي لأي مناسبة. مصنوع من قماش ناعم وقابل للتنفس، ويوفر راحة وأناقة فائقة.",
    popular: false,
    inStock: null,
    sizes: []
  },
  {
    id: 99,
    name: "حذاء أنيق",
    img: b,
    price: 160,
    newPrice: 150,
    description: "هذا التيشيرت المطبوع مثالي لأي مناسبة. مصنوع من",
    popular: true,
    inStock: null,
    sizes: []
  },
  {
    id: 109,
    name: "تيشيرت أنيق",
    img: c,
    price: 210,
    newPrice: 180,
    description: "هذا التيشيرت المطبوع مثالي لأي مناسبة. مصنوع من قماش ناعم وقابل للتنفس، ويوفر راحة فائقة.",
    popular: true,
    inStock: null,
    sizes: ["صغير", "متوسط", "كبير", "كبير جدًا"]
  },
  {
    id: 110,
    name: "تيشيرت بسيط",
    img: d,
    price: 150,
    newPrice: 110,
    description: "هذا التيشيرت المطبوع مثالي لأي مناسبة. مصنوع من قماش ناعم وقابل للتنفس، ويوفر راحة وأناقة فائقة.",
    popular: false,
    inStock: null,
    sizes: ["صغير", "متوسط", "كبير", "كبير جدًا"]
  },
];

export default products;