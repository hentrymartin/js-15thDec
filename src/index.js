
print();

function print() {
  // const a = new Number(10);
  // const name = new String('hentry');
  // console.log(typeof name, typeof a, name, a);
  // Async function in for loop
  // for (var i = 0; i < 10; i++) {
  //   (function(i) {
  //     setTimeout(() => {
  //       console.log(i);
  //     }, 1000);
  //   })(i);
  // }
  // Functional scope in for loop
  // for (var i = 0; i < 10; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 1000);
  // }
  // Block scope in for loop
  // for (let i = 0; i < 10; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 1000);
  // }
  // This object
  // const student = {
  //   mark: 100,
  //   getMark: function() {
  //     console.log(this);
  //   },
  // };
  // student.getMark();

  // 
  // const student = {
  //   mark: 100,
  //   getMark: function getMark() {
  //     console.log(this);
  //   }
  // };
  // var ref = student.getMark;
  // ref();

  // bind
  // const x = {
  //   a: 10,
  // };

  // const student = {
  //   mark: 100,
  //   getMark: function getMark(name, lastName) {
  //     console.log(this, name, lastName);
  //   }
  // };
  // var ref = student.getMark.bind(x, 'hentry', 'martin');
  // ref();

  // Apply
  // const x = {
  //   a: 10,
  // };

  // const student = {
  //   mark: 100,
  //   getMark: function getMark(name, lastName) {
  //     console.log(this, name, lastName);
  //   }
  // };
  // student.getMark.apply(x, ['hentry', 'martin']);

  // Object methods

  // const student = {};
  // Object.defineProperty(student, 'name', {
  //   value: 'hentry',
  //   writable: true,
  //   enumerable: true,
  // });

  // for (let prop in student) {
  //   console.log(student[prop]);
  // }

  // const keys = Object.keys(student);

  // console.log(keys);

  // for (let i = 0, len= keys.length; i < len; i++) {
  //   console.log(student[keys[i]]);
  // }

  // // Copies with reference
  // // const newStudent = student;

  //   // Copies without reference
  //   // const newStudent = {...student};

  //   // Copies without reference
  //   const newStudent = Object.assign({native: 'chennai'}, student);

  // newStudent.name = 'martin';

  // const {name} = newStudent;

  // console.log(student, name, 'newStudent');

  const fruits = ['banana', 'apple', 'orange', 'guava'];

  // Map
  const fruitsFormatted = fruits.map((fruit) => ({
    name: fruit,
  }));

  // Filter
  const filtered = fruits.filter((fruit, index) => index > 1);

  const copied = [...filtered];
  copied.push('pineapple');

  const copied1 = filtered.concat([]);
  console.log(copied, filtered, copied1);
}

// function Vehicle(type) {
//   this.type = type;
// }

// const vehicle = new Vehicle('2 wheeler');

// console.log(vehicle, 'bike');

// const bike = Object.create(vehicle, {
//   company: {
//     value: 'HONDA',
//   },
// });

// console.log(bike.type);


// function Vehicle(type) {
//   this.type = type;
// }

// const vehicle = new Vehicle('4 wheeler');

// function Car(company, model, type) {
//   this.company = company;
//   this.model = model;
// }

// Car.prototype = vehicle;

// const car = new Car('TATA', 'TIGOR');

// console.log(car.type, vehicle);







// const student = {
//   mark: 100,
//   getMark: function() {
//     console.log(this);
//   },
// };

// var ref = student.getMark;

// ref();



