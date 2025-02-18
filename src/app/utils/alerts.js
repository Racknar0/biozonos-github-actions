import Swal from "sweetalert2";

const simpleAlert = (title, text, icon) => {
    Swal.fire({
        title,
        text,
        icon,
        iconColor: "#ff6400",
        confirmButtonColor: "#fe4800",
    });
};


const timerAlert = async (title, text, icon, timer = 3500) => {
    return Swal.fire({
        title,
        text,
        icon,
        timer,
        timerProgressBar: true,
        //quitar boton de ok
        showConfirmButton: false,
        iconColor: "#ff6400",
        allowOutsideClick: false,
        allowEscapeKey: false,
    });
};

const confirmAlert = async (title, text, icon) => {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: "#fe4800",
        cancelButtonColor: "#ff6400",
        confirmButtonText: "Si",
        cancelButtonText: "No",
    });
}

export { simpleAlert, timerAlert , confirmAlert};