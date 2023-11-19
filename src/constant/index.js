import {
  instagram,
  facebook,
  youtube,
  product1,
  product2,
  product3,
  product4,
} from "../assets";

import {
  shipping,
  money,
  lock,
  telephone,
  instagramIcon,
  facebookIcon,
  youtubeIcon,
} from "./Icons";

const social = [
  {
    name: "instagram",
    icon: instagram,
    iconW: instagramIcon,
    link: "https://www.instagram.com/",
  },
  {
    name: "facebook",
    icon: facebook,
    iconW: facebookIcon,
    link: "https://www.facebook.com/",
  },
  {
    name: "youtube",
    icon: youtube,
    iconW: youtubeIcon,
    link: "https://www.youtube.com/",
  },
];

const products = [
  {
    id: 1,
    image: product1,
    name: "Loveseat Sofa",
    price: 400,
    discount: 50,
  },
  {
    id: 2,
    image: product2,
    name: "Table Lamp",
    price: 29,
    discount: null,
  },
  {
    id: 3,
    image: product3,
    name: "Beige Table Lamp",
    price: 149,
    discount: null,
  },
  {
    id: 4,
    image: product4,
    name: "Loveseat Sofa",
    price: 24,
    discount: null,
  },
  {
    id: 5,
    image: product1,
    name: "Loveseat Sofa",
    price: 149,
    discount: null,
  },
];

const value = [
  {
    id: 1,
    icon: shipping,
    title: "Free Shipping",
    desc: "Order above $200",
  },
  {
    id: 2,
    icon: money,
    title: "Money-Back",
    desc: "30 days guarantee",
  },
  {
    id: 3,
    icon: lock,
    title: "Secure Payment",
    desc: "Secured by Stripe",
  },
  {
    id: 4,
    icon: telephone,
    title: "24/7 Support",
    desc: "Phone and Email support",
  },
];

export { social, products, value };
