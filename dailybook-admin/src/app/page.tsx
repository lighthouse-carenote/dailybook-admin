import Image from 'next/image';
import styles from './page.module.css';
import { authProvider } from './authProvider';
import { Admin } from 'react-admin';

export default function Home() {
  return (
    <div>
      <Admin authProvider={authProvider}></Admin>
    </div>
  );
}
