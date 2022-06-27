// Define data as an object and products as an array
// Each product is an object
const data = {
  products: [
    {
      _id: '1',
      name: 'Moon Lamp',
      slug: 'moon-lamp',
      category: 'Home-Decor',
      image: '/images/lamp.jpg',
      price: 29.99,
      stock: 0,
      brand: 'Bright',
      rating: 4.8,
      numReviews: 134,
      description: 'Lunar lamp with wooden stand',
    },
    {
      _id: '2',
      name: 'Floral Maxi Dress',
      slug: 'floral-maxi-dress',
      category: 'Clothing',
      image: '/images/maxi-dress.jpg',
      price: 79.99,
      stock: 20,
      brand: 'Lulus',
      rating: 4.5,
      numReviews: 602,
      description: 'Blush Pink Floral Maxi Dress',
    },
    {
      _id: '3',
      name: 'VR Headset',
      slug: 'VR-headset',
      category: 'Technology',
      image: '/images/VR-headset.jpg',
      price: 259.99,
      stock: 5,
      brand: 'Oculus',
      rating: 4,
      numReviews: 189,
      description: 'All in one Virtual Reality Headset',
    },
  ],
};

export default data;
