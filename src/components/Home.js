import React from 'react';
import Container from "./Container";

function Home(props) {
    return (
        <div className="w-screen h-screen bg-[#242424]">
            <div className="absolute flex flex-col justify-evenly overflow-hidden items-center top-0 left-0 right-0 bottom-0 m-auto space-y-11">
                <h1 className="text-white text-lg md:text-5xl">Generate Your Password From Here 🔥🔥🔥</h1>
                <Container/>
            </div>
        </div>
    );
}

export default Home;
