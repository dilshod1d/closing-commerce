import './home.styles.scss';
const Home = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Hats</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Jackets</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Shirts</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Sneakers</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>TROUSERS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
