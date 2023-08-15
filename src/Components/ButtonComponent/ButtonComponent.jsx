function ButtonComponent(props) {
  const { children, colorFondo } = props;
  const styleButton = {
    backgroundColor: colorFondo,
  };

  return (
    <div>
      <button onClick={props.onClick} style={styleButton} className="btn">
        {children}
      </button>
    </div>
  );
}
