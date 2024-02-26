'use client';

import { useRouter } from 'next/navigation';
import '../../scss/components/button-water.css';

const ButtonWater = ({ text, isExternal, href }) => {

    const router = useRouter();

    const handleClick = () => {
        if (isExternal) {
            window.open(href, '_blank');
        } else {
            //utilizar router de next
            router.push(href);
        }
    };

    return (
        <div className="button_water_container" onClick={handleClick}>
            <button
                //style="--content: 'Hover me!';"
                style={{ '--content': 'Más Info!' }}
                href="https://twitter.com/kamildyrek"
                className="button-water"
            >
                <div className="left"></div>

                {text}

                <div className="right"></div>
            </button>
        </div>
    );
};

export default ButtonWater;
