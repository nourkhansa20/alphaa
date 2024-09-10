import React, { useEffect, useRef } from 'react';
import Arrow from './Arrow';
import gsap from 'gsap';

const AnimatedArrows = () => {
    // Create a ref for each arrow
    const arrowsRef = useRef([]);

    useEffect(() => {
        // GSAP animation for arrows
        gsap.to(arrowsRef.current, {
            y: 10, // Move down by 10px
            duration: 0.6, // Animation duration
            repeat: -1, // Infinite repeat
            yoyo: true, // Reverse the animation (up after down)
            ease: 'power1.inOut', // Smooth easing
            stagger: 0.2, // Stagger each arrow's animation
        });
    }, []);

    return (
        <div className="flex flex-col items-center ">
            {[...Array(3)].map((_, i) => (
                <Arrow
                    key={i}
                    className="w-12 -my-3 fill-secondary rotate-90"
                    // Attach the ref to each Arrow component
                    ref={(el) => (arrowsRef.current[i] = el)}
                />
            ))}
        </div>
    );
}

export default AnimatedArrows;
