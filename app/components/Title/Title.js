const Title = ({children, Stage = 'h1', styles}) => {
    const textSize = {
        h1: 'text-7xl font-bold',
        h2: 'text-6xl font-bold',
        h3: 'text-5xl font-bold',
        h4: 'text-4xl font-bold',
        h5: 'text-3xl font-bold',
        h6: 'text-2xl font-bold',
    }

    return (
        <Stage className={textSize[Stage] + ' ' + styles}>
            {children}
        </Stage>
    );
};

export default Title;