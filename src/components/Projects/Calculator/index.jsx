import { calc } from "./styles.module.css";
import calculadora from '@/assets/calculadora.png'
export function Calculator() {
  return (
    <>
      <div>
        <div className={calc}>
          <img src={calculadora} alt="" />
          <p>Calculadora</p>
          <a href="https://andressa-ricardo.github.io/calculator/" target="_blank" rel="noreferrer">
            <button>Ver projeto</button>
          </a>
        </div>
      </div>
    </>
  );
}
