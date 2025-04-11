import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 12px;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const Info = styled.p`
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

const Link = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #4F46E5;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <Container>
      <Title>안녕하세요! 저는 김정훈입니다</Title>
      <Info>웹 풀스택 개발자 지망</Info>
      <Info>관심 기술: Next.JS, TS, SpringBoot, MySQL</Info>
      <Link href="https://velog.io/@jeong011010" target="_blank">블로그 보러가기</Link>
    </Container>
  );
}

export default App;