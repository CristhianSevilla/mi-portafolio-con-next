import Layout from "@/components/layout"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/proyecto.module.css"
import styleBotones from "../../styles/botones.module.css";

const ClientConnect = () => {


  const [elementosAnimados, setElementosAnimados] = useState([]);

  useEffect(() => {
    const elementos = document.querySelectorAll(".elemento-animado");

    const opcionesObservador = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Cambiado a 0.5 para que aparezca al 50%
    };

    const callbackObservador = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animado");
          observador.unobserve(entry.target);
        }
      });
    };

    const observador = new IntersectionObserver(callbackObservador, opcionesObservador);

    elementos.forEach((elemento) => {
      observador.observe(elemento);
    });

    setElementosAnimados(elementos);

    return () => {
      observador.disconnect();
    };
  }, []);

  return (
    <Layout
      title="Client Connect"
      description=""
    >

      <section className={styles.proyectoportafolio}>
        <div className="contenedor-small">
          <div>
            <div className={styles.tituloportafolio}>
              <h1>Administra Clientes</h1>
              <p><span>CRM</span></p>
            </div>
            <div className={styles.heroimage}>
              <div className={styles.sombraimagen}>
              </div>
              <Image src='/imagenes/projects/crm/fondo.jpg' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" />
            </div>
          </div>
          <div className={styles.descripcionproyectoportafolio}>

            <div className="texto">
              <h2>Acerca del proyecto</h2>

              <p className="font-size-big">Brinda al usuario la capacidad de tener todo el control que necesita para manejar a sus clientes de manera efectiva y eficiente.</p>

              <p>Una de las características más útiles del CRM es su capacidad para evitar registros duplicados. Además, el formulario de registro es fácil de usar, lo que le permite agregar nuevos clientes de manera rápida y sencilla.</p>

              <p>Una vez que haya registrado a sus clientes, podrá acceder a la sección de gestión de clientes, donde podrás ver, editar o eliminar toda la información relevante de cada uno de ellos.</p>

            </div>

            <div className={styles.proyectocontenedorimagen}>
              <Image className="elemento-animado" src='/imagenes/projects/crm/macbook.jpeg' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" />
            </div>

          </div>
          <div>
            <div className="texto">
              <h2>Stack del proyecto</h2>

              <p className="font-size-big">El proyecto emplea <span>React</span> y <span>React Router Dom</span> para diseñar las interfaces de usuario y administrar el estado de la aplicación. Además utiliza Fetch con los métodos HTTP apropiados para interactuar con la <span>API REST</span>. Esto significa que siempre tendrá acceso a los datos más actualizados.</p>

              <h3>Mi papel</h3>

              <p>He desarrollado el sitio web con el propósito de optimizar la experiencia de usuario. Para ello, he aplicado técnicas avanzadas de diseño y desarrollo web</p>

              <p>Desarrollé componentes React para la interfaz de usuario. Para utilizar <span>Tailwind</span> en el diseño del sitio web, realicé las configuraciones necesarias en los archivos de "Tailwind" y "CSS" e instalé las dependencias correspondientes.</p>

              <p>Usé React Router Dom, el componente Link, useNavigate y Path para definir rutas y para la navegación pricipal. Implemente el Hook redirect para redirigir al usuario. Para resaltar enlaces del menú utilicé useLocation y pathName Y para mostrar componentes dentro del componente “Layout”, utilicé Outlet y Element.</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/crm/macbook-2.png' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" />
              </div>

              <p>Al registrar un nuevo cliente utilizo el componente Form y el método POST, el cual busca un <span>Action</span> para obtener los datos del formulario. Verifico que todos los campos estén llenos y que el usuario haya ingresado un correo válido, si salta un error en estas validaciones se renderiza el componente "Error". Además, utilicé el <span>errorElement</span> para capturar y mejorar el diseño de los mensajes de error que surgen en caso de problemas con la página o la API.</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/crm/macbook-3.png' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" />
              </div>

              <h3>API REST</h3>

              <p>Para crear y usar una API de forma segura, usé <span>json-server</span> y protegí su URL en variables de entorno para mayor control y seguridad de la información compartida.</p>

              <p>Para consultar la API utilicé el Hook useLoaderData y una función asíncrona que hace Fetch a la URL de la API para obtener una respuesta <span>JSON</span> y mostrar la información de los clientes eficientemente.</p>

              <p>Para agregar un nuevo cliente a la API, utilicé una <span>función asíncrona</span> que recibe los datos del cliente y en un bloque try-catch, si hay un error, muestra un mensaje, de lo contrario, ejecuta el try y realiza un Fetch hacia la URL de la API. Utiliza el método <span>POST</span>, un body que contiene los datos que se enviarán y un header que indica el tipo de contenido.</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/crm/macbook-4.png' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" />
              </div>


              <p>Para obtener la información un cliente en particular, usé el <span>routing dinámico</span> para inyectar su ID en la URL. Luego, cargué el ID del cliente usando un <span>loader</span> y lo verifiqué con la API. Si el cliente no existe, mostré un error. Si existe, llené automáticamente el formulario para editar la información del cliente.</p>

              <p>He usado un "action" para editar los datos de un cliente. Este "action" recibe un request para obtener los datos y validarlos antes de enviarlos. También utiliza "params" para obtener el ID del cliente y enviarlo como parámetro a la función que actualizará los datos del cliente. La función recibe el ID y los datos actualizados del cliente, y los escribe en la API utilizando el método <span>PUT</span>.</p>

              <div className={styles.proyectocontenedorimagen}>
                <Image className="elemento-animado" src='/imagenes/projects/crm/macbook-5.png' width={1000} height={1000} alt="Proyecto CRM-Clientes en una MacBook" />

              </div>

              <p>Para eliminar a un cliente usé "Form". Consulté en la API con el método “PUT”, después en un action instancié la función Eliminar, dicha función recibe como parámetro el ID del cliente y lo elimina usando el método <span>DELETE</span>.</p>

              <p>Antes de borrar al cliente, agregué un mensaje de confirmación para que el usuario decida si quiere continuar o no. Si acepta, el cliente se elimina y se redirige al usuario a la página principal.</p>

              <div className={`${styles.contenedorbotones} elemento-animado`}>
                <Link className={styleBotones.boton} href="https://github.com/CristhianSevilla/CRM-Clientes" aria-label="External Link" rel="noopener noreferrer" target="_blank">Ver Código</Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default ClientConnect