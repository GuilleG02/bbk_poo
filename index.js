
// Crear la clase Person, con propiedades name, age y genre, y el método 
// obtDetails(), que muestra por consola las propiedades de la persona.


class Person {

  constructor (name, age, genre) {
    this.name = name;
    this.age = age;
    this.genre = genre;

  }

   obtDetails = () => {

    console.log(`Te llamas ${this.name}, tienes ${this.age} años y tu género es ${this.genre}.`)

  }

}

const Person1 = new Person ('Guille', 22, 'H');
Person1.obtDetails();


// Crear la clase Student, que hereda de Person, e incluye las propiedades 
// course y group y el método register(), que muestre por consola el resultado.

class Student extends Person {

  constructor (name, age, genre, course, group) {
    super(name,age,genre);
    this.course = course;
    this.group = group;

  }

  register = () => {

    console.log(`Mi curso es ${this.course} y soy del grupo ${this.group}.`)

  }

}

const Student1 = new Student ('Guille', 22, 'H', 4, 'C');
Student1.register();


// Crear la clase Teacher, que hereda de Person, e incluye las propiedades
// asignatura y level y el método assign(), que muestre por consola el resultado.


class Teacher extends Person {

  constructor (name, age, genre, asignature, level) {
    super(name,age,genre);
    this.asignature = asignature;
    this.level = level;

  }

  assign = () => {

    console.log(`Mi asignatura es ${this.asignature} del nivel ${this.level}.`)

  }

}


const Teacher1 = new Teacher ('Guille', 22, 'H', 'Ingles', 'B2');
Teacher1.assign();