import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post
        author="Wesley"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quidem error mollitia provident, ea totam itaque laudantium necessitatibus exercitationem quo ducimus, eum eligendi nam vitae doloremque distinctio? Perspiciatis, enim tempora."
      />
      <Post
        author="Ana"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quidem error mollitia provident, ea totam itaque laudantium necessitatibus exercitationem quo ducimus, eum eligendi nam vitae doloremque distinctio? Perspiciatis, enim tempora."
      />
    </div>
  );
}
