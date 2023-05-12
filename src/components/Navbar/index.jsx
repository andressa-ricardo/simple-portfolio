import { btnNav, buttonsNav } from "./styles.module.css";

export function Navbar() {
  return (
    <>
      <nav>
        <div className={buttonsNav}>
          <a href="#home">
            <button className={btnNav}>Home</button>
          </a>
          <a href="#sobre">
            <button className={btnNav}>Sobre</button>
          </a>
          <a href="#projeto">
            <button className={btnNav}>Projetos</button>
          </a>

          <a href="#contato">
            <button className={btnNav}>Contato</button>
          </a>
        </div>
      </nav>
    </>
  );
}
