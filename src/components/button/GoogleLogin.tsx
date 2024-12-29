import styled from 'styled-components';
import GoogleLogo from '../../assets/google-logo.svg'
import {fetchGoogleUser} from "../../helpers/google-api-helper.ts";
import {saveLoginInfo} from "../../services/user-service.ts";

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 0.25rem;
    padding: 0.25rem;
    &:hover {
      background-color: #66666620;
    }
  `,
  Logo: styled.img`
    width: 1.25rem;
    height: 1.25rem;
    object-fit: fill;
  `,
  Text: styled.span`
    margin-left: 0.5rem;
  `
};
interface Props {
  type: 'standard' | 'icon'
}
function GoogleLogin({ type }: Props) {

  function handleOnClick() {
    // @ts-ignore
    const client = window.tokenClient
    client.requestAccessToken({prompt: 'consent'});
    client.callback = async (token: string) => {
      const { email, name } = await fetchGoogleUser()
      if (email) {
        saveLoginInfo(email, name, token)
      }
    }
  }

  return (
    <S.Container onClick={handleOnClick}>
      {type === 'standard' && (
        <>
          <S.Logo src={GoogleLogo} />
          <S.Text>Sign in with Google</S.Text>
        </>
      )}
      {type === 'icon' && (
        <S.Logo src={GoogleLogo} />
      )}
    </S.Container>
  );
}

export default GoogleLogin;
