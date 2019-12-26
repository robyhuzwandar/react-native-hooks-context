const people = [
  {name: 'Katalog', age: 36},
  {name: 'Katalog2', age: 24},
  {name: 'Katalog3', age: 44},
];

const getCatalog = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people);
    }, 3000);
  });
};

export default getCatalog;
