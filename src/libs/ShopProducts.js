import headset_1 from './../assests/airpods.png'
import headset_2 from  "./../assests/headphones_a_1.jpeg"
import headset_3 from  "./../assests/headphones_a_2.jpeg"
import headset_4 from  "./../assests/headphones_b_1.jpeg"
import headset_5 from  "./../assests/headphones_b_4.jpeg"
import earpod_1 from  "./../assests/earphones_b_1.jpeg"
import earpod_2 from  "./../assests/earphones_b_3.jpeg"
import bag from  "./../assests/bag.png";
import camera from  "./../assests/camera.png";
import glasses from  "./../assests/glasses.png";
import sandals from  "./../assests/sandals.png";
import towel from  "./../assests/towel.png";
import watch from  "./../assests/watch.png";
import main_watch from  "./../assests/main_watch.png";
import watch_1 from  "./../assests/watch 1.png";
import watch_2 from  "./../assests/watch_2.png";
import watch_3 from  "./../assests/watch_3.png";
import watch_4 from  "./../assests/watch_4.png";
import watch_5 from  "./../assests/watch_5.png";
import watch_6 from  "./../assests/watch_6.png";
import watch_7 from  "./../assests/smart_watch_1.jpeg";
import watch_8 from  "./../assests/smart_watch_2.jpeg";
import watch_9 from  "./../assests/smart_watch_3.jpeg";
import watch_10 from  "./../assests/smart_watch_4.jpeg";
import wine from  "./../assests/wine.png";
import drone from  "./../assests/drone.png";
import pad from  "./../assests/pad.png";
import shoe from  "./../assests/shoe.png";
import shoe_2 from  "./../assests/shoes_2.jpeg";
import shoe_3 from  "./../assests/shoes_3.jpeg";
import shoe_4 from  "./../assests/shoes_4.png";
import bag_2 from  "./../assests/Brown-bag.jpeg"
import shoe_5 from  "./../assests/women-shoes.jpeg"
import women_fash from  "./../assests/Women-cloth.jpeg"



const ProductData = [
  {
    id: 1,
    title: "Dior Hand Bag",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Women", "Accessories"],
    imgsrc: bag,
  },
  {
    id: 2,
    title: "Qyeee Glasses",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Women", "Accessories", "Men"],
    imgsrc: glasses,
  },
  {
    id: 3,
    title: "Gucci Towel",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Women", "Men"],
    imgsrc: towel,
  },
  {
    id: 4,
    title: "Quake Sandals",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Women", "Shoes"],
    imgsrc: sandals,
  },
  {
    id: 5,
    title: "Four Cousins Wine",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Food"],
    imgsrc: wine,
  },

  {
    id: 6,
    title: "JBL Headset",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: headset_1,
  },
  {
    id: 7,
    title: "Nikon Camera",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: camera,
  },

  {
    id: 8,
    title: "Smart Wriswatches",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets", "Men", "Accessories"],
    imgsrc: watch,
  },
  {
    id: 9,
    title: "Swatch Wriswatches",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Women"],
    imgsrc: main_watch,
  },
  {
    id: 10,
    title: "Fossil Wriswatches",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Men", "Women"],
    imgsrc: watch_1,
  },
  {
    id: 11,
    title: "Swatch Wriswatches",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Men", "Women"],
    imgsrc: watch_2,
  },
  {
    id: 12,
    title: "Armani Wriswatches",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Men"],
    imgsrc: watch_3,
  },
  {
    id: 13,
    title: "Rolex Wriswatches",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Men", "Women"],
    imgsrc: watch_4,
  },
  {
    id: 14,
    title: "Dior Wriswatches",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Women"],
    imgsrc: watch_5,
  },
  {
    id: 15,
    title: "Fossil Wriswatches",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Men"],
    imgsrc: watch_6,
  },

  {
    id: 16,
    title: "Apple Drone",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: drone,
  },
  {
    id: 17,
    title: "Drone Pad",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: pad,
  },
  {
    id: 18,
    title: "Nike Air",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Shoes", "Men", "Women"],
    imgsrc: shoe,
  },
  {
    id: 19,
    title: "Porodo Gaming Headset",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: headset_2,
  },
  {
    id: 20,
    title: "Apple smart watch",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Gadgets", "Men", "Women"],
    imgsrc: watch_7,
  },
  {
    id: 21,
    title: "Xbox Gaming Headset",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: headset_3,
  },
  {
    id: 22,
    title: "Oraimo Smart Watch",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Gadgets", "Men", "Women"],
    imgsrc: watch_8,
  },
  {
    id: 23,
    title: "Nike Air force anime",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Shoes", "Men", "Women"],
    imgsrc: shoe_2,
  },
  {
    id: 24,
    title: "Nike Air 7",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Shoes", "Men", "Women"],
    imgsrc: shoe_3,
  },
  {
    id: 25,
    title: "Nike Air jordans",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Shoes", "Men"],
    imgsrc: shoe_4,
  },
  {
    id: 26,
    title: "Jbl 8c",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: earpod_2,
  },
  {
    id: 27,
    title: "Jbl 8b",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: earpod_1,
  },
  {
    id: 28,
    title: "Oraimo 7 watch",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: watch_9,
  },
  {
    id: 29,
    title: "Apple 7 smart watch",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: watch_10,
  },
  {
    id: 30,
    title: "Nike Jordans 8",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Shoes", "Men", "Women"],
    imgsrc: shoe_4,
  },
  {
    id: 31,
    title: "Hunter Bag series",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Accessories", "Men", "Women"],
    imgsrc: bag_2,
  },
  {
    id: 32,
    title: "Chanel Shoes",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Shoes", "Women"],
    imgsrc: shoe_5,
  },
  {
    id: 33,
    title: "Women's Tees",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: [ "Women"],
    imgsrc: women_fash,
  },
  {
    id: 34,
    title: "Beats Headset",
    price: 3000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae adipisci nisi neque cumque eum architecto quasi earum totam iusto quos ex, tempora enim odio eos exercitationem nesciunt minus nobis.",
    tags: ["Gadgets"],
    imgsrc: headset_4,
  },
];

export default ProductData;