import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const amountInCents = price * 100;
  const publishableKey = 'pk_test_NmzMWhf9NzseytWWI3uePrRa';
  const onToken = (token) => {
    console.log(token);
    alert('Payment successfull ');
  };
  return (
    <div>
      <StripeCheckout
        label='Pay now'
        name='Zillion'
        billingAddress
        shippingAddress
        image='https://www.flaticon.com/free-icon/stripe_5968204?term=stripe&page=1&position=1&page=1&position=1&related_id=5968204&origin=search'
        description={`Your total is $${price}`}
        stripeKey={publishableKey}
        amount={amountInCents}
        panelLabel='Pay'
        token={onToken} // when payment made
      />
    </div>
  );
};

export default StripeCheckoutButton;
