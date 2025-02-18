import SideNav from "../components/dashboard/SideNav";
import Footer from "../layout/footer/Footer";
import NavBar from "../layout/navbar/navbar";
import '@/app/scss/pages/dashboard/dashboard.scss';

export default function DashboardLayout({ children }) {
    return (
        <>
            <NavBar />
            <div className="dashboard_container">
                <div className="dashboard_sidevnav_container">
                    <SideNav />
                </div>
                {children}
            </div>
            <Footer />
        </>
    );
}