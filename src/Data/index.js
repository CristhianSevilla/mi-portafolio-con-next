const PROYECTOS = [
    {
        id: 1,
        titulo: "Guitar los ángeles",
        tipo: "Front-End",
        descripcion: "Tienda online con una amplia selección de guitarras. El carrito de compras hace que sea fácil y conveniente agregar guitarras a un pedido, modificar las selecciones y ver el precio total. También ofrece un blog de consejos para ayudar a mejorar las habilidades de tocar la guitarra.",
        tecnologias: ["React", "NextJS", "JavaScript", "API", "PostgreSQL"],
        urlgithub: "https://github.com/CristhianSevilla/GuitarLA",
        urlweb: "https://guitar-la-mu.vercel.app/",
        img: "/guitar/principal.jpg",
    },
    {
        id: 2,
        titulo: "ClientConnect",
        tipo: "Front-End",
        descripcion: "CRM con una funcionalidad completa de CRUD y una conexión HTTP directa a una API. Permite gestionar clientes con facilidad, asegurando que no se dupliquen registros.",
        tecnologias: ["Vite", "React", "TailwinCSS", "React Router Dom", "JsonServer", "JavaScript", "Api Rest"],
        urlgithub: "https://github.com/CristhianSevilla/CRM-Clientes",
        urlweb: null,
        img: "/crm/principal.jpg",
    },
    {
        id: 3,
        titulo: "Crypto Check",
        tipo: "Front-End",
        descripcion: "Aplicación web que cotiza en tiempo real el precio de las 20 Criptomonedas con más valor o capitalización en el mercado. Para usarla, elige una moneda o divisa y una criptomoneda y haz clic en cotizar.",
        tecnologias: ["Vite", "React", "Api", "JavaScript", "Local Storage", "Styled Componets"],
        urlgithub: "https://github.com/CristhianSevilla/Criptomonedas",
        urlweb: "https://cotiza-criptos-react.netlify.app/",
        img: "/criptos/principal.jpg",
    },
    {
        id: 4,
        titulo: "Barber Club",
        tipo: "Full-Stack",
        descripcion: "Aplicación web para reservar citas. Permite a los clientes registrarse, elegir una fecha y hora, y seleccionar los servicios que deseen. Después de crear la cita, los detalles y el costo total se muestran al cliente. La aplicación también permite a los clientes editar o eliminar citas si es necesario. Los administradores pueden crear, editar o eliminar servicios y ver todas las citas del día en una sola vista o buscar una cita por fecha.",
        tecnologias: ["PHP 8", "MVC", "MySQL", "JavaScript", "API Rest", "SASS"],
        urlgithub: "https://github.com/CristhianSevilla/barberia-citas",
        urlweb: null,
        img: "/barber/principal.jpg",
    },
]

export default PROYECTOS