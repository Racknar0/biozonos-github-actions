'use client';
import axiosInstance from '@/app/services/AxiosInterceptor';
import { useAppContext } from '@/app/context';
import { timerAlert } from '@/app/utils/alerts';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormAuth = () => {
    const router = useRouter();
    const { loading, setLoading } = useAppContext();

    // Define el esquema de validación con Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('El correo electrónico no es válido')
            .required('El correo electrónico es obligatorio'),
        password: Yup.string()
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .required('La contraseña es obligatoria')
    });

    // Maneja el envío del formulario
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setLoading(true);
            const response = await axiosInstance.post('/auth/login', values);

            console.log("response login", response);

            if (response.status === 200) {
                await timerAlert(`${response.data.message}`, 'Bienvenido', 'success', 3000);
                router.push('/dashboard');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ email: 'racknarow@gmail.com', password: '123456' }}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="user-box">
                        <Field
                            type="email"
                            name="email"
                            autoComplete="email"
                        />
                        <label>Email</label>
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className="user-box">
                        <Field
                            type="password"
                            name="password"
                        />
                        <label>Password</label>
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Ingresar'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormAuth;