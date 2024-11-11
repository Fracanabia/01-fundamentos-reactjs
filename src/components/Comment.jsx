import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/fracanabia.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Wesley Fracanábia <span>(você)</span>
              </strong>
              <time title="11 de Novembro de 2024 ás 08:00" dateTime="2024-11-11 08:00:00">
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button title="Deletar comentário">
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
