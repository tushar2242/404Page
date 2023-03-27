import React from "react";
import './css/error.css';
import Typewriter from 'typewriter-effect';

const Error = () => {
    return (
        <>
            <div className="errOuter">
                
                <div title="404">404</div>
      
                <Typewriter
                    options={{
                        strings: ['Page Not Found', 'Try Again'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </>
    )
}

export default Error;