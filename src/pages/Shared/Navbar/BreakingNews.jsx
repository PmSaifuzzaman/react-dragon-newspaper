import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex mt-8 bg-[#F3F3F3] p-2 rounded-lg">
            <button className="btn btn-secondary">Latest</button>
            <Marquee speed={100}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;