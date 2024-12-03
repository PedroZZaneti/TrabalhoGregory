// Importacao de Componentes
import NavBarra from "../components/NavBarra"

// Importacao de CSS
import "../styles/Home.css"

const Home = () => {
    
  return (
    <div>
      <NavBarra/>
      <body>
        <h1 style={{textAlign: "center", fontSize: "30px", fontFamily: "sans-serif"}}>Produtos</h1>
         <div className="Container">
            <div className="CardProduto">
                <img src="https://cdn.awsli.com.br/600x450/582/582816/produto/28384418/la-aco-4uni-bombril-5671f99b10.jpg" alt="" />
                <h1>Bombril Unidade 160g</h1>
                <h2>R$15,90</h2>
                <h3>Adcionar ao Carrinho</h3>
            </div>
            <div className="CardProduto">
                <img src="https://t10917.vteximg.com.br/arquivos/ids/166136-1000-1000/AGUA-SANITARIA-EMB---2-LT-YPE_IMG1.jpg?v=638513137906630000" alt="" />
                <h1>Água Sanitaria Ypê 1L</h1>
                <h2>R$23,50</h2>
                <h3>Adcionar ao Carrinho</h3>
                
            </div>
            <div className="CardProduto">
                <img src="https://acdn.mitiendanube.com/stores/001/387/654/products/ype-transparente1-88a1b51e52e32c88a816347339910442-640-0.jpg" alt="" />
                <h1>Detergente Ypê Neutro</h1>
                <h2>R$8,70</h2>
                <h3>Adcionar ao Carrinho</h3>
            </div>
            <div className="CardProduto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s" alt="" />
                <h1>Amaciante Downy 1,5L</h1>
                <h2>R$32,90</h2>
                <h3>Adcionar ao Carrinho</h3>
            </div>
            <div className="CardProduto">
                <img src="https://cdn.awsli.com.br/600x450/582/582816/produto/28384418/la-aco-4uni-bombril-5671f99b10.jpg" alt="" />
                <h1>Bombril Unidade 160g</h1>
                <h2>R$15,90</h2>
                <h3>Adcionar ao Carrinho</h3>
            </div>
            <div className="CardProduto">
                <img src="https://t10917.vteximg.com.br/arquivos/ids/166136-1000-1000/AGUA-SANITARIA-EMB---2-LT-YPE_IMG1.jpg?v=638513137906630000" alt="" />
                <h1>Água Sanitaria Ypê 1L</h1>
                <h2>R$23,50</h2>
                <h3>Adcionar ao Carrinho</h3>
                
            </div>
            <div className="CardProduto">
                <img src="https://acdn.mitiendanube.com/stores/001/387/654/products/ype-transparente1-88a1b51e52e32c88a816347339910442-640-0.jpg" alt="" />
                <h1>Detergente Ypê Neutro</h1>
                <h2>R$8,70</h2>
                <h3>Adcionar ao Carrinho</h3>
            </div>
            <div className="CardProduto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s" alt="" />
                <h1>Amaciante Downy 1,5L</h1>
                <h2>R$32,90</h2>
                <h3>Adcionar ao Carrinho</h3>
            </div>
          
            
            
            
         </div>
      </body>
    </div>
  )
}

export default Home
