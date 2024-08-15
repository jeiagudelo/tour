import Link  from "next/link";

function Navigation(){
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
  <Link className="navbar-brand" href="/">Explora tu mundo</Link>
  <button className="navbar-toggler" type="button" 
  data-bs-toggle="collapse" 
  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/reservas">Reservas</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/destinos ">Destinos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="nosotros">quien somos</Link>
      </li>
     
    </ul>
  </div>
</div>
</nav>
</>
    );
}

export default Navigation;