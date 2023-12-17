// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "꺄륵!" },
  { "number": 2, "message": "아 눈왔으면 좋겠다" },
  { "number": 3, "message": "주헌이가 너무 보고 싶은데 진짜 절대 볼 수가 없다는게 말이 안된다" },
  { "number": 4, "message": "뭔가 작은 잘못하고 아무렇지 ㅇ낳고 귀여운 내 얼굴이나 봐라 같은." },
  { "number": 5, "message": "유방댕이 제대 언제냐고요" },
  { "number": 6, "message": "유기현 제대해." },
  { "number": 7, "message": "이날 주사위 99999999@." },
  { "number": 8, "message": "zㅏ기야~ 크리스마스다!" },
  { "number": 9, "message": "형원이를 빼고 외모를 논하지 말라" },
  { "number": 10, "message": "당신의 토끼는 내가 데리고 있다." },
  { "number": 11, "message": "호우호우." },
  { "number": 12, "message": "0ㅠ0" },
  { "number": 13, "message": "크리스마스!!!" },
  { "number": 14, "message": "창균아 니가 내 미래고 니가 내 꿈이다" },
  { "number": 15, "message": "거북이가 군대를 갔다?이건 동물농장에 제보해야한다 진짜" },
  { "number": 16, "message": "엥? 누가 꽃이에요?" },
  { "number": 17, "message": "몬엑 완전체 언제 오세요?" },
  { "number": 18, "message": "훙엥" },
  { "number": 19, "message": "민혁아 살아는 있지..? 어디있니,, 너가 군대에 간 후로 군대 축제 이후로 너 소식을 못들었어,," },
  { "number": 20, "message": "원래 그거 하려고 했는데" },
  { "number": 21, "message": "너무 오글거려서 뺌 그 띄어쓰기 중요성 머시기" },
  { "number": 22, "message": "애기들 나보다 밥은 잘먹을 것 같아서 걱정은 안된다" },
  { "number": 23, "message": "진짜 아기 주헌 사랑해 언제 오냐고ㅠㅠㅠㅠㅠ 제대해서 어른되면 나 울어." },
  { "number": 24, "message": "원래 여기에 AI클스마스셔누 넣으려고 했는데 참았다." }
];

