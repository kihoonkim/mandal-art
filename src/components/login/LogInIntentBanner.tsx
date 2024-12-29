import styled from 'styled-components';
import GoogleLogin from "../button/GoogleLogin.tsx";

const S = {
  Container: styled.div`
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.19);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
};

function LogInIntentBanner() {


  return (
    <S.Container>
      <span>내용을 저장하려면 로그인이 필요합니다</span>
      <GoogleLogin type="icon" />
    </S.Container>
  );
}

export default LogInIntentBanner;
