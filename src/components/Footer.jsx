import React from "react";
import RotatingSunflower from "./rotatingSunflower";

const Footer = () => {
  const footerStyles = {
    padding: "10px 20px 0 20px", // 增加上下内边距
    textAlign: "center",
    width: "100%", // 确保页脚占满宽度
  };

  const textStyles = {
    fontSize: "1.8rem",
    color: "#2E8B57", // 草绿色
    marginTop: "20px",
    marginBottom: "20px",
  };

  const imagesContainerStyles = {
    display: "flex",
    justifyContent: "space-around", // 使图片分散占据空间
    alignItems: "center",
    gap: "30px", // 增加图片间距
    width: "100%", // 确保容器占满宽度
    paddingBottom: "30px", 
  };

  return (
    <footer style={footerStyles} id="footer">
      <div style={{ marginBottom: "20px" }}>
        <p style={textStyles}>Please free feel to contact me</p>
        <a href="https://github.com/DorisDong86" target="_blank" rel="noopener noreferrer">
          <span
            className="iconfont icon-github-fill"
            style={{
              fontSize: "2rem",
              color: "#2E8B57", // 草绿色
              marginRight: "20px", // 增加右侧间距
            }}
          />
        </a>
        {/* mail to */}
        <a href="mailto:doris_dong@outlook.com">
          <span
            className="iconfont icon-mailbox"
            style={{
              fontSize: "2rem",
              color: "#2E8B57", // 草绿色
            }}
          />
        </a>
      </div>
      <div style={imagesContainerStyles}>
        {/* github 官网 */}

        {[...Array(18)].map((_, i) => (
          <RotatingSunflower
            type={3}
            key={`sf2-${i}`}
            height={50}
            rotateOnloading={false}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
