import React, { useEffect, useRef, useState } from 'react';
import FOG from 'vanta/dist/vanta.fog.min.js';
import * as THREE from 'three';
import Box from "./Box"
import Footer from './Footer';


const Home1 = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
				THREE: THREE,
				highlightColor: 0x0,
				midtoneColor: 0x6a635e,
				lowlightColor: 0x23773f
            }));
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div ref={myRef} className='flex flex-col items-center justify-between w-screen h-screen bg-gray-900'>
            <Box/>
			<Footer/>
        </div>
    );
}

export default Home1;
