# Iterator 패턴

Java 언어에서 arr 배열의 모든 요소를 표시하려면 다음과 같이 for문을 사용한다.
```Java
for(int i=0; i<arr.length; i++){
    System.out.println(arr[i]);
}
```
<br />

* 변수 i는 처음에 0으로 초기화되고, 1,2,3,···으로 증가한다.
* 그때마다 arr[i]의 내용이 표시된다.
* 첨자를 지정함으로써 많은 요소 중 하나를 선택할 수 있다.

<br />

```
arr[0]  첫 번째 요소 (0번째 요소)
arr[1]  그 다음 요소 (1번째 요소)
···
arr[i]  i번째 요소
···
arr[arr.length - 1] 마지막 요소
```
<h3> 앞 코드의 문제점은? </h3>

* 변수 arr 의 타입이 배열이 아닌 ArrayList로 바뀌면,
  * String[] arr    =>  ArrayList arr
* arr을 사용하는 부분은다음과 같이 변경되어야 함
  * arr.length  =>  arr.size()
  * arr[i]  =>  arr.get(i)
* <b>프로그램에서 arr을 사용하고 있는 곳들은 모두 이와 같이 변경해야 함</b>

∴ Iterator 패턴을 사용하면 해결할 수 있다

## Iterator 패턴 구조

![iteratorStructure](https://github.com/Ming0099/Study/assets/130200978/de82487d-019e-44d9-bcba-32859f7b268b)

의도 : 집합체의 내부 구조를 노출하지 않고 원소들을 순차적으로 검색하는 방법을 제공

<h3> Iterator(반복자)의 역할 </h3>

* 집합체의 요소들을 순서대로 검색하는 반복자를 나타내는 인터페이스
  * hasNext
    * 검색할 다음 원소가 있는지를 판단하는 role 메소드
      * 다음 원소가 있으면 true, 없으면 false 반환
  * next
    * 다음 원소를 반환하는 role 메소드
    * 예제에서, 동일한 이름의 메소드가 이 역할을 담당

<br />

<h3> ConcreteIterator의 역할 </h3>

* Iterator 인터페이스를 구현함
  * 즉 hasNext와 next 메소드를 구현함
* aggregate 속성
  * Aggregate 객체를 참조하는 role 속성

※ 검색할 원소들은 ConcreteIterator에서 가지고 있어 aggregate 속성 필요

<br />

<h3> Aggregate(집합체)의 역할 </h3>

* Iterator가 검색할 요소들을 가지고 있는 집합체를 나타내는 인터페이스
  * Iterator 메소드
    * Iterator 객체를 생성하여 반환하는 role 메소드

<br />

<h3> ConcreteAggregate의 역할 </h3>

* Aggregate 인터페이스 즉 iterator 메소드를 구현함
  * iterator 메소드에서 실제로 ConcreteIterator 객체를 생성 반환함


## 왜 Iterator 패턴이 유용한가?

집합체의 구현 방법 즉, 내부 구조를 변경하더라도 집합체의 원소를 검색하는 방법은 영향을 받지 않는다.

```Java
while(it.hasNext()){
    Book book = it.next();
    System.out.println(book.getName());
}
for(Book book: bookShelf){
    System.out.println(book.getName());
}
```
BookShelf의 구조를 배열이 아닌 ArrayList로 변경하더라도 main의 다음 코드는 영향이 없음

## 패턴의 적용 시점
1. Aggregate 객체의 내부 구조에 신경 쓰지 않고 저장되어 있는 객체들을 순차적으로 검색하고자 할 때
2. 하나의 aggregate 객체에 대해 여러 개의 검색 instance를 가지고자 할 때
3. 서로 다른 구조를 가진 집합체들에 저장되어 있는 원소들을 검색하기 위한 interface를 통일시키고자 할 때