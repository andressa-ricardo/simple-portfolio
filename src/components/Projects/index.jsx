import { projects,projetos } from "./styles.module.css";
import { Links } from "./Links";
import { Pepsi } from "./Pepsi";
import { Calculator } from "./Calculator";
export function Projects() {
  return (
    <>
      <div className={projects} id="projeto">
        < h2>Projetos</ h2>
        <div className={projetos}>
          <Calculator></Calculator>
          <Links></Links>
          <Pepsi></Pepsi>
        </div>
      </div>
    </>
  );
}
