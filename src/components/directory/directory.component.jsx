import './directory.styles.scss';
import { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const [item, setItem] = useState({
    sections: [
      {
        title: 'samsung',
        imageUrl:
          'https://images.unsplash.com/photo-1568378711447-f5eef04d85b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        id: 1,
        linkUrl: 'samsung',
      },
      {
        title: 'iphone',
        imageUrl:
          'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        id: 2,
        linkUrl: 'iphone',
      },
      {
        title: 'Xiaomi',
        imageUrl:
          'https://images.unsplash.com/photo-1620294447945-ffcbc4a09735?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80',
        id: 3,
        linkUrl: 'xiaomi',
      },
      {
        title: 'Boshqa telefonlar',
        imageUrl:
          'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        size: 'large',
        id: 4,
        linkUrl: 'boshqa-telefonlar',
      },
      {
        title: 'Komputerlar',
        imageUrl:
          'https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
        size: 'large',
        id: 5,
        linkUrl: 'komputerlar',
      },
    ],
  });
  return (
    <div className='directory-menu'>
      {item.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
