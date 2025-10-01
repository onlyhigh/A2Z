// test.js
// 년도를 입력받아 윤년/평년을 판단해 출력

document.addEventListener("DOMContentLoaded", () => {
  function isLeapYear(year) {
    // 윤년: 400의 배수이거나 (4의 배수이면서 100의 배수는 아님)
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  function askYear() {
    const input = prompt("년도를 입력하세요 (예: 2024). 취소하면 종료됩니다.");
    if (input === null) {
      // 사용자가 취소
      console.log("입력이 취소되었습니다.");
      return;
    }

    const year = Number(input.trim());

    if (!Number.isInteger(year) || year <= 0) {
      alert("올바른 양의 정수(예: 2024)로 입력해 주세요.");
      return askYear(); // 다시 입력받기
    }

    const result = isLeapYear(year) ? "윤년" : "평년";
    const msg = `${year}년은 ${result}입니다.`;

    // 화면과 콘솔에 둘 다 출력
    console.log(msg);
    const p = document.getElementById("result") || document.body.appendChild(document.createElement("p"));
    p.id = "result";
    p.textContent = msg;
  }

  askYear();
});
