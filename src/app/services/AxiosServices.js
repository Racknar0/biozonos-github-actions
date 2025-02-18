import axiosInstance from './AxiosInterceptor';

class AxiosService {
  // Configurar headers para FormData
  static formDataHeaders() {
    return { headers: { 'Content-Type': 'multipart/form-data' } };
  }

  // Método para manejar las solicitudes
  static async handleRequest(method, url, data = null, isFormData = false) {
    try {
      const config = isFormData ? AxiosService.formDataHeaders() : {};
      const response = await axiosInstance({ method, url, data, ...config });
      return response.data || response;
    } catch (error) {
      // Manejar errores aquí si es necesario
      throw error;
    }
  }

  // Métodos HTTP
  static get(url) {
    return AxiosService.handleRequest('get', url);
  }

  static getById(url, id) {
    return AxiosService.handleRequest('get', `${url}/${id}`);
  }

  static post(url, data, isFormData = false) {
    return AxiosService.handleRequest('post', url, data, isFormData);
  }

  static put(url, data, isFormData = false) {
    return AxiosService.handleRequest('put', url, data, isFormData);
  }

  static patch(url, data, isFormData = false) {
    return AxiosService.handleRequest('patch', url, data, isFormData);
  }

  static delete(url) {
    return AxiosService.handleRequest('delete', url);
  }
}

export default AxiosService;