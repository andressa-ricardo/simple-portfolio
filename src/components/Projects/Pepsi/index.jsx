import { pepsi } from "./styles.module.css";
import pepsiSite from '@/assets/pepsi.png'

export function Pepsi() {
  return (
    <>
      <div>
        <div className={pepsi}>
          <img src={pepsiSite} alt="" />
          <p>Pepsi</p>
          <a href="https://andressa-ricardo.github.io/pepsi-site/" target="_blank" rel="noreferrer">
            <button>Ver projeto</button>
          </a>
        </div>
      </div>
    </>
  );
}
