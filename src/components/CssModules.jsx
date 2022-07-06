import classes from "./CssModules.module.scss";
/**
 * CSS Modules
 * CSSファイルをモジュール化したものを読み込む
 */
// styles object
// object記法とすること
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CssModules</p>
      <button className={classes.button}>頑張れ！！</button>
    </div>
  );
};
