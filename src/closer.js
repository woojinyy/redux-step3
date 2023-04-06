function init() {
    let name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
    function displayName() { // displayName() 은 내부 함수이며, 클로저다.
      alert(name); // 부모 함수에서 선언된 변수를 사용한다.
    }
    displayName();
  }
  init();
