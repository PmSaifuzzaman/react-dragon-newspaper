import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
                <div className="border">
                    <h2>Left side</h2>
                </div>
                <div className="md:col-span-2 border">
                    <h1>News comming soon</h1>
                </div>
                <div className="border">
                    <h2>Right side</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;