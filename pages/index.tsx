import {gsap} from 'gsap';
import React, {useEffect, useRef} from "react";

function Box({children}: { children: React.ReactNode }) {
    return <div className="box">{children}</div>;
}

function Container() {
    return <div><Box>Nested Box</Box></div>;
}

export default function Home() {
    const boxRef = useRef<HTMLButtonElement>(null)
    const el = useRef<HTMLDivElement>(null);
    const q = gsap.utils.selector(el);

    function enterMouse({currentTarget}: React.MouseEvent) {
        gsap.to(currentTarget, {scale: 1.2, duration: 0.3})
    }

    function leaveMouse({currentTarget}: React.MouseEvent) {
        gsap.to(currentTarget, {scale: 1, duration: 0.3})
    }

    useEffect(() => {
        gsap.to(q(".box"), {
            x: 100,
            stagger: 0.33,
            repeat: -1,
            repeatDelay: 1,
            yoyo: true
        });
        // gsap.to(q(".box"), { x: 100 });
        // gsap.to(boxRef.current, {duration: 2, rotation: "+=360"})
    }, [])
    return (
        <>
            <button className="text-3xl border-2 bg-emerald-300 rounded-3xl" ref={boxRef} onMouseEnter={enterMouse}
                    onMouseLeave={leaveMouse}>Hover Me
            </button>
        </>
    )
}

