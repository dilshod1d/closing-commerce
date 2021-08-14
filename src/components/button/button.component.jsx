import './button.styles.scss';
const Button = ({ children, isGoogleSignin, inverted, ...restProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''}${
        isGoogleSignin ? 'google-signin' : ''
      } button`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
