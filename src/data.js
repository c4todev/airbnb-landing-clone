const items = [
  {
    name: "Trending",
    icon: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    listings: [
      {
        id: 19,
        title: "Chic Urban Apartment",
        type: "Apartment",
        location: "Paris, France",
        price_per_night: 200,
        image:
          "https://images.unsplash.com/photo-1697788677786-ce57af5f19c8?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.25,
      },
    ],
  },

  {
    name: "Rooms",
    icon: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    listings: [
      {
        id: 1,
        title: "Cozy Studio in the Heart of the City",
        type: "Studio",
        location: "New York, NY",
        price_per_night: 100,
        image:
          "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.87,
      },
    ],
  },
  {
    name: "A-frames",
    icon: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
    listings: [
      {
        id: 3,
        title: "Secluded A-frame Cabin in the Woods",
        type: "Cabin",
        location: "Asheville, NC",
        price_per_night: 120,
        image:
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.12,
      },
    ],
  },
  {
    name: "Amazing pools",
    icon: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    listings: [
      {
        id: 5,
        title: "Luxury Villa with Infinity Pool",
        type: "Villa",
        location: "Bali, Indonesia",
        price_per_night: 500,
        image:
          "https://images.unsplash.com/photo-1603085429201-64dadaec4061?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.36,
      },
    ],
  },
  {
    name: "Windmills",
    icon: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
    listings: [
      {
        id: 7,
        title: "Quaint Windmill Cottage",
        type: "Cottage",
        location: "Amsterdam, Netherlands",
        price_per_night: 200,
        image:
          "https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.92,
      },
    ],
  },
  {
    name: "Vineyards",
    icon: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
    listings: [
      {
        id: 9,
        title: "Charming Vineyard Cottage",
        type: "Cottage",
        location: "Napa Valley, CA",
        price_per_night: 300,
        image:
          "https://images.unsplash.com/photo-1570127828934-c60aa3e1e5af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.8,
      },
    ],
  },
  {
    name: "Amazing views",
    icon: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    listings: [
      {
        id: 11,
        title: "Mountain Chalet with Panoramic Views",
        type: "Chalet",
        location: "Swiss Alps",
        price_per_night: 300,
        image:
          "https://images.unsplash.com/photo-1515496281361-241a540151a5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.5,
      },
    ],
  },
  {
    name: "Tiny homes",
    icon: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
    listings: [
      {
        id: 13,
        title: "Quirky Tiny House with Modern Amenities",
        type: "Tiny House",
        location: "Portland, OR",
        price_per_night: 80,
        image:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.95,
      },
    ],
  },
  {
    name: "Lake",
    icon: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    listings: [
      {
        id: 15,
        title: "Lakefront Retreat with Private Dock",
        type: "House",
        location: "Lake Tahoe, CA",
        price_per_night: 250,
        image:
          "https://images.unsplash.com/photo-1443827357341-5def682bb98b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.25,
      },
    ],
  },
  {
    name: "Cabins",
    icon: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    listings: [
      {
        id: 17,
        title: "Cozy Log Cabin in the Forest",
        type: "Cabin",
        location: "Gatlinburg, TN",
        price_per_night: 120,
        image:
          "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.65,
      },
    ],
  },
  {
    name: "Historical Homes",
    icon: "https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg",
    listings: [
      {
        id: 21,
        title: "Stately Manor House",
        type: "House",
        location: "Cotswolds, England",
        price_per_night: 300,
        image:
          "https://images.unsplash.com/photo-1607675706083-f04445de7b48?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.55,
      },
    ],
  },
  {
    name: "Iconic cities",
    icon: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    listings: [
      {
        id: 23,
        title: "Elegant Apartment in Central Rome",
        type: "Apartment",
        location: "Rome, Italy",
        price_per_night: 250,
        image:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.45,
      },
    ],
  },
  {
    name: "Boats",
    icon: "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
    listings: [
      {
        id: 25,
        title: "Sleek Catamaran Experience",
        type: "Catamaran",
        location: "Caribbean Sea",
        price_per_night: 600,
        image:
          "https://images.unsplash.com/photo-1590218087440-df21ca448c26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.15,
      },
    ],
  },
  {
    name: "Beachfront",
    icon: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    listings: [
      {
        id: 27,
        title: "Beachfront Bungalow Paradise",
        type: "Bungalow",
        location: "Maldives",
        price_per_night: 800,
        image:
          "https://images.unsplash.com/photo-1653569511862-8a0320ae66cc?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.38,
      },
    ],
  },
  {
    name: "Beach",
    icon: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    listings: [
      {
        id: 29,
        title: "Seaside Cottage Getaway",
        type: "Cottage",
        location: "Cornwall, England",
        price_per_night: 150,
        image:
          "https://images.unsplash.com/photo-1579297206620-c410c4af42e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.05,
      },
    ],
  },
  {
    name: "Countryside",
    icon: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    listings: [
      {
        id: 31,
        title: "Rural Farmhouse Retreat",
        type: "Farmhouse",
        location: "Tuscany, Italy",
        price_per_night: 250,
        image:
          "https://images.unsplash.com/photo-1658737868206-14fc953263bb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.74,
      },
    ],
  },
  {
    name: "Riads",
    icon: "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
    listings: [
      {
        id: 33,
        title: "Traditional Moroccan Riad Oasis",
        type: "Riad",
        location: "Marrakech, Morocco",
        price_per_night: 300,
        image:
          "https://images.unsplash.com/photo-1531217543955-63c89bf9a1b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.33,
      },
    ],
  },
  {
    name: "Bed & breakfasts",
    icon: "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
    listings: [
      {
        id: 35,
        title: "Quaint Bed & Breakfast in the Countryside",
        type: "Bed & Breakfast",
        location: "Provence, France",
        price_per_night: 120,
        image:
          "https://heyholidaytravelers.com/wp-content/uploads/2023/12/4avf-mmbu_m.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.28,
      },
    ],
  },
  {
    name: "Earth homes",
    icon: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
    listings: [
      {
        id: 37,
        title: "Sustainable Earth Home in the Forest",
        type: "House",
        location: "Oregon, USA",
        price_per_night: 150,
        image:
          "https://i.pinimg.com/originals/65/f7/3e/65f73ee44b5dfdf4ef4862f474735838.png",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.9,
      },
    ],
  },
  {
    name: "Lakefront",
    icon: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
    listings: [
      {
        id: 39,
        title: "Lakefront Chalet with Stunning Views",
        type: "Chalet",
        location: "Lake Como, Italy",
        price_per_night: 250,
        image:
          "https://a0.muscache.com/im/pictures/5b9da052-e41d-47e7-a420-b600b1b04f1c.jpg?im_w=720",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.58,
      },
    ],
  },
  {
    name: "Domes",
    icon: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
    listings: [
      {
        id: 41,
        title: "Geodesic Dome with Mountain Views",
        type: "Dome",
        location: "Colorado, USA",
        price_per_night: 180,
        image:
          "https://images.trvl-media.com/lodging/83000000/83000000/82999500/82999415/a5005c34.jpg?impolicy=resizecrop&rw=432&ra=fit",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.35,
      },
    ],
  },
  {
    name: "Skiing",
    icon: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
    listings: [
      {
        id: 43,
        title: "Ski-in/Ski-out Chalet",
        type: "Chalet",
        location: "Aspen, Colorado",
        price_per_night: 400,
        image:
          "https://www.skinewgen.com/wp-content/uploads/chalet-alya-meribel-exterior-3-1030x686.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.15,
      },
    ],
  },
  {
    name: "Castles",
    icon: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
    listings: [
      {
        id: 45,
        title: "Medieval Castle Stay",
        type: "Castle",
        location: "Edinburgh, Scotland",
        price_per_night: 1000,
        image:
          "https://www.celticcastles.com/media/img/bb1d12cf-2477-496f-8c97-f1ebf1c10486.jpg?width=1080&height=630&mode=crop&upscale=true&quality=30",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.2,
      },
    ],
  },
  {
    name: "Farms",
    icon: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    listings: [
      {
        id: 47,
        title: "Rustic Farmhouse Retreat",
        type: "Farmhouse",
        location: "Tuscany, Italy",
        price_per_night: 200,
        image:
          "https://images.squarespace-cdn.com/content/v1/5e1dad62f9d8514b273c732a/1619775186216-ED1BH5IF3N55Z34JG5MP/2020_Tuscany-1090417.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.72,
      },
    ],
  },
  {
    name: "Camping",
    icon: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
    listings: [
      {
        id: 49,
        title: "Glamping Tent in the Forest",
        type: "Tent",
        location: "Yosemite National Park, USA",
        price_per_night: 200,
        image:
          "https://media.glampinghub.com/CACHE/images/accommodations/accommodation_89644_listing_image_8c784c0229614340-glamping-35b76bf8-eb8c-4881-aa44-3450cbba2482/3054812da1f6cb53c0ea392ab754370d.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.88,
      },
    ],
  },
  {
    name: "National parks",
    icon: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
    listings: [
      {
        id: 51,
        title: "Cozy Cabin Near Yellowstone National Park",
        type: "Cabin",
        location: "Wyoming, USA",
        price_per_night: 250,
        image:
          "https://media.glampinghub.com/CACHE/images/accommodations/double-diamond-ranch-cabin-mesa-cabin-1489664292387/d2b82443a5f0cd4552c3f0620bf051aa.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.5,
      },
    ],
  },
  {
    name: "Design",
    icon: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
    listings: [
      {
        id: 53,
        title: "Modern Architectural Masterpiece",
        type: "House",
        location: "Los Angeles, CA",
        price_per_night: 400,
        image:
          "https://www.radiantcreativehomes.com/wp-content/uploads/2017/02/california-modern-radiant-homes-3.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.02,
      },
    ],
  },
  {
    name: "Treehouses",
    icon: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    listings: [
      {
        id: 55,
        title: "Luxury Treehouse Retreat",
        type: "Treehouse",
        location: "Costa Rica",
        price_per_night: 350,
        image:
          "https://explorersaway.com/wp-content/uploads/2023/08/bio-habitat-1.png.webp",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.55,
      },
    ],
  },
  {
    name: "Caves",
    icon: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
    listings: [
      {
        id: 57,
        title: "Unique Cave Dwelling Experience",
        type: "Cave",
        location: "Cappadocia, Turkey",
        price_per_night: 200,
        image:
          "https://www.serinnhouse.com/wp-content/uploads/deluxe-cave-room-img-6-1.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.85,
      },
    ],
  },
  {
    name: "OMG!",
    icon: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    listings: [
      {
        id: 59,
        title: "Unique Glass Igloo Experience",
        type: "Igloo",
        location: "Northern Lights, Finland",
        price_per_night: 500,
        image:
          "https://santaclausvillage.info/wp-content/uploads/2023/06/Glass-Igloos-at-Arctic-SnowHotel-360-degrees-view-of-the-Northern-Lights-2-1536x1229.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.96,
      },
    ],
  },
  {
    name: "Islands",
    icon: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
    listings: [
      {
        id: 61,
        title: "Private Island Paradise",
        type: "Island",
        location: "Fiji",
        price_per_night: 2000,
        image:
          "https://www.fijivacations.com/wp-content/uploads/2014/12/Laucala-peninsula-aerial.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.76,
      },
    ],
  },
  {
    name: "Mansions",
    icon: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    listings: [
      {
        id: 63,
        title: "Grand Luxury Mansion",
        type: "Mansion",
        location: "Beverly Hills, CA",
        price_per_night: 3000,
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389533505.jpg?k=c666d7a23129c464ccbf6e9f26f966e1b00afc6cbdc3296be84e23296d3f4342&o=&hp=1",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.42,
      },
    ],
  },
  {
    name: "Hanoks",
    icon: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
    listings: [
      {
        id: 65,
        title: "Traditional Hanok Stay",
        type: "Hanok",
        location: "Seoul, South Korea",
        price_per_night: 180,
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/373170865.jpg?k=0713fd60925feac92378aceeadfe113e56b293b6e8eddd8d59ee3570642e5e4f&o=&hp=1",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.1,
      },
    ],
  },
  {
    name: "Chef's kitchens",
    icon: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
    listings: [
      {
        id: 67,
        title: "Gourmet Kitchen Retreat",
        type: "House",
        location: "Napa Valley, CA",
        price_per_night: 400,
        image:
          "https://photos.zillowstatic.com/fp/0f1f4f59a4007e39a3ffa376f70e8951-cc_ft_960.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.47,
      },
    ],
  },
  {
    name: "New",
    icon: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
    listings: [
      {
        id: 69,
        title: "Brand New Urban Loft",
        type: "Loft",
        location: "Brooklyn, NY",
        price_per_night: 200,
        image:
          "https://images.ctfassets.net/6fq93lr5a9yn/3IolwwN5kZwnHaSiInnuw/b3b081881e526716ab2b30da4c8e1c4e/Herlo_for_website_intro.jpg?w=1382&q=70",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.65,
      },
    ],
  },
  {
    name: "Barns",
    icon: "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
    listings: [
      {
        id: 71,
        title: "Rustic Barn Conversion",
        type: "Barn",
        location: "Cotswolds, England",
        price_per_night: 150,
        image:
          "https://davidburr.co.uk/wp-content/uploads/2020/10/top-properties-barn.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.95,
      },
    ],
  },
  {
    name: "Containers",
    icon: "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg",
    listings: [
      {
        id: 73,
        title: "Unique Container Home",
        type: "House",
        location: "Los Angeles, CA",
        price_per_night: 250,
        image:
          "https://cdn.autonomous.ai/production/ecm/231031/prefab-container-homes-in-california-banner.webp",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.3,
      },
    ],
  },
  {
    name: "Play",
    icon: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
    listings: [
      {
        id: 75,
        title: "Fun-Filled Family Playground",
        type: "House",
        location: "Orlando, FL",
        price_per_night: 300,
        image:
          "https://images.adsttc.com/media/images/564f/1076/e58e/ce8c/4200/0411/large_jpg/%E6%B4%B2%E4%BB%94%E5%8C%97%E8%A1%97_%E6%BA%9C%E6%BB%91%E6%A2%AF_%E7%A9%BA%E9%96%93-233.jpg?1448022129",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.88,
      },
    ],
  },
  {
    name: "Tropical",
    icon: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    listings: [
      {
        id: 77,
        title: "Exotic Tropical Villa",
        type: "Villa",
        location: "Bali, Indonesia",
        price_per_night: 400,
        image:
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/476447458.jpg?k=12d634f4a8388d8e6d128829a32717ce2e102b54c2c0562c6c7411c5560870bf&o=&hp=1",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.68,
      },
    ],
  },
  {
    name: "Surfing",
    icon: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    listings: [
      {
        id: 79,
        title: "Surfer's Paradise Beach House",
        type: "House",
        location: "Hawaii, USA",
        price_per_night: 600,
        image:
          "https://www.hawaiianbeachrentals.com/images/products/property/p41318/p41318_full_6459446ea0e2d0.65414261.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.18,
      },
    ],
  },
  {
    name: "Off-the-grid",
    icon: "https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg",
    listings: [
      {
        id: 81,
        title: "Remote Eco-Friendly Retreat",
        type: "House",
        location: "Costa Rica",
        price_per_night: 300,
        image: "https://example.com/remote_eco_friendly_retreat.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.71,
      },
    ],
  },
  {
    name: "Campers",
    icon: "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg",
    listings: [
      {
        id: 83,
        title: "Vintage Camper Van Adventure",
        type: "Camper Van",
        location: "California, USA",
        price_per_night: 150,
        image: "https://example.com/vintage_camper_van.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.26,
      },
    ],
  },
  {
    name: "Arctic",
    icon: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
    listings: [
      {
        id: 85,
        title: "Arctic Cabin Adventure",
        type: "Cabin",
        location: "Norway",
        price_per_night: 300,
        image: "https://example.com/arctic_cabin.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.9,
      },
    ],
  },
  {
    name: "Golfing",
    icon: "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
    listings: [
      {
        id: 87,
        title: "Luxury Golf Resort Villa",
        type: "Villa",
        location: "Pebble Beach, CA",
        price_per_night: 1000,
        image: "https://example.com/luxury_golf_villa.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.58,
      },
    ],
  },
  {
    name: "Luxe",
    icon: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    listings: [
      {
        id: 89,
        title: "Ultra-Luxurious Penthouse",
        type: "Penthouse",
        location: "Dubai, UAE",
        price_per_night: 5000,
        image: "https://example.com/ultra_lux_penthouse.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.12,
      },
    ],
  },
  {
    name: "Cycladic homes",
    icon: "https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg",
    listings: [
      {
        id: 91,
        title: "Traditional Cycladic House with Sea View",
        type: "House",
        location: "Santorini, Greece",
        price_per_night: 300,
        image: "https://example.com/cycladic_house.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: Math.random() * 5 + 1,
      },
    ],
  },
  {
    name: "Top of the World",
    icon: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    listings: [
      {
        id: 93,
        title: "Mountain Summit Chalet",
        type: "Chalet",
        location: "Swiss Alps",
        price_per_night: 600,
        image: "https://example.com/mountain_summit_chalet.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.89,
      },
    ],
  },
  {
    name: "Ryokans",
    icon: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
    listings: [
      {
        id: 95,
        title: "Authentic Japanese Ryokan Experience",
        type: "Ryokan",
        location: "Kyoto, Japan",
        price_per_night: 400,
        image: "https://example.com/authentic_ryokan.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.78,
      },
    ],
  },
  {
    name: "Minsus",
    icon: "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg",
    listings: [
      {
        id: 97,
        title: "Traditional Korean Hanok Stay",
        type: "Hanok",
        location: "Jeonju, South Korea",
        price_per_night: 200,
        image: "https://example.com/traditional_hanok.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.9,
      },
    ],
  },
  {
    name: "Casas particulares",
    icon: "https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg",
    listings: [
      {
        id: 99,
        title: "Charming Casita in Old Havana",
        type: "Casita",
        location: "Havana, Cuba",
        price_per_night: 100,
        image: "https://example.com/charming_casita.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 3.78,
      },
    ],
  },
  {
    name: "Shepherd's huts",
    icon: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
    listings: [
      {
        id: 101,
        title: "Idyllic Shepherd's Hut Retreat",
        type: "Hut",
        location: "Cotswolds, England",
        price_per_night: 80,
        image: "https://example.com/idyllic_shepherds_hut.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.8,
      },
    ],
  },
  {
    name: "Ski-in/out",
    icon: "https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg",
    listings: [
      {
        id: 103,
        title: "Ski-in/Ski-out Chalet",
        type: "Chalet",
        location: "Whistler, Canada",
        price_per_night: 400,
        image: "https://example.com/ski_chalet.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.92,
      },
    ],
  },
  {
    name: "Creative spaces",
    icon: "https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg",
    listings: [
      {
        id: 105,
        title: "Inspiring Artist Studio Loft",
        type: "Loft",
        location: "Brooklyn, NY",
        price_per_night: 200,
        image: "https://example.com/artist_studio_loft.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.96,
      },
    ],
  },
  {
    name: "Houseboats",
    icon: "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
    listings: [
      {
        id: 107,
        title: "Cozy Houseboat Retreat",
        type: "Houseboat",
        location: "Amsterdam, Netherlands",
        price_per_night: 250,
        image: "https://example.com/cozy_houseboat.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.65,
      },
    ],
  },
  {
    name: "Desert",
    icon: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
    listings: [
      {
        id: 109,
        title: "Desert Oasis Retreat",
        type: "Desert",
        location: "Sahara Desert, Morocco",
        price_per_night: 200,
        image: "https://example.com/desert_oasis.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.66,
      },
    ],
  },
  {
    name: "Damussi",
    icon: "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg",
    listings: [
      {
        id: 111,
        title: "Traditional Dammusi with Sea Views",
        type: "Dammusi",
        location: "Pantelleria, Italy",
        price_per_night: 180,
        image: "https://example.com/traditional_dammusi.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.44,
      },
    ],
  },
  {
    name: "Grand Pianos",
    icon: "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg",
    listings: [
      {
        id: 113,
        title: "Elegant Mansion with Grand Piano",
        type: "Mansion",
        location: "Los Angeles, California",
        price_per_night: 1500,
        image: "https://example.com/elegant_mansion.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.35,
      },
    ],
  },
  {
    name: "Yurts",
    icon: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
    listings: [
      {
        id: 115,
        title: "Secluded Yurt Retreat",
        type: "Yurt",
        location: "Berkshire Mountains, Massachusetts",
        price_per_night: 200,
        image: "https://example.com/secluded_yurt_retreat.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.23,
      },
    ],
  },
  {
    name: "Towers",
    icon: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
    listings: [
      {
        id: 117,
        title: "Medieval Tower Castle",
        type: "Castle",
        location: "Tuscany, Italy",
        price_per_night: 500,
        image: "https://example.com/medieval_tower_castle.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.61,
      },
    ],
  },
  {
    name: "Adapted",
    icon: "https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg",
    listings: [
      {
        id: 117,
        title: "Medieval Tower Castle",
        type: "Castle",
        location: "Tuscany, Italy",
        price_per_night: 500,
        image: "https://example.com/medieval_tower_castle.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.79,
      },
    ],
  },
  {
    name: "Trulli",
    icon: "https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg",
    listings: [
      {
        id: 121,
        title: "Authentic Trullo Experience",
        type: "Trullo",
        location: "Alberobello, Italy",
        price_per_night: 200,
        image: "https://example.com/authentic_trullo_experience.jpg",
        distance: Math.floor(Math.random() * 1500),
        rating: 4.65,
      },
    ],
  },
];

export default items;
