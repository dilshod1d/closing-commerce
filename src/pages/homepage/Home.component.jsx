import styled from 'styled-components';
import Directory from '../../components/directory/directory.component';
const Home = () => {
  return (
    <Container>
      <Directory />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

export default Home;
