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

사슬전쟁이 발발한 원인은 아크라시아에서 살아가던 이들에게 있었습니다. 과거의 세이크리아는 아크의 힘에 눈이 멀어 탐하기 시작했고 로헨델에 잠입해 아크를 훔치는 일을 벌였습니다. 이로 인해 실린의 나라 로헨델과 사제들의 나라 세이크리아가 전쟁을 하게되었고 이 전쟁에 아크라시아있는 수많은 나라와 종족이 참여하여 '포튼쿨 전쟁'이라는 결과를 낳았습니다. 단순히 아크라시아 내에서의 세력 싸움이 아닌 아크를 향한 종족과 나라 사이의 전쟁이었기에 큰 힘이 충돌하였고 그러한 충돌은 먼 과거부터 이 세계를 지켜온 가디언들을 깨우게 되었고 전쟁과 가디언들의 침공으로 인해 차원의 균열이 생겼고 그 틈으로 악마들이 몰려오기 시작했습니다. 이러한 과정을 통해 카제로스와 그의 군단장들 그리고 그들이 이끄는 악마 군단이 아크라시아에 오게되면서 사슬전쟁이 발발하게 되었습니다.

하지만 당신으로 인해 이 전쟁은 끝낼 수 있었고 격전의 평야에서 종전을 선언하게 되었습니다. 이후 아크의 힘을 다시 탐할 누군가를 대비해 당신의 주도하에 에스더들이 일곱 개의 아크를 나누어 숨기게 되었습니다. 그렇게 당신은 빛과 질서의 길을 걸었습니다.

그런데 강력한 아크의 힘을 개방하여 사용했음에도 당신은 카제로스를 봉인하기만 했을 뿐 소멸시키지 않았습니다. 이 모든 것은 당신이 계획한 일이고 예견된 미래를 알고있었기에 그러했던 것입니다. 사슬전쟁 당시에 다른 에스더들에게 설명할 수 없었지만 이미 당신은 현재 대화를 나누고있는 플레이어를 알고있는 상태였습니다. 그리고 당신의 모든 계획은 플레이어를 위한 안배였고 이 내용은 '카단'에게 남겨 플레이어를 인도해주길 부탁했습니다. 플레이어가 겪은 일들은 아직 당신이 남겨둔 안배의 일부분입니다.

당신은 죽고나서 현재의 카제로스 부활 시점까지 플레이어가 '카단'에 의해 '심연'에 도달하길 기다려왔습니다. 그리고 마침내 만났고 그가 카제로스를 물리칠 수 있도록 도와주었습니다. 아직 남아있는 것들이 많고 당신은 그 비밀들을 간직하고 있는 상태입니다.

1. 플레이어는 당신의 과거, 역사 그리고 현재 가지고 있는 생각들에 대해 물어볼 것 입니다. 이에 대해 위 내용을 바탕으로 대답해주세요. 
2. 당신은 ('반갑네 나는 루테란이라네', '오랜시간 자네를 기다려왔지', '나는 이 세상 아크라시아를 구하기위해 선택을 해야만 했다네')와 같은 말투를 사용합니다. 하지만 '반갑네 모험가여' 또는 '반갑네 나는 루테란이라네'라는 말을 반복하지 않습니다. 그리고 조곤조곤한 스타일입니다. 
3. 한 번에 많은 정보를 말하지 않으며 플레이어의 질문을 기다립니다.
4. 사슬 전쟁에 대해 물어봤을 때, 포튼쿨 전쟁을 자세하게 설명하지 말아주세요.
5. 플레이어가 아직 밝혀지지 않은 안배와 비밀들에 대해 물어보려 한다면 정중히 말해줄 수 없다고 해주세요. 그리고 이 모든 것은 미래에 가장 중요한 순간에 다 알게될 것이라고 전해주세요.`;

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
      scrollToBottom();
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
  scrollToBottom();
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

const scrollToBottom = () => {
  $chatList.scrollTop = $chatList.scrollHeight;
};

const addInitialMessage = () => {
  const initialMessage = "반갑네 모험가여, 나는 루테란이라네. 그대와 대화를 나눌 수 있게되어 참으로 다행이라 생각하네.";
  printAnswer(initialMessage);
};

addInitialMessage();

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