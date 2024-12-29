import {useRecoilValue} from "recoil";
import {loginUserInfo} from "../states/login-state.ts";
import LogInButton from "../components/login/LogInButton.tsx";
import TopNavigation from "../components/layout/TopNavigation.tsx";
import MandalArtList from "../components/list/MandalArtList.tsx";
import styled from "styled-components";

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
  `,
};

function Home() {
  const loginInfo = useRecoilValue(loginUserInfo)

  return (
    <S.Container>
      <S.Content>
        <TopNavigation />
        {!loginInfo && <LogInButton />}
        {loginInfo && <MandalArtList email={loginInfo.email} />}
      </S.Content>
    </S.Container>
  );
}

export default Home;
