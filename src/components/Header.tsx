import { ReactNode } from "react";






interface Headerprops {
    src: string,
    alt: string,
    children: ReactNode
}



const Header = ({src, alt, children}:Headerprops) => {
    return (
        <>
        <img src={src} alt={alt} />  
        <p>
            {children}
        </p>
        </>
    )
};

export default Header
