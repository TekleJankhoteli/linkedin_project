import EditIcon from "./../IMG/pen.png";
import MainInformation from "./mainInformation";
import UniversityPicture from "../IMG/Rectangle 29.png";
import UniversityPicture2 from "../IMG/Rectangle 30.png";
import eyeImg from "../IMG/eye.png";

const EditBox = (props) => {
  const showMargin = {
    marginLeft: "290px",
    marginBottom: "10px",
    marginTop: props.marginTop,
    height: props.height,
    display: "flex",
    alignItems: "center",
  };

  const marginLeft = { marginLeft: props.marginLeft };
  const flex = { display: props.flex };
  const gap = { gap: props.gap };
  const height = { height: props.height };
  return (
    <>
      <div style={marginLeft} className="editBox">
        <div className="MainInfoFlex">
          <h1>{props.text}</h1>
        </div>
        <div className="headerFlex">
          <img src={props.eye} alt="" />
          <p className="editBoxP">{props.p}</p>
        </div>
        <div className="editFLEX" style={flex}>
          <div style={gap} className="pictures">
            <img src={props.img} />
            <img src={props.img2} />
            <img src={props.img3} />
          </div>
          <div className="edit-info">
            <div>{props.info1}</div>

            <div>{props.info2}</div>
            <div>{props.info3}</div>
          </div>
        </div>
        <a>
          <span style={showMargin}> Show more . . .</span>
        </a>
      </div>
    </>
  );
};

export default EditBox;
