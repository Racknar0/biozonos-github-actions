import Breadcrumbs from '../components/breadcumbs/Breadcumbs';

const page = () => {
    return (
        <div className="contacto_main_container">
            <Breadcrumbs link="/contacto" nombre="Contacto" />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center mb-4">Puedes Ubicarnos con los siguientes Datos.</h2>
                        <p className="text-center">¡Estamos aquí para ayudarte!</p>
                        <ul className="list-unstyled text-center mb-4">
                            <li>
                                <i className=""></i>
                                Dirección: Cra 26 # 6A – 26, Sogamoso – Boyaca
                            </li>
                            <li>
                                <i className=""></i>
                                ¡Servicio en Todo Boyacá!
                            </li>
                            <li>
                                <i className=""></i>Teléfono:
                                +57 323 364 2951
                            </li>
                            <li>
                                <i className=""></i>Correo
                                electrónico: biozonosco@gmail.com
                            </li>
                        </ul>
                        <p className="text-center">
                            Síguenos en las redes sociales:
                        </p>
                        <div className="text-center">
                            <a
                                href="#"
                                className="btn btn-outline-primary mr-2"
                            >
                                
                            </a>
                            <a
                                href="#"
                                className="btn btn-outline-info mr-2"
                            >
                                <i className=""></i>
                            </a>
                            <a
                                href="#"
                                className="btn btn-outline-danger mr-2"
                            >
                                <i className=""></i>
                            </a>

                            
                            <a
                                href="#"
                                className="btn btn-outline-success"
                            >
                                <i className=""></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
