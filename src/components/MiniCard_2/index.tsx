import "./MiniCard_2.css"

interface MiniCard2Props {    
    h3: string
    p: string
}

const MiniCard2 = ({ h3, p }: MiniCard2Props ) => {
  return (
    <div className="container_minicard2">
        <img src='./assets/icons/verifica.png' alt='icone de verificado'></img>
        <h3>{h3}</h3>
        <p>{p}</p>
    </div>
  )
}

export default MiniCard2