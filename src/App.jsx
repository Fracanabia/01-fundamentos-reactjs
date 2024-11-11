import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>Sidebar</Sidebar>
        <main>
          <Post
            author="Wesley"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quidem error mollitia provident, ea totam itaque laudantium necessitatibus exercitationem quo ducimus, eum eligendi nam vitae doloremque distinctio? Perspiciatis, enim tempora."
          />
          <Post
            author="Ana"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quidem error mollitia provident, ea totam itaque laudantium necessitatibus exercitationem quo ducimus, eum eligendi nam vitae doloremque distinctio? Perspiciatis, enim tempora."
          />
        </main>
      </div>
    </div>
  );
}
