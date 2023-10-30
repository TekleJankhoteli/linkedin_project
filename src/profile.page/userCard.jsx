const UserCard = (props) => {
  const ShowMore = {
    marginLeft: props.marginLeft,
    cursor: "pointer",
  };
  return (
    <div className="usercard-div">
      <img className="userImg" src={props.ProfilImg} />
      <div className="userInfo">
        <h2>{props.name}</h2>
        <p>{props.information}</p>
        <button className="userCardButtom"> + Follow</button>
        <p style={ShowMore}>{props.showMore}</p>
      </div>
    </div>
  );
};

export default UserCard;
