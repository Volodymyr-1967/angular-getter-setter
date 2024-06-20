export class User {
  name: string;
  birthday: Date;

  constructor(name: string, birthday: Date) {
    this.name = name;
    this.birthday = birthday;
  }

  get age(): number {
    let todayYear = new Date().getFullYear();
    return todayYear - this.birthday.getFullYear();
  }

  set age(age: number) {
    let todayYear = new Date().getFullYear();
    this.birthday = new Date(todayYear - age, this.birthday.getMonth(), this.birthday.getDate());
  }

}

//   Object.defineProperty(this, "age", {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     }
//   });
// }
//
// get age(): number {
//   return (Object.getOwnPropertyDescriptor(this, "age")?.get as () => number).call(this);
// }

//   Как работает такой подход?
//
//   1. Object.getOwnPropertyDescriptor(this, "age"):
//      Этот метод возвращает дескриптор свойства для свойства age объекта this. Дескриптор свойства — это объект,
//      который содержит метаданные о свойстве, такие как геттер и сеттер, если они определены.
//
//   2. ?.get:
//     Оператор ?. — это опциональная цепочка (optional chaining). Он проверяет, существует ли дескриптор свойства и
//     содержит ли он метод get. Если дескриптор или метод get не существуют, выражение вернёт undefined.
//
//   3. as () => number:
//     Приведение типа. Мы знаем, что get является функцией, поэтому приводим её к типу функции, которая возвращает число.
//
//   4. .call(this):
//     Метод call вызывает функцию get, устанавливая this контекст для вызова. Это важно, потому что геттер должен быть вызван в контексте текущего объекта User.
//
//   Таким образом, вся строка return (Object.getOwnPropertyDescriptor(this, "age")?.get as () => number).call(this); выполняет следующее:
//
//     - Получает дескриптор свойства age текущего объекта User.
//     - Если дескриптор существует и содержит метод get, вызывается этот метод, устанавливая текущий объект User как
//    контекст вызова.
//     - Возвращает результат выполнения метода get.
//
//   Зачем использовать такую конструкцию?
//   Использование Object.getOwnPropertyDescriptor и call позволяет явно вызвать геттер, который был определён с помощью Object.defineProperty.
//   Это может быть полезно, если нужно быть уверенным, что вызывается именно этот геттер, даже если он переопределён где-то ещё в коде.
//
//   Однако, в большинстве случаев, достаточно использовать простой геттер.
