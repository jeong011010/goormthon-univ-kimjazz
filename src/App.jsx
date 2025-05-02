import styled from 'styled-components';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };


  useEffect(() => {
    alert('반가븝니다.');
  }, []);

  useEffect(() => {
    if(count>9) alert("와우! 10번이나 눌렀어!");
  }, [count]);
  //똥!ㅇ
  return (
    <Container>
      <Title>안녕하세요! 저는 김정훈입니다</Title>
      <Info>웹 풀스택 개발자 지망</Info>
      <Info>관심 기술: Next.JS, TS, SpringBoot, MySQL</Info>
      <Link href="https://velog.io/@jeong011010" target="_blank">블로그 보러가기</Link>

      <div style={{ marginTop: '2rem' }}>
        <h2>나를 눌러준 횟수: {count}회</h2>
        <button onClick={handleClick}>나를 눌러주세요</button>
      </div>
    </Container>
  );
}

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

export default App;