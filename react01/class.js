/*
class.js
클래스와 객체

- 자바랑 비슷
*/

// 객체 --> 같은 목적을 갖는 변수와 함수들을 모아놓은 특수변수.
// 클래스 --> 객체 안에 내장될 기능들을 명시하는 자료구조를 정의한 코드블록

// 클래스에 포함되는 요소 : 변수, 생성자, getter, setter, 함수
// 객체는 클래스에 정의 되어있는 모든 기능을 부여받는다.
// 객체에 포함되는 변수: 멤버변수, 프로퍼티
// 객체에 포함되는 함수: 메서드

// class 이름 {...} ==> 클래스 이름은 대문자로 시작하는 것이 관례

class MyClass1 {
  // 생성자: 멤버변수를 정의하고 초기값을 할당하는 목적의 특수한 함수
  // 이름이 고정되어있다.

  constructor() {
    // 모든 멤버변수는 this를 명시하며 _ 로 시작하는 것이 관례
    this._num1 = 1;
    this._num2 = 2;
  }
}

// 객체 만들기 --> 클래스의 생성자에서 명시한 멤버변수를 부여받는다.
const my1 = new MyClass1();
console.log(my1._num1);
console.log(my1._num2);

/* 파라미터를 갖는 생성자 정의하기 */
// 필요하다면 생성자에 파라미터를 명시할 수 있다.
// 이 파라미터의 목적은 객체를 생성함과 동시에 멤버변수의 값을 결정하기 위함이다.

class MyClass2 {
  constructor(a, b) {
    this._num1 = a;
    this._num2 = b;
  }
}

const my2 = new MyClass2(100, 200);
console.log(my2._num1);
console.log(my2._num2);

// getter, setter
// 멤버변수에 값을 간접적으로 할당하거나 리턴하기 위한 목적의 특수한 함수
// 파라미터로 값을 넣어주지 않기때문에 간접적임!!! --> 처음보는 타입
class MyClass3 {
  constructor() {
    this._num = null;
  }

  get num1() {
    if (this._num1 < 0) {
      return 0;
    }
    return this._num1;
  }

  set num1(value) {
    if (value < 0) {
      value = 0;
    }
    this._num1 = value;
  }
}

const my3 = new MyClass3();
my3.num1 = -1; // setter를 통해 멤버변수에 간접적으로 값을 할당
console.log(my3.num1); // getter를 통해 멤버변수에 간접적으로 리턴받음
my3.num1 = 1;
console.log(my3.num1);

/* 메서드를 정의하는 함수 */
class Protose {
  constructor() {
    this._name = null;
    this._power = null;
  }

  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set power(value) {
    this._power = value;
  }
  get power() {
    return this._power;
  }

  // 클래스 내에서는 function 키워드를 사용하지 않으며 화살표 형식으로 사용할 수 없다.
  attack(target) {
    console.log(
      "%s(이)가 %s를 %d의 힘으로 공격합니다.",
      this._name,
      target,
      this._power
    );
  }
}

const p1 = new Protose();
p1.name = "드라군";
p1.power = 100;
p1.attack("마린");

/* 상속 */
// 클래스 간의 부모-자식 관계를 형성
// 자식은 부모의 모든 기능을 그대로 물려받는다.
// 자식클래스를 통해서, 부모의 기능을 확장하는 것으로 볼 수 있다.
class Zealot extends Protose {
  foo(target) {
    console.log("foo...");

    //부모에게 상속받은 기능 사용하기
    this.attack(target);
  }
}

class Dragon extends Protose {
  bar(target) {
    console.log("bar...");

    //부모에게 상속받은 기능 사용하기
    this.attack(target);
  }
}

const z1 = new Zealot();
z1.name = "질럿1";
z1.power = 50;

const z2 = new Zealot();
z2.name = "질럿2";
z2.power = 70;

const d1 = new Dragon();
d1.name = "드라군1";
d1.power = 100;

const d2 = new Dragon();
d2.name = "드라군2";
d2.power = 150;

z1.foo("본진");
d1.bar("본진");

z1.foo("멀티");
d1.bar("멀티");
