import UserCard from "./userCard";
const AsideBox = (props) => {
  const a = {
    color: "#1380bb",
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
  };
  const btn = {
    color: "#1380bb",
    fontSize: "20px",
    borderRadius: "20px",
    width: "40px",
    height: "0px",
    border: props.border,
    padding: "7px",
    cursor: "pointer",
  };
  const flex = {
    display: props.flex,
    justifyContent: props.center,
    alignItems: "center",
    height: props.height,
    marginTop: props.marginTop,
  };
  const ShowMore = {
    marginLeft: props.marginLeft,
    cursor: "pointer",
  };

  return (
    <div style={flex} className="asideBox">
      <div className="headingFlex">
        <h4>{props.heading}</h4>
        <img src={props.img} />
      </div>
      <a style={a}>{props.a2}</a>
      <p>{props.p}</p>
      <p>{props.p2}</p>
      <a style={a}>{props.a}</a>
      <span style={btn}>{props.create}</span>
      <p style={ShowMore}>{props.showMore}</p>
      <div>{props.div}</div>
      <div>{props.div2}</div>
      <div>{props.div3}</div>
    </div>
  );
};

export default AsideBox;
