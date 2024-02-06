import Image from "next/image"
import Logo from "/public/images/logo.png"
import Link from "next/link"
import styles from "./header.module.scss"
const Header= () =>{
    return(
        <div className={styles.container}>
            <div className={styles.logotipo}>
                <Image src={Logo}></Image>
            </div>
            
            <div className={styles.menu}>
                    <Link href="/">Home</Link>
                    <Link href="/">O que Fazemos</Link>
                    <Link href="/">Cases</Link>
            </div>
            
                
                    
            
            <div className={styles.button}>
                <button className={styles.button}>Fale Conosco</button>
            </div>

        </div>
    )
}
export default Header