import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";



const Register = () => {
    // Destructure from context api
    const {createUser} = useContext(authContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoUrl, email, password);

        // Create user
        createUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
        
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-slate-300">
                <h2 className="text-center mt-10 pt-8 text-4xl font-semibold">Register your account </h2>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your Photo url" name="photoUrl" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center pb-4">Already Have An Account ? <Link className="underline text-blue-500 font-semibold" to={"/login"}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;