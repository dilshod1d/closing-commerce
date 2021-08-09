import './directory.styles.scss';
import { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const [item, setItem] = useState({
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
      },
    ],
  });
  return (
    <div className='directory-menu'>
      {item.sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem title={title} imageUrl={imageUrl} key={id} size={size} />
      ))}
    </div>
  );
};

export default Directory;
