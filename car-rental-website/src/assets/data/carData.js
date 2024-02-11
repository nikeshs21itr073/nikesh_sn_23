// import all images from assets/images directory
import img01 from "../all-images/cars-img/tesla.png"
import img02 from "../all-images/cars-img/t.jfif"
import img03 from "../all-images/cars-img/b.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/a1.png";
import img08 from "../all-images/cars-img/r.jfif";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla ",
    imgUrl: img01,
    model: "Model 2020",
    price: 12000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the thrill of driving a Tesla . With a powerful Model 3 engine, it's perfect for those seeking both performance and luxury. The built-in GPS navigation and heated seats ensure a comfortable journey.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota",
    imgUrl: img02,
    model: "Model-2022",
    price: 10000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Take a ride in the Toyota Aventador, a true marvel of automotive engineering. Its Model-2022 variant offers top-notch performance with advanced GPS navigation and comfortable heated seats.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 14000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience luxury and performance with the BMW X3, 2022 model. With GPS navigation, heated seats, and automatic transmission, you're in for a comfortable and exhilarating journey.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 16000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Discover the elegance of the Nissan Mercielago, 2022 edition. With GPS navigation, heated seats, and automatic transmission, it promises a smooth and delightful ride.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 17500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Get behind the wheel of a Ferrari Camry, 2022 model. It offers a blend of style and performance, with GPS navigation and comfortable heated seats to make your journey a memorable one.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 13000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the luxury of the Mercedes Benz XC90, 2022 model. It combines elegance with advanced features, including GPS navigation and comfortable heated seats, for a delightful ride.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 2022",
    price: 12500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Cruise in style with the Audi Fiesta, Model 3. It offers a perfect balance of performance and luxury with GPS navigation and comfortable heated seats for a pleasurable journey.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 2021",
    price: 16900,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Indulge in luxury with the Rolls Royce Colorado, Model 3. It offers a premium experience with GPS navigation and comfortable heated seats, ensuring a grand and comfortable ride.",
  },
];

export default carData;
