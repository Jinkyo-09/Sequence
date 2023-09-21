const num = 200;
const section = document.querySelector('section');
const aside = document.querySelector('aside');
const lodingNum = document.querySelector('aside p span');
const imgs = creatImgs(section, 200);

function creatImgs(target, num) {
	for (let i = 0; i < num; i++) {
		const img = document.createElement('img');
		const src = document.createAttribute('src');
		src.value = `img/pic${i}.jpg`;
		img.setAttributeNode(src);
		target.append(img);
	}
	const imgs = target.querySelectorAll('img');
	let count = 0;
	imgs.forEach((img) => {
		//해당 돔에 수반되는 소스이미지가 로딩완료시 실행되는 이벤트
		img.onload = () => {
			count++;
			const percent = parseInt((count / num) * 100);
			lodingNum.innerText = percent;
			console.log('현재 로딩된 소스 이미지', count);
			if (count === num) {
				//동적으로 만들어진 이미지 요소의 소스 이미지가 렌더링 완료된 시점
				console.log('모든 소스 이미지 로딩 완료');
				aside.remove();
			}
		};
	});
	return imgs;
}

window.addEventListener('mousemove', (e) => {
	const percent = getPercent(e, num);
	activation(imgs, percent);
});

function getPercent(e) {
	const curPos = e.pageX;
	const wid = window.innerWidth;
	const percent = parseInt((curPos / wid) * num);
	return percent;
}

function activation(arr, index) {
	arr.forEach((el) => (el.style.display = 'none'));
	arr[index].style.display = 'block';
}
