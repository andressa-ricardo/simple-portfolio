import { infosHome, pDev } from "./styles.module.css";
import minhaFoto from '@/assets/me.png'

export function Me() {
  return (
      <main>
        <div className={infosHome} id="home">
        <img src={minhaFoto}  alt="logo-image"/>

          <h1>Andressa Ricardo</h1>
          <div>
          <p className={pDev}>Desenvolvedora full-stack júnior</p>
          </div>
        </div>
      </main>
  );
}
