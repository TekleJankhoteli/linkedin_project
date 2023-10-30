const Experience = (props) => {
  const marginLeft = {
    marginLeft: props.marginLeft,
    marginTop: props.marginTop,
  };

  return (
    <div style={marginLeft} className="experienceInfo">
      <h4>{props.title}</h4>
      <p>{props.SchoolName}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default Experience;
