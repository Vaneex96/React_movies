const arr = [
  {
    iso_639_1: "bi",
    english_name: "Bislama",
    name: "",
  },
];

const newArr = arr.map((item) => (item.name = "Ivan"));

console.log(newArr);
