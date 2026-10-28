export const menu = [
  {
    id: 'espresso-bar',
    name: { en: 'Espresso Bar', fr: 'Bar à Espresso' },
    note: {
      en: 'Pulled to order, one shot at a time.',
      fr: 'Tiré à la commande, un shot à la fois.',
    },
    items: [
      {
        name: { en: 'Espresso', fr: 'Espresso' },
        desc: { en: 'Single origin, short and concentrated.', fr: "D'origine unique, court et concentré." },
        price: 4.5,
      },
      {
        name: { en: 'Double Espresso', fr: 'Double Espresso' },
        desc: { en: 'Two shots, full body.', fr: 'Deux shots, pleine intensité.' },
        price: 5.5,
      },
      {
        name: { en: 'Macchiato', fr: 'Macchiato' },
        desc: { en: 'Espresso marked with a whisper of foam.', fr: 'Espresso marqué d’un nuage de mousse.' },
        price: 4.8,
      },
      {
        name: { en: 'Cortado', fr: 'Cortado' },
        desc: { en: 'Equal parts espresso and steamed milk.', fr: 'À parts égales, espresso et lait vapeur.' },
        price: 5.2,
      },
      {
        name: { en: 'Flat White', fr: 'Flat White' },
        desc: { en: 'Double ristretto, silken micro-foam.', fr: 'Double ristretto, micro-mousse soyeuse.' },
        price: 5.8,
      },
      {
        name: { en: 'Cappuccino', fr: 'Cappuccino' },
        desc: { en: 'Espresso, steamed milk, deep foam.', fr: 'Espresso, lait vapeur, mousse généreuse.' },
        price: 5.6,
      },
      {
        name: { en: 'Café Latte', fr: 'Café Latte' },
        desc: { en: 'Espresso lengthened with steamed milk.', fr: 'Espresso allongé de lait vapeur.' },
        price: 5.9,
      },
    ],
  },
  {
    id: 'signature-coffee',
    name: { en: 'Signature Coffee', fr: 'Café Signature' },
    note: {
      en: 'House creations, built around our seasonal blend.',
      fr: 'Créations maison, autour de notre mélange de saison.',
    },
    items: [
      {
        name: { en: 'House Signature Coffee', fr: 'Café Signature Maison' },
        desc: {
          en: 'Seasonal blend, milk, cocoa nib, orange zest.',
          fr: 'Mélange de saison, lait, éclats de cacao, zeste d’orange.',
        },
        price: 6.8,
      },
      {
        name: { en: 'Mocha', fr: 'Mocha' },
        desc: { en: 'Espresso, steamed milk, dark chocolate.', fr: 'Espresso, lait vapeur, chocolat noir.' },
        price: 6.2,
      },
      {
        name: { en: 'Caramel Noisette', fr: 'Caramel Noisette' },
        desc: {
          en: 'Espresso, steamed milk, toasted hazelnut, caramel.',
          fr: 'Espresso, lait vapeur, noisette torréfiée, caramel.',
        },
        price: 6.5,
      },
      {
        name: { en: 'Honey Lavender Latte', fr: 'Latte Miel & Lavande' },
        desc: {
          en: 'Espresso, steamed milk, wildflower honey, lavender.',
          fr: 'Espresso, lait vapeur, miel de fleurs sauvages, lavande.',
        },
        price: 6.7,
      },
    ],
  },
  {
    id: 'filter-coffee',
    name: { en: 'Filter Coffee', fr: 'Café Filtre' },
    note: {
      en: 'Brewed slowly, for drinking slowly.',
      fr: 'Infusé lentement, pour être bu lentement.',
    },
    items: [
      {
        name: { en: 'Batch Brew', fr: 'Café du Jour' },
        desc: { en: 'Rotating single origin, brewed daily.', fr: "Origine unique tournante, infusée chaque jour." },
        price: 4.8,
      },
      {
        name: { en: 'V60 Pour-Over', fr: 'V60 Filtre Manuel' },
        desc: {
          en: "Hand-poured to order — ask about today's origin.",
          fr: "Versé à la main sur commande — demandez l'origine du jour.",
        },
        price: 6.5,
      },
      {
        name: { en: 'Aeropress', fr: 'Aeropress' },
        desc: { en: 'Clean, concentrated, full of clarity.', fr: 'Net, concentré, d’une grande clarté.' },
        price: 6.0,
      },
      {
        name: { en: 'Cold Brew', fr: 'Cold Brew' },
        desc: { en: 'Steeped twenty hours, served over ice.', fr: 'Infusé vingt heures, servi sur glace.' },
        price: 6.2,
      },
    ],
  },
  {
    id: 'iced-coffee',
    name: { en: 'Iced Coffee', fr: 'Café Glacé' },
    note: {
      en: 'Built on ice, never watered down.',
      fr: 'Construit sur glace, jamais dilué.',
    },
    items: [
      {
        name: { en: 'Iced Latte', fr: 'Latte Glacé' },
        desc: { en: 'Double espresso, cold milk, ice.', fr: 'Double espresso, lait froid, glace.' },
        price: 5.9,
      },
      {
        name: { en: 'Iced Americano', fr: 'Americano Glacé' },
        desc: { en: 'Espresso, cold water, ice.', fr: 'Espresso, eau froide, glace.' },
        price: 4.9,
      },
      {
        name: { en: 'Iced Signature Coffee', fr: 'Café Signature Glacé' },
        desc: { en: 'Our seasonal blend, shaken over ice.', fr: 'Notre mélange de saison, secoué sur glace.' },
        price: 6.8,
      },
      {
        name: { en: 'Spanish Latte', fr: 'Latte Espagnol' },
        desc: {
          en: 'Espresso, condensed milk, cold milk, ice.',
          fr: 'Espresso, lait concentré, lait froid, glace.',
        },
        price: 6.4,
      },
    ],
  },
  {
    id: 'tea-other',
    name: { en: 'Tea & Other Drinks', fr: 'Thés & Autres Boissons' },
    note: {
      en: "For the table that isn't ordering coffee.",
      fr: 'Pour la table qui ne commande pas de café.',
    },
    items: [
      {
        name: { en: 'Pot of Loose-Leaf Tea', fr: 'Théière de Thé en Vrac' },
        desc: { en: 'Black, green or herbal — ask your barista.', fr: 'Noir, vert ou infusion — demandez à votre barista.' },
        price: 5.5,
      },
      {
        name: { en: 'Matcha Latte', fr: 'Matcha Latte' },
        desc: { en: 'Ceremonial grade matcha, steamed milk.', fr: 'Matcha de qualité cérémonielle, lait vapeur.' },
        price: 6.5,
      },
      {
        name: { en: 'Hot Chocolate', fr: 'Chocolat Chaud' },
        desc: { en: 'Dark chocolate, steamed milk.', fr: 'Chocolat noir, lait vapeur.' },
        price: 5.8,
      },
      {
        name: { en: 'Chai Latte', fr: 'Chai Latte' },
        desc: { en: 'House-spiced chai, steamed milk.', fr: 'Chai épicé maison, lait vapeur.' },
        price: 6.0,
      },
    ],
  },
  {
    id: 'pastries',
    name: { en: 'Pastries & Light Bites', fr: 'Pâtisseries & Encas' },
    note: {
      en: 'Baked each morning, in small batches.',
      fr: 'Cuites chaque matin, en petits lots.',
    },
    items: [
      {
        name: { en: 'Croissant', fr: 'Croissant' },
        desc: { en: 'Butter-laminated, baked each morning.', fr: 'Feuilleté au beurre, cuit chaque matin.' },
        price: 4.2,
      },
      {
        name: { en: 'Pain au Chocolat', fr: 'Pain au Chocolat' },
        desc: { en: 'Dark chocolate batons, flaky layers.', fr: 'Bâtons de chocolat noir, pâte feuilletée.' },
        price: 4.5,
      },
      {
        name: { en: 'Almond Croissant', fr: 'Croissant aux Amandes' },
        desc: {
          en: 'Twice-baked, almond cream, toasted flakes.',
          fr: 'Deux fois cuit, crème d’amande, amandes torréfiées.',
        },
        price: 5.2,
      },
      {
        name: { en: 'Seasonal Pastry', fr: 'Pâtisserie de Saison' },
        desc: { en: 'Changes with the season — ask your barista.', fr: 'Change selon la saison — demandez à votre barista.' },
        price: 5.0,
      },
      {
        name: { en: 'Banana Bread', fr: 'Banana Bread' },
        desc: { en: 'Walnut, dark chocolate, brown butter.', fr: 'Noix, chocolat noir, beurre noisette.' },
        price: 5.5,
      },
      {
        name: { en: 'Open-Face Tartine', fr: 'Tartine Ouverte' },
        desc: { en: 'Sourdough, whipped ricotta, seasonal fruit.', fr: 'Pain au levain, ricotta fouettée, fruits de saison.' },
        price: 8.5,
      },
    ],
  },
];
