import iphone17Img from "../assets/iphone17.png";
import SamsungImg from "../assets/Samsung.png";
import oneplus12Img from "../assets/oneplus12.png";
import GoogleImg from "../assets/Google.png";
import google10proImg from "../assets/google10pro.png";
import oppofindx9proImg from "../assets/oppofindx9pro.png";
import vivov60Img from "../assets/vivov60.png";
import xiaomi15Img from "../assets/xiaomi15.png";
import honorwinImg from "../assets/honorwin.png";
import tecnocamonImg from "../assets/tecnocamon.png";
import lavablazeduo3Img from "../assets/lavablazeduo3.png";
import infinixnoteedgeImg from "../assets/infinixnoteedge.png";

const mobiles = [
  {
    id: 1,
    name: "iPhone 17",
    brand: "Apple",
    price: 470000,
    category: "premium",
    image: iphone17Img,
    specs: {
      storage: "256GB",
      camera: "120fps ya 240fps",
      battery: "100Health",
      batteryTimeing: "2 day",
    },
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 435000,
    category: "premium",
    image: SamsungImg,
    specs: {
      storage: "512GB",
      camera: "24fps, 4K",
      battery: "100%",
      batteryTimeing: "2 days",
    },
  },
  {
    id: 3,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 205000,
    category: "premium",
    image: oneplus12Img,
    specs: {
      ram: "12GB",
      storage: "256GB",
      battery: "100%",
      batteryTimeing: "4 days",
    },
  },
  {
    id: 4,
    name: "Google Pixel 7 Pro",
    brand: "Google",
    price: 96999,
    category: "mid-range",
    image: GoogleImg,
    specs: {
      storage: "256GB",
      camera: "50 MP",
      battery: "100%",
    },
  },
  {
    id: 5,
    name: "Google Pixel 10 Pro",
    brand: "Google",
    price: 300000,
    category: "premium",
    image: google10proImg,
    specs: {
      storage: "128GB",
      camera: "48 MP",
      battery: "100%",
      batteryTimeing: "3 days",
    },
  },
  {
    id: 6,
    name: "Oppo Find X9 Pro",
    brand: "Oppo",
    price: 240000,
    category: "mid-range",
    image: oppofindx9proImg,
    specs: {
      ram: "8GB",
      storage: "128GB",
      camera: "200 MP",
      battery: "100%",
    },
  },
  {
    id: 7,
    name: "Vivo V60",
    brand: "Vivo",
    price: 140000,
    category: "mid-range",
    image: vivov60Img,
    specs: {
      ram: "4GB",
      storage: "64GB",
      camera: "50 MP",
      battery: "100%",
    },
  },
  {
    id: 8,
    name: "Xiaomi 15 Pro",
    brand: "Xiaomi",
    price: 229999,
    category: "mid-range",
    image: xiaomi15Img,
    specs: {
      ram: "6GB",
      storage: "128GB",
      camera: "32 MP",
      battery: "100%",
    },
  },
  {
    id: 9,
    name: "Honor Wing",
    brand: "Honor",
    price: 187999 ,
    category: "mid-range",
    image: honorwinImg,
    specs: {
      ram: "8GB",
      storage: "128GB",
      camera: "12 MP",
      battery: "100%",
    },
  },
  {
    id: 10,
    name: "Tecno Camon",
    brand: "Tecno",
    price: 67000,
    category: "budget",
    image: tecnocamonImg,
    specs: {
      ram: "6GB",
      storage: "256GB",
      camera: "64 MP",
      battery: "100%",
    },
  },
  {
    id: 11,
    name: "Lava Blaze Duo 3",
    brand: "Lava",
    price: 30000,
    category: "budget",
    image: lavablazeduo3Img,
    specs: {
      ram: "12GB",
      storage: "512GB",
      camera: "8 MP",
      battery: "100%",
    },
  },
  {
    id: 12,
    name: "Infinix Note Edge",
    brand: "Infinix",
    price: 22000,
    category: "budget",
    image: infinixnoteedgeImg,
    specs: {
      ram: "6GB",
      storage: "128GB",
      camera: "13 MP",
      battery: "100%",
    },
  },
];

export default mobiles;
