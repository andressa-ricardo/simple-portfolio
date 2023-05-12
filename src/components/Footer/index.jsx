import { footer } from "./styles.module.css";
import linkedin from "./imgs/linkedin.png";
import github from "./imgs/github.png";
import email from "./imgs/email.png";

export function Footer() {
  return (
    <>
      <div className={footer}>
        <div>
          <a href="https://www.linkedin.com/in/andressa-ricardo/" target="_blank" rel="noreferrer">
            <button>
              <img src={linkedin} alt="" />
              <p>Linkedin</p>
            </button>
          </a>
          <a href="https://github.com/andressa-ricardo" target="_blank" rel="noreferrer">
            <button>
              <img src={github} alt="" />
              <p>Github</p>
            </button>
          </a>
          <a href="mailto:andressaricardo30@gmail.com" target="_blank" rel="noreferrer">
            <button>
              <img src={email} alt="" />
              <p>Email</p>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
