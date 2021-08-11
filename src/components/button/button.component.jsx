import './button.styles.scss';
const Button = ({ children, isGoogleSignin, ...restProps }) => {
  return (
    <button
      className={`${isGoogleSignin ? 'google-signin' : ''} button`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
