import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, } from "react-icons/fa6";
import Qzone1 from "../../../assets/qZone1.png";
import Qzone2 from "../../../assets/qZone2.png";
import Qzone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="p-2">
                <h3 className="text-xl font-semibold mb-4">Login With </h3>
                <div>
                    <a href="">
                        <button className="btn btn-outline w-full mb-2">
                            <FaGoogle></FaGoogle>
                            Login With Google
                        </button>
                    </a>
                    <a href="">
                        <button className="btn btn-outline w-full mb-2">
                            <FaGithub></FaGithub>
                            Login With Github
                        </button>
                    </a>
                </div>
            </div>
            {/* Find us on section */}
            <div className="p-2 mb-4">
                <h3 className="text-xl font-semibold mb-4">Find Us On </h3>
                <div>
                    <a href="" className="flex gap-3 items-center text-lg font-medium pl-4 py-4 border rounded-t-md">
                        <FaFacebook></FaFacebook>
                        Facebook
                    </a>
                    <a href="" className="flex gap-3 items-center text-lg font-medium pl-4 py-4 border-x">
                        <FaTwitter></FaTwitter>
                        Twitter
                    </a>
                    <a href="" className="flex gap-3 items-center text-lg font-medium pl-4 py-4 border rounded-b-md">
                        <FaInstagram></FaInstagram>
                        Instagram
                    </a>
                </div>
            </div>
            {/* Q zone section */}
            <div className="p-2 bg-[#F3F3F3] pt-3">
                <h3 className="text-xl font-semibold mb-4">Q-Zone </h3>
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;