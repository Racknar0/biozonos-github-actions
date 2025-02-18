import FormAuth from '../components/auth/FormAuth';

export const metadata = {
    title: 'Biozonos | Auth',
    description: 'Telefono, dirección y redes sociales de Biozonos',
};

const page = () => {
    return (
        <div className="auth_form">
            <div className="login-box">
                <h2>Login</h2>
                <FormAuth />
            </div>
        </div>
    );
};

export default page;
