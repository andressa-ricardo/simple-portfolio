import { links } from "./styles.module.css";
import perfume from '@/assets/perfume.png'

export function Links() {
  return (
    <>
      <div>
        <div className={links}>
          <img src={perfume} alt="" />
          <p>Perfume</p>
          <a href="https://andressa-ricardo.github.io/site-perfume/" target="_blank" rel="noreferrer">
            <button>Ver projeto</button>
          </a>
        </div>
      </div>
    </>
  );
}
