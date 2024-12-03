import React from 'react'

const NavBarra = () => {
  return (
    //CSS Inline
    <div style={{height: "100px", width: "100%", backgroundColor: "#00B058", display: "flex", justifyContent: 'space-around', alignItems: 'center'}}>
        <button>Opçoes</button>
        <a href="/" style={{textDecoration: "none", color: "black"}}><p style={{fontSize: "40px"}}>Zaneti Supermercados</p></a>
        <a href="/perfil"><button>Minha Conta</button></a>
    </div>
  )
}

export default NavBarra
