const PROYECTOS = [
    {
        id: 1,
        destacado: true,
        titulo: "Guitar los ángeles",
        tipo: "Front-End",
        descripcion: "Tienda online con una amplia selección de guitarras. El carrito de compras hace que sea fácil y conveniente agregar guitarras a un pedido, modificar las selecciones y ver el precio total. También ofrece un blog de consejos para ayudar a mejorar las habilidades de tocar la guitarra.",
        tecnologias: ["React", "NextJS", "JavaScript", "API", "PostgreSQL"],
        urlgithub: "https://github.com/CristhianSevilla/GuitarLA",
        urlweb: "https://guitar-la-mu.vercel.app/",
        img: "/guitar/principal.jpg",
        urlUnica: "guitar-los-angeles"
    },
    {
        id: 2,
        destacado: true,
        titulo: "ClientConnect",
        tipo: "Front-End",
        descripcion: "CRM con una funcionalidad completa de CRUD y una conexión HTTP directa a una API. Permite gestionar clientes con facilidad, asegurando que no se dupliquen registros.",
        tecnologias: ["Vite", "React", "TailwinCSS", "React Router Dom", "JsonServer", "JavaScript", "Api Rest"],
        urlgithub: "https://github.com/CristhianSevilla/CRM-Clientes",
        urlweb: null,
        img: "/crm/principal.jpg",
        urlUnica: "client-connect"
    },
    {
        id: 3,
        destacado: true,
        titulo: "Crypto Check",
        tipo: "Front-End",
        descripcion: "Aplicación web que cotiza en tiempo real el precio de las 20 Criptomonedas con más valor o capitalización en el mercado. Para usarla, elige una moneda o divisa y una criptomoneda y haz clic en cotizar.",
        tecnologias: ["Vite", "React", "Api", "JavaScript", "Local Storage", "Styled Componets"],
        urlgithub: "https://github.com/CristhianSevilla/Criptomonedas",
        urlweb: "https://cotiza-criptos-react.netlify.app/",
        img: "/criptos/principal.jpg",
        urlUnica: "crypto-check"
    },
    {
        id: 4,
        destacado: true,
        titulo: "Barber Club",
        tipo: "Full-Stack",
        descripcion: "Aplicación web para reservar citas. Permite a los clientes registrarse, elegir una fecha y hora, y seleccionar los servicios que deseen. Después de crear la cita, los detalles y el costo total se muestran al cliente. La aplicación también permite a los clientes editar o eliminar citas si es necesario. Los administradores pueden crear, editar o eliminar servicios y ver todas las citas del día en una sola vista o buscar una cita por fecha.",
        tecnologias: ["PHP 8", "MVC", "MySQL", "JavaScript", "API Rest", "SASS"],
        urlgithub: "https://github.com/CristhianSevilla/barberia-citas",
        urlweb: null,
        img: "/barber/principal.jpg",
        urlUnica: "barber-club"
    },
    {
        id: 5,
        destacado: false,
        titulo: "Presupuesto Fácil",
        tipo: "Front-End",
        descripcion: "Aplicación web que ayuda a sus usuarios a llevar un seguimiento de sus gastos. Tiene la capacidad de agregar y editar gastos con facilidad y la función de filtrar los gastos por categorías, además de una gráfica que se actualizan automáticamente dependiendo del presupuesto gastado.",
        tecnologias: ["Vite", "React", "JavaScript", "Local Storage"],
        urlgithub: "https://github.com/CristhianSevilla/App-Control-de-Presupuesto-con-React",
        urlweb: "https://planifica-gastos-react.netlify.app/",
        img: null,
        urlUnica: "presupuesto-facil"
    },
    {
        id: 6,
        destacado: false,
        titulo: "Healthy Pets",
        tipo: "Front-End",
        descripcion: "Aplicación web para realizar un seguimiento de la información médica y de salud de las mascotas de sus clientes de manera organizada y fácil.",
        tecnologias: ["Vite", "React", "TailwinCSS", "JavaScript", "Local Storage"],
        urlgithub: "https://github.com/CristhianSevilla/citas-veterinaria-react_vite",
        urlweb: "https://pacientes-pets.netlify.app/",
        img: null,
        urlUnica: "healthy-pets"
    },
    {
        id: 7,
        destacado: false,
        titulo: "Bienes Raíces",
        tipo: "FullStack",
        descripcion: "Sitio web con anuncios de casas en venta, el usuario tiene la oportunidad de pedir información sobre una propiedad en venta o para publicar un anuncio de su propiedad en venta. El sitio también cuenta con un blog de consejos y una sección de testimoniales. El administrador tiene todo el control sobre anuncios, vendedores y posts.",
        tecnologias: ["PHP 8", "POO", "MVC", "SASS","JavaScript", "Gulp"],
        urlgithub: "https://github.com/CristhianSevilla/BIENES-RAICES-MVC",
        urlweb: null,
        img: null,
        urlUnica: "bienes-raices"
    },
    {
        id: 8,
        destacado: false,
        titulo: "Café Adicto",
        tipo: "Front-End",
        descripcion: "Este sitio web es un paraíso para los amantes del café, donde podrán encontrar todo lo que necesitan saber sobre este maravilloso mundo y sumergirse en sus colores, aromas y sabores.",
        tecnologias: ["HTML 5", "CSS 3", "Grid", "Flexbox"],
        urlgithub: "https://github.com/CristhianSevilla/BlogDeCafe",
        urlweb: "https://mi-blog-de-cafe.netlify.app/",
        img: null,
        urlUnica: "cafe-adicto"
    },
    {
        id: 9,
        destacado: false,
        titulo: "EMFestival",
        tipo: "Front-End",
        descripcion: "Landing Page con la finalidad de brindar información acerca del evento. La primera impresión al entrar a la página es transmitir a través de un video de fondo la emoción de vivir la experiencia de estar presente el día del evento.",
        tecnologias: ["HTML 5", "SASS", "JavaScript", "Gulp"],
        urlgithub: "https://github.com/CristhianSevilla/EMFestival",
        urlweb: "https://emfest.netlify.app/",
        img: null,
        urlUnica: "emfestival"
    },
]

export default PROYECTOS