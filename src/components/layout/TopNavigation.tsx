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
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #999999;
  `,
  Logo: styled.div`
    font-weight: bold;
    font-size: 1rem;
    padding: 0.5rem;
  `,
  LogInOut: styled.div`
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.25rem;
    &:hover {
      background-color: #66666620;
    }
  `
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
