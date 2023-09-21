/*
1. 이미지 동적으로 200개 생성
2. 이미지 소스가 로딩이 될 때 에러가 발생하는 시스템 이벤트 설정
3. 브라우저에서 마우스를 움직일 때마다 마우스 좌표값 구하기
4. 특정 수치값을 백분율화 하는 로직 처리
5. 이미지 소스가 모두 로딩되는 상태를 백분율로 변환
*/

/*
img노드 생성
src 속성 생성
src 속성 노드에 value = img/pic0~100.jpg
위 작업을 100번 반복을 돌리면서 append로 이미지 요소 반복 추가
*/

const section = document.querySelector('section');

const img = document.createElement('img');
const src = document.createAttribute('src');
src.value = 'img/pic200.jpg';
img.setAttributeNode(src);

section.append(img);
