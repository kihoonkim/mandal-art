import styled from 'styled-components';
import {useRecoilValue} from "recoil";
import {loginUserInfo} from "../../states/login-state.ts";
import {clearLoginInfo} from "../../services/user-service.ts";
import {clearTokenOfLoginUser} from "../../helpers/google-api-helper.ts";

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Logo: styled.div`
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
    border-bottom: 2px solid black;
  `,
  LogInOut: styled.div``
};

function TopNavigation() {
  const loginInfo = useRecoilValue(loginUserInfo)
  const handleOnClick = () => {
    clearTokenOfLoginUser()
    clearLoginInfo()
  }
  return (
    <S.Container>
      <S.Logo>MANDAL-ART</S.Logo>
      <S.LogInOut onClick={handleOnClick}>{ loginInfo && '로그아웃'}</S.LogInOut>
    </S.Container>
  );
}

export default TopNavigation;
