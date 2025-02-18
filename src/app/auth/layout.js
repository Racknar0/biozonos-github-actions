import Footer from "../layout/footer/Footer";
import NavBar from "../layout/navbar/navbar";

import "@/app/scss/pages/auth/auth.scss";

export default function AuthLayout({ children }) {
    return (
        <div>
            <NavBar />
            <div className="auth_container">
                {children}
            </div>
            <Footer />
        </div>
    );
}