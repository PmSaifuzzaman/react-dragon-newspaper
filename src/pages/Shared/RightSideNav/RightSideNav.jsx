import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, } from "react-icons/fa6";

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
            <div className="p-2">
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
        </div>
    );
};

export default RightSideNav;