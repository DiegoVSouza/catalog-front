import Swal from "sweetalert2";
import './Notification.css'
class Notification {
  success(message: string) {
    Swal.fire({
      title: "Sucesso!",
      icon: "success",
      text: message,
      confirmButtonText: "OK",
      customClass: {
        container: 'container-swal'
      },
    });
  }

  error(message: string) {
    Swal.fire({
      title: "Erro!",
      icon: "error",
      text: message,
      confirmButtonText: "OK",
      customClass: {
        container: 'container-swal'
      },
    });
  }

  warn(title: string = "Aviso!", message: string) {
    Swal.fire({
      title: title,
      icon: "warning",
      text: message,
      confirmButtonText: "OK",
      customClass: {
        container: 'container-swal'
      },
    });
  }

  info(title: string = "Aviso!", message: string) {
    Swal.fire({
      title: title,
      icon: "info",
      text: message,
      confirmButtonText: "OK",
      customClass: {
        container: 'container-swal'
      },
    });
  }

  async confirm(message: string, title: string = "Tem certeza?", nameButtonCancel: string = 'Cancelar', nameButtonConfirm: string = 'Avançar', obj: object = {}) {
    return await Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: 'red',
      confirmButtonColor: 'green',
      cancelButtonText: nameButtonCancel,
      confirmButtonText: nameButtonConfirm,
      ...obj,
      customClass: {
        container: 'container-swal'
      },
    }).then((result: any) => {
      return result.isConfirmed
    });
  }
}

export default new Notification();