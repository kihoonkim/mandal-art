import styled from "styled-components";

const S = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
  `
}
function ErrorPage() {
  return (
    <S.Container>Not Found</S.Container>
  );
}

export default ErrorPage;
