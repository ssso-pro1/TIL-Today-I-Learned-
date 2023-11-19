// [Javascript 미세팁] if else 리팩토링 #1 (feat. 객체 + 함수)

// 1. 하나의 변수에 대해 조건별로 분기를 나눠야 하는 경우
// 1) 소셜 로그인 함수 
const naverLogin = (id) => {
  //... 
  return '네이버';
};

const kakaoLogin = (id) => {
  //... 
  return '카카오';
};
...

// 1
const socialLogin = (where, id) => {
  let domain;
  if (where === 'naver') {
    domain = naverLogin(id);
  } else if (where === 'kakao') {
    domain = kakaoLogin(id);
  } else if (where === 'facebook') {
    domain = facebookLogin(id);
  } else if (where === 'google') {
    domain = googleLogin(id);
  }

  return `${domain} ${id}`
};

// 2. switch문으로 변경하기
const socialLogin = (where, id) => {
  let domain;
  switch (where) {
    case 'naver':
      domain = naverLogin(id);
      break;
    case 'kakao':
      domain = kakaoLogin(id);
      break;
    case 'facebook':
      domain = facebookLogin(id);
      break;
    case 'google':
      domain = googleLogin(id);
      break;
  }
  
  return `${domain} ${id}`;
}

// 3. switch문 보완하기
const executeLogin = (where, id) => {
  switch (where) {
    case 'naver':
      return naverLogin(id);
    case 'kakao':
      return kakaoLogin(id);
    case 'facebook':
      return facebookLogin(id);
    case 'google':
      return googleLogin(id);
  }
};

const socialLogin = (where, id) => {
  const domain = executeLogin(where, id);
  return `${domain} ${id}`;
};

// 4. *객체로 mapping 하기
const SocialLoginMap = { // 데이터 기능 몰아넣고 실제 동작하는 부분은 아래의 별개의 함수로 기능 분리
  'naver': naverLogin,
  'kakao': kakaoLogin,
  'facebook': facebookLogin,
  'google': googleLogin
  };

const socialLogin = (where, id) => { // 함수로써의 기능만 함
  const domain = SocialLoginMap[where](id);
  return `${domain} ${id}`;
};
// 추가 및 수정이 용이해짐
// if else 문 보다 성능이 좋다. if else 문의 경우 google 인 경우 위에서부터 비교를 해야 함.
// 이 경우에는 해당 키값으로 [where] 딱 한 번 접근하기 때문에 항상 균일한 성능을 낼 수 있음

// 2) 구간별 적용
/*
- 3월 ~ 5월: 봄
- 6월 ~ 8월: 여름
- 9월 ~ 11월: 가을
- 12월 ~ 2월: 겨울
*/
// 1.
const getSeason = (month) => {
  if (month >= 3 && month <= 5) return '봄'; 
  if (month >= 6 && month <= 8) return '여름'; 
  if (month >= 9 && month <= 11) return '가을'; 
  if (month >= 12 && month <= 2) return '겨울';     
};

// 2. switch 문
const getSeason = (month) => {
  switch (month) {
    case 3:
    case 4:
    case 5: return '봄';
    case 6:
    case 7:
    case 8: return '여름';
    case 9:
    case 10:
    case 11: return '가을';
    case 12:
    case 1:
    case 2: return '겨울';
};

// 3. 규칙을 바탕으로 보완
  // a
const getSeason = (month) => {
  const shiftedMonth = month - 3;
  switch (month) {
    case 0:
    case 1:
    case 2: return '봄';
    case 3:
    case 4:
    case 5: return '여름';
    case 6:
    case 7:
    case 8: return '가을';
    case 9:
    case -2:
    case -1: return '겨울';
  }
};

  // b
const getSeason = (month) => {
  const shiftedMonth = Math.floor(((month + 9) % 12) / 3);
  switch (shiftedMonth) {
    case 0:return '봄';
    case 1: return '여름';
    case 2: return '가을';
    case 3: return '겨울';
  }  
}

  // c - 1
// const SeasonMap = {
//   0: '봄',
//   1: '여름',
//   2: '가을',
//   3: '겨울',
// }; // -> 배열로 처리 가능해짐
const Seasons = ['봄', '여름', '가을', '겨울'];
  
const getSeason = (month) => {
  const shiftedMonth = Math.floor(((month + 9) % 12) / 3);
  return SeasonMap[shiftedMonth];
};

  // c - 2
const Seasons = ['봄', '여름', '가을', '겨울'];
const getSeasonIndex = Math.floor(((month + 9) % 12) / 3);
const getSeason = (month) => SeasonMap[getSeasonIndex(month)];

// 구간 별로 동일한 조건으로 처리 가능한 경우에는 switch case로 먼저 바꾸면, 이렇게 객체로 매핑하는 해결 방안이 보이는 경우가 있을 수 있음!!




// 강의 https://www.youtube.com/watch?v=p0YEviesgRM&list=PLjQV3hketAJmtfUlEiL6Aodbyed6aYnKL&index=3





