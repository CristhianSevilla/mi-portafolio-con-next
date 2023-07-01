import Image from "next/image"
import styles from "../styles/habilidades.module.css"
import stylesSeccion from "../styles/acercaDe.module.css"

const Habilidades = () => {
    return (
        <section className={`${styles.habilidades_background} seccion`}>
            <div className="contenedor-small-2">
                <div className={`${stylesSeccion.seccion_i}`}>
                    <div className={`${styles.habilidades} texto`}>
                        <ul>
                            <li>
                                <Image src='/icons/react.svg' width={45} height={45} alt="Desarrollador Web" quality={100} />
                                <p>React</p>
                            </li>
                            <li>
                                <Image src='/icons/next.svg' width={45} height={45} alt="Desarrollador Web" quality={100} />
                                <p>NextJS</p>
                            </li>
                            <li>
                                <Image src='/icons/api.svg' width={45} height={45} alt="Desarrollador Web" quality={100} />
                                <p>ApiRest</p>
                            </li>
                            <li>
                                <Image src='/icons/js.svg' width={45} height={45} alt="Desarrollador Web" quality={100} />
                                <p>JavaScript</p>
                            </li>
                            <li>
                                <Image src='/icons/html.svg' width={45} height={45} alt="Desarrollador Web" quality={100} />
                                <p>HTML</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="css3"><path d="M20.772,3.36426A1.00062,1.00062,0,0,0,20,3H6A1,1,0,0,0,6,5H18.78613l-.78094,4H5a1,1,0,0,0,0,2H17.61475l-1.1626,5.95508-6.32324,1.99658L4.71875,17.25244l.20361-1.06494a1.00015,1.00015,0,0,0-1.96484-.375L2.5874,17.75244A1.00059,1.00059,0,0,0,3.27,18.894L9.83008,20.9541a1.00175,1.00175,0,0,0,.60107-.00049l7.18994-2.27a1.00064,1.00064,0,0,0,.68018-.7622l2.68018-13.73A1.00008,1.00008,0,0,0,20.772,3.36426Z" fill="#34a853" className="color000000 svgShape"></path></svg>
                                <p>CSS3</p>
                            </li>
                            <li>
                                <Image src='/icons/sass.svg' width={45} height={45} alt="Desarrollador Web" quality={100} />
                                <p>SASS</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="tailwind-css"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path></svg>
                                <p>Tailwind</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bootstrap"><path d="M21.583 24H2.417A2.42 2.42 0 0 1 0 21.583V2.417A2.42 2.42 0 0 1 2.417 0h19.166A2.42 2.42 0 0 1 24 2.417v19.167A2.42 2.42 0 0 1 21.583 24zM2.417 1C1.636 1 1 1.635 1 2.417v19.167C1 22.365 1.636 23 2.417 23h19.166c.781 0 1.417-.635 1.417-1.417V2.417C23 1.635 22.364 1 21.583 1H2.417z"></path><path d="M12.95 19.714H6.518a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5h6.803c1.37 0 2.488.324 3.323.963.886.675 1.335 1.687 1.335 3.007 0 .807-.204 1.512-.607 2.094-.205.297-.456.56-.75.787.5.255.908.61 1.22 1.062.496.717.747 1.615.747 2.671 0 .543-.095 1.072-.281 1.575 0 .059-.01.117-.032.17a3.612 3.612 0 0 1-1.071 1.435c-.482.39-1.079.696-1.773.909-.702.217-1.536.327-2.482.327zm-5.932-1h5.933c.845 0 1.58-.095 2.186-.282.572-.175 1.056-.421 1.439-.731a2.63 2.63 0 0 0 .714-.898.51.51 0 0 1 .036-.166c.175-.424.263-.874.263-1.338 0-.849-.191-1.556-.569-2.103-.356-.516-.908-.855-1.642-1.01a.5.5 0 0 1-.396-.489c0-.201.12-.428.306-.506.549-.232.974-.562 1.263-.979.285-.413.43-.926.43-1.526 0-1.005-.309-1.729-.942-2.212-.656-.503-1.57-.758-2.716-.758H7.018v12.998z"></path><path d="M13.319 17.715H8.985a.5.5 0 0 1-.5-.5v-4.368a.5.5 0 0 1 .5-.5h4.321c.834 0 1.507.212 2.001.63a.49.49 0 0 1 .074.055c.514.459.778 1.118.787 1.958 0 .851-.262 1.525-.778 2.009-.5.475-1.198.716-2.071.716zm-3.834-1h3.834c.608 0 1.075-.149 1.386-.443.312-.293.464-.71.464-1.276-.005-.521-.139-.907-.406-1.173a.366.366 0 0 1-.062-.048c-.314-.287-.771-.427-1.394-.427H9.485v3.367zm3.484-5.137h-4a.5.5 0 0 1-.5-.5V7.215a.5.5 0 0 1 .5-.5h4c.776 0 1.396.183 1.843.544.475.383.716 1.016.716 1.879 0 .779-.258 1.393-.767 1.825a.42.42 0 0 1-.049.037c-.468.378-1.069.578-1.743.578zm-3.5-1h3.5c.462 0 .846-.127 1.14-.377a.32.32 0 0 1 .038-.029c.256-.236.381-.574.381-1.034 0-.546-.116-.917-.345-1.101-.264-.214-.673-.322-1.214-.322h-3.5v2.863z"></path></svg>
                                <p>Bootstrap</p>
                            </li>
                            <li>
                                <Image src='/icons/github.svg' width={45} height={45} alt="Desarrollador Web" quality={100} />

                                <p>GitHub</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="php"><path d="M12 19c-6.729 0-12-3.075-12-7s5.271-7 12-7 12 3.075 12 7-5.271 7-12 7zm0-13C5.935 6 1 8.691 1 12s4.935 6 11 6 11-2.691 11-6-4.935-6-11-6z"></path><path d="M5.501 16a.5.5 0 0 1-.494-.582l.33-1.98a.475.475 0 0 1 .007-.04l.663-3.979A.5.5 0 0 1 6.5 9h1.371c.552 0 1.071.244 1.424.669.354.425.498.98.396 1.524l-.194 1.036A2.171 2.171 0 0 1 7.364 14H6.257l-.264 1.582a.5.5 0 0 1-.492.418zm.923-3h.94c.562 0 1.046-.401 1.15-.955l.194-1.035A.853.853 0 0 0 7.871 10h-.947l-.5 3zm9.327 3a.5.5 0 0 1-.494-.582l.33-1.98a.475.475 0 0 1 .007-.04l.663-3.979A.5.5 0 0 1 16.75 9h1.371c.552 0 1.071.244 1.424.669.354.425.498.98.396 1.524l-.194 1.036A2.171 2.171 0 0 1 17.614 14h-1.107l-.264 1.582a.5.5 0 0 1-.492.418zm.923-3h.94c.562 0 1.046-.401 1.15-.955l.194-1.035a.853.853 0 0 0-.837-1.01h-.947l-.5 3zm-5.673 1a.5.5 0 0 1-.494-.582l1-6a.5.5 0 0 1 .986.164l-1 6a.5.5 0 0 1-.492.418z"></path><path d="M14.001 14a.5.5 0 0 1-.496-.57l.359-2.518a.36.36 0 0 0-.356-.412H11.75a.5.5 0 0 1 0-1h1.758a1.36 1.36 0 0 1 1.346 1.554l-.359 2.517a.5.5 0 0 1-.494.429z"></path></svg>
                                <p>PHP8</p>
                            </li>
                            <li>
                                <Image src='/icons/java.svg' width={45} height={45} alt="Desarrollador Web" quality={100} />
                                <p>Java</p>
                            </li>
                        </ul>
                    </div>
                    <div className="texto">
                    <div className="titulo ">
                            <h2><span>Skills</span></h2>
                        </div>
                        <p>Cuento con un conjunto integral de habilidades que me permiten crear sitios web excepcionales y funcionales</p>
                        <p>Siempre me aseguro de que mis sitios sean accesibles y estén optimizados para diferentes dispositivos y tamaños de pantalla mediante diseño responsivo</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Habilidades