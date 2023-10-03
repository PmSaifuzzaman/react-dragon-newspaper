import logo from "../../../assets/logo.png"
import moment from "moment/moment";

const Header = () => {
    return (
        <div className="text-center my-8 space-y-4">
            <img className="mx-auto" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;