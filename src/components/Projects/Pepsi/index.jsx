import {pepsi} from "./styles.module.css";
export function Pepsi() {
  return (
    <>
      <div>
        <div className={pepsi}>
          <img src="./src/assets/pepsi.png" alt=""  />
          <p>Pepsi</p>
          <button>Ver projeto</button>
        </div>
      </div>
    </>
  );
}