import { about, aboutMe, iconSvg } from "./styles.module.css";
import svg from "@/assets/icon.svg";

export function About() {
  return (
    <>
      <div className={about}>
        <div className={aboutMe}>
          <h2>SOBRE MIM</h2>
          <div>
            <p>
              Olá! Me chamo Andressa, tenho 18 anos e há uns meses
              <br /> venho estudando programação com o intuito de me tornar{" "}
              <br /> desenvolvedora full-stack.
            </p>
            <p>
              No momento, obtenho conhecimentos em: <br />
              HTML, CSS, Bootstrap, Sass, e o intermediário de <br />
              JavaScript, Node.Js e React.
            </p>
            <p>
              {" "}
              E também faço automações simples com Python. Além de <br />
              também estar começando a embarcar em MySql <br />e
              criações/consumação de APIs.
            </p>
          </div>
        </div>
        <img src={svg} alt="" className={iconSvg} />
      </div>
    </>
  );
}
