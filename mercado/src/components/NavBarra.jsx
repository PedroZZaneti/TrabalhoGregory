import React from 'react'

const NavBarra = () => {
  return (
    //CSS Inline
    <div style={{height: "100px", width: "100%", backgroundColor: "green", display: "flex", justifyContent: 'space-around', alignItems: 'center'}}>
        <button>Opçoes</button>
        <h1>Zaneti Supermercados</h1>
        <button>Minha Conta</button>
    </div>
  )
}

export default NavBarra
