const Title = ({ children, Stage = "h1", bold = false, styles }) => {
    const textSize = {
        h1: `text-7xl ${bold ? "font-bold" : ""}`,
        h2: `text-6xl ${bold ? "font-bold" : ""}`,
        h3: `text-5xl ${bold ? "font-bold" : ""}`,
        h4: `text-4xl ${bold ? "font-bold" : ""}`,
        h5: `text-3xl ${bold ? "font-bold" : ""}`,
        h6: `text-2xl ${bold ? "font-bold" : ""}`,
    };

    return <Stage className={textSize[Stage] + " " + styles}>{children}</Stage>;
};

export default Title;
