import "./../style.css"
import pfp from "./../images/pfp.png"

const Users = () => {
    return (
        <div className="flex users-suggestion gap10">
            <img src={pfp} alt="pfp" className="publish-post-pfp"/>
            <div>
                <p className="font13">ANZ OILFIELD SERVICES PVT. LTD.</p>
                <p className="location-p ">Company, Oil & Energy</p>
                <button className="gray-button">+ Follow</button>
            </div>
        </div>
    )
}

export default Users;