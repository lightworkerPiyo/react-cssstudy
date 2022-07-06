/**
 * Styled JSX
 * Compnent内にstyleタグを記載
 * 直接Javascriptでcssを記載する
 */

export const StyledJsx = () => {
  return (
    // Javascriptを記載するのでからタグでくくる
    <>
      <div class="container">
        <p class="title">StyledJsx</p>
        <button class="button">頑張れ！！</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
          }
      `}</style>
    </>
  );
};
