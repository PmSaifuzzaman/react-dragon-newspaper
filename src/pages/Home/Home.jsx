import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import BreakingNews from "../Shared/Navbar/BreakingNews";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h1>News comming soon</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;