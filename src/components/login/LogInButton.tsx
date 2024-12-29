import styled from 'styled-components';
import GoogleLogin from "../button/GoogleLogin.tsx";

const S = {
  Container: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: white;
    border-radius: 0.5rem;
    border: 1px solid black;
    padding: 2rem;
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.19);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `,
};

function LogInButton() {
  return (
    <S.Container>
      <GoogleLogin type="standard" />
    </S.Container>
  );
}

export default LogInButton;
