import { infosHome, pDev } from "./styles.module.css";

export function Me() {
  return (
    <>
      <main>
        <div className={infosHome}>
          <h1>Andressa Ricardo</h1>
          <div>
          <p className={pDev}>Desenvolvedora full-stack júnior</p>
          </div>
        </div>
        {/* <img src="./src/assets/me.png" className={myPic} alt="logo-image"/> */}
      </main>
    </>
  );
}
