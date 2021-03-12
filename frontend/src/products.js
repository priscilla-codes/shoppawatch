const products = [
  {
    _id: '1',
    name: 'Fossil Nate Stainless Steel Quartz Chronograph Watch',
    image: '/images/fossil4.jpg',
    brand: 'Fossil',
    description: {
      summary:
        'From an inky matte dial to brushed jet steel, Nate gives the all-black trend new depth. Use it to dress up your favorite pair of denim and a crisp, white tee. This Nate watch also features a chronograph movement on a stainless steel bracelet.',
      main:
        "From an inky matte dial to brushed jet steel, Nate gives the all-black trend new depth. Use it to dress up your favorite pair of denim and a crisp, white tee. This Nate watch also features a chronograph movement on a stainless steel bracelet. For a bold, oversized look that's certain to be noticed, choose Nate. Its clean, military-inspired design with oversized lugs and bold details offers a laid-backyet- rugged feel that is perfect for any adventure, day or night.",
      specs: [
        '50mm case, 24mm band width, mineral crystal, Quartz Chronograph movement, imported',
        '5 ATM: wearable around household sinks or while swimming in shallow water',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'There’s no better way to keep your favorite looks fresh than with our swappable, versatile watch straps. Our quick release pins allow you to change up your look as often as you like while maintaining your signature style. '
    },
    price: 98.99
  },
  {
    _id: '2',
    name: 'Timex Expedition Scout 40 Watch',
    image: '/images/timex.jpg',
    brand: 'Timex',
    description: {
      summary:
        'Water resistant to 50 meters (165 feet): In general, suitable for short periods of recreational swimming, but not diving or snorkeling',
      main:
        'This Timex Expedition watch is made from stainless steel and is powered by a quartz movement. It is fastened with a leather strap. The watch also has a date function.',
      specs: [
        '3ATM: withstands splashes or brief immersion in water but not swimming or bathing',
        '5 ATM: wearable around household sinks or while swimming in shallow water',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'Timex created revolutionary Indiglo backlight technology, changing how the world told time in the dark. Tested to withstand the elements, Timex Expedition watches are rugged tools built as a trusted companion for exploration.'
    },
    price: 43.99
  },
  {
    _id: '3',
    name:
      'Fossil Townsman Stainless Steel and Leather Casual Quartz Chronograph Watch',
    image: '/images/fossil2.jpg',
    brand: 'Fossil',
    description: {
      summary:
        'Fossil is inspired by American creativity and ingenuity. Bringing new life into the watch and leathers industry by making quality, fashionable accessories that are both fun and accessible.',
      main:
        'Fossil is inspired by American creativity and ingenuity. Bringing new life into the watch and leathers industry by making quality, fashionable accessories that are both fun and accessible. Taking our cues from 1960s-era architectural and automotive design, our Townsman has a clean, symmetrical style and elevated construction. Elegantly vaulted hands, beveled indices and a shapely case make this timepiece a classic for decades to come.',
      specs: [
        '3ATM: withstands splashes or brief immersion in water but not swimming or bathing',
        '5 ATM: wearable around household sinks or while swimming in shallow water',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'Customize your watch with complimentary engraving at a local Fossil store. Engraving is available at participating U.S. and Canadian full-priced and outlet Fossil stores. This service is not applicable on all accessories.'
    },
    price: 107.99
  },
  {
    _id: '4',
    name: 'Nine West Strap Watch',
    image: '/images/nine-west.jpg',
    brand: 'Nine West',
    description: {
      summary:
        'From jet setting adventures to the 9 to 5 grind, the iconic Slim Runway watch collection by Michael Kors provide luxurious style with a modern splash of trend-right touches',
      main:
        'The Michael Kors Slim Runway watch is polished perfection. A classic three-link bracelet and monochromatic sunray dial with stick indexes add up to a wear-with-everything timepiece that dresses up and down with ease.',
      specs: [
        '3ATM: withstands splashes or brief immersion in water but not swimming or bathing',
        '5 ATM: wearable around household sinks or while swimming in shallow water',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'Michael Kors is a world-renowned, award-winning designer of luxury accessories and ready-to-wear with an innate sense of glamour and an unfailing eye for timeless chic'
    },
    price: 29.99
  },
  {
    _id: '5',
    name: 'Michael Kors Slim Runway Stainless Steel Quartz Watch',
    image: '/images/michael-kors.jpg',
    brand: 'Michael Kors',
    description: {
      summary:
        'From jet setting adventures to the 9 to 5 grind, the iconic Slim Runway watch collection by Michael Kors provide luxurious style with a modern splash of trend-right touches',
      main:
        'The Michael Kors Slim Runway watch is polished perfection. A classic three-link bracelet and monochromatic sunray dial with stick indexes add up to a wear-with-everything timepiece that dresses up and down with ease.',
      specs: [
        '3ATM: withstands splashes or brief immersion in water but not swimming or bathing',
        '5 ATM: wearable around household sinks or while swimming in shallow water',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'Michael Kors is a world-renowned, award-winning designer of luxury accessories and ready-to-wear with an innate sense of glamour and an unfailing eye for timeless chic'
    },
    price: 118.99
  },
  {
    _id: '6',
    name: 'Michael Kors Pyper Three-Hand Stainless Steel Watch',
    image: '/images/michael-kors2.jpg',
    brand: 'Michael Kors',
    description: {
      summary:
        'Michael Kors frames a minimalist white dial with a splendid arrangement of angular tri-tonal links on this unique Pyper timepiece.',
      main:
        'Michael Kors frames a minimalist white dial with a splendid arrangement of angular tri-tonal links on this unique Pyper timepiece. From jet setting adventures to the 9 to 5 grind, the iconic Pyper watch collection by Michael Kors provide luxurious style with a modern splash of trend-right touches',
      specs: [
        'Movement: three-hand quartz',
        'Featuring a 38mm case, 18mm band width, scratch-resistant mineral crystal glass, Quartz movement with 3-hand analog display, imported ',
        'Round stainless steel case with a white dial. Tan leather band with clasp closure',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Water resistant to 50m (165ft): in general, suitable for short periods of recreational swimming, but not diving or snorkeling '
      ],
      details:
        'Michael Kors is a world-renowned, award-winning designer of luxury accessories and ready-to-wear with an innate sense of glamour and an unfailing eye for timeless chic'
    },
    price: 82.99
  },
  {
    _id: '7',
    name: 'Fossil Copeland Stainless Steel Quartz Watch',
    image: '/images/fossil7.jpg',
    brand: 'Fossil',
    description: {
      summary:
        'Fossil is inspired by American creativity and ingenuity. Bringing new life into the watch and leathers industry by making quality, fashionable accessories that are both fun and accessible.',
      main:
        'Fossil is inspired by American creativity and ingenuity. Bringing new life into the watch and leathers industry by making quality, fashionable accessories that are both fun and accessible. This 42mm Copeland features a black sunray dial, three-hand movement and a luggage leather strap.',
      specs: [
        'Silicone straps are waterproof and very comfortable to wear.',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Genuine luggage brown leather band with buckle closure; interchangeable with all Fossil 22mm bands',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'There’s no better way to keep your favorite looks fresh than with our swappable, versatile watch straps. Our quick release pins allow you to change up your look as often as you like while maintaining your signature style.'
    },
    price: 123.99
  },
  {
    _id: '8',
    name: 'Amazon Essentials Easy to Read Strap Watch',
    image: '/images/amazon-essentials.jpg',
    brand: 'Amazon Essentials',
    description: {
      summary:
        'From classic chronographs to the newest smartwatches, we’ve got the watch styles you love. The best part is that our wide selection of timepieces comes in enough styles, colors and designs to keep your style fresh and fun for years to come.',
      main:
        'From classic chronographs to the newest smartwatches, we’ve got the watch styles you love. The best part is that our wide selection of timepieces comes in enough styles, colors and designs to keep your style fresh and fun for years to come. Whether you’re looking for an everyday watch, something for a special occasion or a gift for loved ones, you’ll find it here. We’ve got the leather strap watches, stainless steel, mesh and silicone for whatever material suits you best.',
      specs: [
        'Domed mineral crystal lens',
        'Matte black dial with silver-tone luminous hands and easy to read white Arabic numerals; printed outer minute track',
        "Date Calendar window at 3 o'clock",
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'Our watch straps, bands and bracelets are designed for ease of use, simple adjustability and total comfort. With our Fast Wrap and quick-release options, you get tool-free interchangeability and a great fit on any wrist.'
    },
    price: 20.99
  },
  {
    _id: '9',
    name: 'Apple Watch Series 5',
    image: '/images/apple.jpg',
    brand: 'Apple',
    description: {
      summary:
        'Apple Watch Series 5 has a display that’s always on, showing the time and important information—no need to raise your wrist.',
      main:
        'Apple Watch Series 5 has a display that’s always on, showing the time and important information—no need to raise your wrist. It helps you navigate with the built-in compass. Lets you check on your heart with the ECG app.1 Tracks your workouts and activity. And makes it easy to connect with the people and information you care about, right from your wrist.',
      specs: [
        '3ATM: withstands splashes or brief immersion in water but not swimming or bathing',
        '5 ATM: wearable around household sinks or while swimming in shallow water',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'Accessories will not be original, but will be compatible and fully functional. Product may come in generic Box. This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.'
    },
    price: 272.99
  },
  {
    _id: '10',
    name: 'Fossil Nate Stainless Steel Quartz Chronograph Watch',
    image: '/images/fossil5.jpg',
    brand: 'Fossil',
    description: {
      summary:
        'The Fossil Nate JR1401 Chronograph Wristwatch for men is as versatile as it is beautiful. The dial has a tough coating, and the bands are constructed out of a stainless steel material. ',
      main:
        'The Fossil Nate JR1401 Chronograph Wristwatch for men is as versatile as it is beautiful. The dial has a tough coating, and the bands are constructed out of a stainless steel material. If you wear one of these watches, everyone will notice its face. You’ll never have problems reading the time.',
      specs: [
        'Three-hand Quartz: This watch movement features a quartz crystal that oscillates when a current is applied to it.',
        'Multifunction: A Quartz movement with three separate sub-eyes for the day of the week, date of the month and 24-hour time.',
        'Case size: 50mm; Band size: 24mm; quartz movement with 3-hand analog display; scratch-resistant mineral crystal lens lens.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Chronograph: A multifunction watch with stopwatch functionality.'
      ],
      details:
        'You can also scuba dive and snorkel while wearing the Fossil Nate JR1440 Chronograph Wristwatch for men. The components in these watches will stay protected because the housing has a 5 ATM depth attribute. Over time, as the watch ages, the stainless steel material will prevent severe staining and rusting. A durable container is included with this product as well; it has a lid that keeps dust off the watch and accessories.'
    },
    price: 20.99
  },
  {
    _id: '11',
    name: 'Casio G-Shock Green Power Trainer Watch ',
    image: '/images/casio_g-shock.jpg',
    brand: 'Casio',
    description: {
      summary:
        'From G-Shock, this timepiece is the latest addition to their new Power Trainer sports lineups',
      main:
        'From G-Shock, this timepiece is the latest addition to their new Power Trainer sports lineup. The watch is designed with a 49.5mm green resin case and black dial. This timepiece links with the G-Shock Connected phone app to provide access to a number of functions that enhance workouts. Daily health and fitness support functions include a 3-axis accelerometer that keeps track of step counts, a Multi-Timer that lets you create up to 20 timer combinations of five timers each, memory for up to 200 lap records, and more.',
      specs: [
        '3ATM: withstands splashes or brief immersion in water but not swimming or bathing',
        '5 ATM: wearable around household sinks or while swimming in shallow water',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        'Daily health and fitness support functions include a 3-axis accelerometer that keeps track of step counts, a Multi-Timer that lets you create up to 20 timer combinations of five timers each, memory for up to 200 lap records, and more'
    },
    price: 99.99
  },
  {
    _id: '12',
    name: 'Fossil FB-03 Stainless Steel Dive-Inspired Casual Quartz Watch',
    image: '/images/fossil6.jpg',
    brand: 'Fossil',
    description: {
      summary:
        'Fossil is inspired by American creativity and ingenuity. Bringing new life into the watch and leathers industry by making quality, fashionable accessories that are both fun and accessible.',
      main:
        'Fossil is inspired by American creativity and ingenuity. Bringing new life into the watch and leathers industry by making quality, fashionable accessories that are both fun and accessible. Dive in to the latest addition to the Fossil Blue collection, FB-03. Expanding on the rugged design of FB-01, this addition introduces chronograph functionality.',
      specs: [
        'Silver-plated stainless steel bracelet with deployant clasp',
        '5 ATM: wearable around household sinks or while swimming in shallow water',
        'Our high-quality leather is known for its softness and ability to look good over time.',
        'Stainless steel bracelets are extremely durable and can last the lifetime of a watch with proper care.',
        'Multifunction: Movement built into three separate sub-eyes for the day of the week, date of the month, and 24-hour time.'
      ],
      details:
        "Fossil has always been inspired by creativity and ingenuity. We've strived to bring new life into the industry by making quality, fashionable watches and accessories that are both fun and accessible."
    },
    price: 79.99
  }
];

export default products;
