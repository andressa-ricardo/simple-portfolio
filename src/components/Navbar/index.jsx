import { btnNav, buttonsNav } from "./styles.module.css";

export function Navbar() {
  return (
    <>
      <nav>
        <div className={buttonsNav}>
          <button className={btnNav}>Home</button>
          <button className={btnNav}>Sobre</button>
          <button className={btnNav}>Projetos</button>
          <button className={btnNav}>Contato</button>
        </div>
      </nav>
    </>
  );
}
