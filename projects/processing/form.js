document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Form 기본 제출 막기

    // 폼 데이터 수집
    const formData = {
        firstName: document.getElementById('firstNameInput').value,
        email: document.getElementById('emailInput').value,
        phone: document.getElementById('phoneInput').value,
        password: document.getElementById('password').value,
        birthdate: document.getElementById('birthdate').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        agree: document.querySelector('input[name="agree"]').checked,
        state: document.getElementById('state').value,
        comment: document.getElementById('comment').value
    };

    // 데이터 유효성 검사
    if (!formData.firstName || !formData.email || !formData.password) {
        alert("필수 항목(이름, 이메일, 비밀번호)을 입력해주세요.");
        return;
    }

    if (!/^\d{3}-\d{3}-\d{4}$/.test(formData.phone)) {
        alert("전화번호는 123-456-7890 형식이어야 합니다.");
        return;
    }

    if (formData.password.length < 8) {
        alert("비밀번호는 최소 8자 이상이어야 합니다.");
        return;
    }

    // 모의 데이터 응답
    const mockResponse = {
        message: "Thank you for signing up! Your data has been received."
    };

    // 모의 응답 처리
    setTimeout(() => {
        document.getElementById('message').innerText = mockResponse.message; // 응답 메시지 표시
        alert("Form Submitted Successfully!"); // 제출 성공 알림
        document.getElementById('signupForm').reset(); // 폼 초기화
    }, 1000); // 지연 시간 추가 (서버와의 실제 통신처럼 보이게)
});