import Cabecalho from "Components/Cabecalho";
import Menu from "Components/Menu";
import Banner from './banner.png'
import styles from './PaginaInicial.module.scss'
import "assets/fontes/GandhiSans-Bold.otf"
import "assets/fontes/GandhiSans-Regular.otf"
import Rodape from "Components/Rodape";
import Galeria from "Components/Galeria";
import Populares from "Components/Populares";

export default function InicialPage() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completo do espaço</h1>
                        <img src={Banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}