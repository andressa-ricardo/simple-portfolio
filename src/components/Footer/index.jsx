import { footer } from "./styles.module.css";

export function Footer() {
  return (
    <>
      <div className={footer}>
        <a href="https://www.linkedin.com/in/andressa-ricardo/">
          <button >
            <img src="./src/components/Footer/imgs/linkedin.png" alt="" />
            <p>Linkedin</p>
          </button>
        </a>
        <a href="https://github.com/andressa-ricardo">
          <button >
            <img src="./src/components/Footer/imgs/github.png" alt="" />
            <p>Github</p>
          </button>
        </a>
        <a href="mailto:andressaricardo30@gmail.com">
          <button >
            <img src="./src/components/Footer/imgs/email.png" alt="" />
            <p>Email</p>
          </button>
        </a>
      </div>
    </>
  );
}
