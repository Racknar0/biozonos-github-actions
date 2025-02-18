import BtnWhsatpp from "../components/BtnWhsatpp/BtnWhsatpp";
import Footer from "../layout/footer/Footer";
import NavBar from "../layout/navbar/navbar";

export default function IndustrialLayout({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <BtnWhsatpp />
            <Footer />
        </>
    );
}