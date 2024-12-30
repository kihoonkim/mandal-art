import {useRecoilValue} from "recoil";
import {loginUserInfo} from "../states/login-state.ts";
import LogInButton from "../components/login/LogInButton.tsx";
import TopNavigation from "../components/layout/TopNavigation.tsx";
import MandalArtList from "../components/list/MandalArtList.tsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const S = {
  Container: styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
  `,
  Content: styled.div`
    width: calc(100% - 2rem);
    max-width: 1280px;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,
  LoginContainer: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  `,
  HelloWorld: styled.div`
    width: fit-content;
    margin-bottom: 1rem;
    font-size: 1rem;
    border-bottom: 1px solid #ffffff;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid #333333;
    }
  `
};

function Home() {
  const loginInfo = useRecoilValue(loginUserInfo)
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <TopNavigation />
        {!loginInfo && (
          <S.LoginContainer>
            <S.HelloWorld onClick={() => navigate('hello-world')}>{'둘러보기 >'}</S.HelloWorld>
            <LogInButton />
          </S.LoginContainer>
        )}
        {loginInfo && <MandalArtList email={loginInfo.email} />}
      </S.Content>
    </S.Container>
  );
}

export default Home;
