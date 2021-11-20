import Button from '../button/button.component';
import { connect } from 'react-redux';
import { AddItemToCart } from '../../redux/cart/cart.actions';
import styled from 'styled-components';
const CollectionItem = ({ item, AddItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <Container>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <BottomContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </BottomContainer>
      <ButtonHidden onClick={() => AddItemToCart(item)} inverted>
        Savatga qo'shish
      </ButtonHidden>
    </Container>
  );
};

const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const ButtonHidden = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const Container = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 10px;
  &:hover ${ButtonHidden} {
    opacity: 0.85;
    display: flex;
  }
  &:hover ${Image} {
    opacity: 0.8;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const Name = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

const Price = styled.div`
  width: 10%;
`;

const mapDispatchProps = (dispatch) => ({
  AddItemToCart: (item) => dispatch(AddItemToCart(item)),
});

export default connect(null, mapDispatchProps)(CollectionItem);
