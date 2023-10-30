import EditIcon from "./../IMG/pen.png";

const MainInformation = (props) => {
  const margintop = { marginTop: props.DivTop };
  // marginLeft: props.marginLeft
  const style = { marginLeft: props.marginLeft, marginTop: props.WordMoRE };

  return (
    <div style={margintop} className="MainInfo">
      <div className="MainInfoFlex">
        <h1>{props.text}</h1>
        <button className="btn">
          <img src={EditIcon} className="edit" />
        </button>
      </div>
      <h3>About</h3>
      <p> {props.info}</p>
      <a>
        <span style={style}>Show more</span>
      </a>
    </div>
  );
};

export default MainInformation;
