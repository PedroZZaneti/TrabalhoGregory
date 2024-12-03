// Importacao de Componentes
import NavBarra from "../components/NavBarra"
import LoginForm from "../components/LoginForm"

// 

const Perfil = () => {
    return (
        <div>
            <NavBarra />
            <body>
                <div className="Container">
                    <LoginForm/>
                </div>
            </body>

        </div>
    )
}

export default Perfil
