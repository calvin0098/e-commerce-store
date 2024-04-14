const products = [
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
  {
    name: "Apple AirPods Pro",
    imageUrl: "https://gadgetsandmoreinc.com/wp-content/uploads/2021/05/71zny7BTRlL._AC_SL1500_.jpg",
    description: "The Apple AirPods Pro are wireless earbuds that feature active noise cancellation, transparency mode for hearing the world around you, and customizable fit with silicone ear tips. They provide immersive sound and have a sweat and water-resistant design.",
    price: 249,
    countInStock: 20
  },
  {
    name: "Sony WH-1000XM4 Wireless Noise-Canceling Over-Ear Headphones",
    imageUrl: "https://i.gadgets360cdn.com/large/sony_wh1000xm4_silver_1598940334899.jpg?downsize=950:*",
    description: "The Sony WH-1000XM4 headphones offer industry-leading noise cancellation, adaptive sound control, and speak-to-chat features. They provide high-quality sound with LDAC technology and have a comfortable design for long listening sessions.",
    price: 349.99,
    countInStock: 15
  },
  {
    name: "GoPro HERO9 Black",
    imageUrl: "https://futureforward.in/images/thumbs/010/0107072_gopro-hero-9-black.jpeg",
    description: "The GoPro HERO9 Black is a versatile action camera with 5K video and 20MP photos. It features HyperSmooth 3.0 video stabilization, a front-facing display, and is waterproof up to 33 feet. It also offers advanced features like TimeWarp 3.0 and HindSight.",
    price: 449.99,
    countInStock: 8
  },
  {
    name: "Samsung Galaxy Watch 3",
    imageUrl: "https://images.samsung.com/is/image/samsung/in/galaxy-note20/gallery/in-galaxy-watch3-r850-sm-r850nzsains-rperspectivemysticsilver-275071669?$684_547_JPG$",
    description: "The Samsung Galaxy Watch 3 is a stylish and advanced smartwatch with a rotating bezel for easy navigation. It offers health monitoring features like ECG, blood pressure tracking, and advanced sleep tracking. It also provides notifications, music streaming, and customizable watch faces.",
    price: 399.99,
    countInStock: 12
  },
  {
    name: "DJI Mavic Air 2 Drone",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/10/FR/EL/GB/112440801/dji-mavic-air-2-500x500.jpg",
    description: "The DJI Mavic Air 2 is a compact and powerful drone with a 48MP camera capable of 4K/60fps video recording. It features obstacle sensors for safer flying, intelligent shooting modes like SmartPhoto and FocusTrack, and up to 34 minutes of flight time.",
    price: 799,
    countInStock: 5
  }
];

module.exports = products;
