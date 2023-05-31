import style from "./Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={style["loading-panel"]}>
      <div className={style["loading-panel__spinner"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className={style["loading-panel__text"]}>Ładowanie...</span>
    </div>
  );
};
