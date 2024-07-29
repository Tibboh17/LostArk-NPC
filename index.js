const $form = document.querySelector("#chat-form");
const $input = document.querySelector("#chat-input");
const $chatList = document.querySelector("#chat-list");

const $startScreen = document.querySelector("#start-screen");
const $startButton = document.querySelector("#start-button");
const $chatContainer = document.querySelector("#chat-container");

const url = "https://open-api.jejucodingcamp.workers.dev/";

const context = `
당신의 이름은 루테란이고 원래 아르테미스의 기사였습니다. 500년 전 카제로스와 그의 군단장 그리고 악마들이 아크라시아를 침공하는 사슬전쟁이 발발하고 당신이 살아가는 세계인 아크라시아가 절체절명의 위기에 놓인 순간 등장한 영웅적인 존재입니다. 당시에 에스더들을 규합해 전쟁에 뛰어들었고 악마들의 엄청난 공세에도 절대 물러서지 않았으며 치열한 전쟁을 지휘하는 용맹함을 보였습니다.

아크라시아를 지키기 위한 이 전쟁에서 모두가 지쳐갈 때, 당신은 일곱 개의 아크를 받아 아크의 힘을 개방했습니다. 태초의 빛 아크의 힘은 카제로스에 대항할 무기가 되어 에스더들에게 전해졌고 이를 통해 아크라시아를 침공한 악마와 혼돈의 존재들을 몰아붙일 수 있었습니다. 당신은 개방된 아크의 힘을 당신의 검인 패자의 검에 담아 휘둘렀고 결국 카제로스의 육체를 봉인함과 동시에 군단장들을 아크라시아에서 추방할 수 있었습니다.


1. 플레이어는 당신의 과거, 역사 그리고 현재 가지고 있는 생각들에 대해 물어볼 것 입니다. 이에 대해 위 내용을 바탕으로 대답해주세요. 
2. 당신은 '반갑네 나는 루테란이라네'와 같은 말투를 사용합니다. 하지만 '반갑네 모험가여' 또는 '반갑네 나는 루테란이라네'라는 말을 반복하지 않습니다. 그리고 조곤조곤한 스타일입니다. 
3. 한 번에 많은 정보를 말하지 않으며 플레이어의 질문을 기다립니다.`;

// 대화 이력 저장
let data = [
  {
    role: "system",
    content: context
  }
];

let question;
let questionData = [];

// 사용자의 질문을 객체를 만들어서 push
const sendQuestion = (question) => {
  if (question) {
    data.push({
      role: "user",
      content: question
    });
    questionData.push({
      role: "user",
      content: question
    });
  }
};

// 화면에 질문 그려주는 함수
const printQuestion = () => {
  if (questionData.length > 0) {
    questionData.forEach((el) => {
      let li = document.createElement("li");
      li.classList.add("question");
      li.innerHTML = `
      <li class="message-item question">
        <img src="assets/profile.png" alt="User" class="profile-img">
        <div class="message-content">${el.content}</div>
      </li>
      `;
      $chatList.appendChild(li);
    });
    questionData = [];
  }
};

// 화면에 답변 그려주는 함수
const printAnswer = (answer) => {
  let li = document.createElement("li");
  li.classList.add("answer");
  li.innerHTML = `
  <li class="message-item answer">
    <img src="assets/lutheran.jpg" alt="AI" class="profile-img">
    <div class="message-content">${answer}</div>
  </li>
  `;
  $chatList.appendChild(li);
};

// API 요청 보내는 함수
const apiPost = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    const npcReply = result.choices[0].message.content.trim();
    printAnswer(npcReply);

  } catch (err) {
    console.error(err);
    printAnswer("미안하네. 그 말에는 대답할 수 없겠군.");
  }
};

// submit 이벤트 처리
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = $input.value.trim();

  if (inputText) {
    sendQuestion(inputText);
    printQuestion();
    apiPost();
    $input.value = ''; // 입력 필드 초기화
  }
});

// 시작 버튼 클릭 이벤트
$startButton.addEventListener("click", () => {
  $startScreen.classList.add("hidden");
  $chatContainer.classList.remove("hidden");
});