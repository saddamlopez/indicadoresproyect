import logo from '../assets/img/R.png';
const Header = () =>{
    return (
        <header>
			<div className="container-hero">
				<div className="container hero">
					<div className="customer-support">
						<img src={logo} alt="UATF" className="logo-pequeno"/>
						<div className="content-customer-support">
							<span className="text">UNIVERSIDAD AUTONOMA </span>
							<span className="number">TOMAS FRIAS</span>
						</div>
					</div>

					<div className="texto-medio">
						<h1>DIRECCION DE SERVICIOS ACEMICOS</h1>
						<h2>INDICADORES ACADEMICOS</h2>
					</div>
				
				</div>
			</div>

			<div className="container-navbar">
				<nav className="navbar ">
					<h1>BIENVENIDO AL MODULO DE INDICADORES ACADEMICOS</h1>
					<h3>Selecione una opcion para ver la lista de indicadores</h3>
				</nav>
			</div>
		</header>
    );
}
export default Header;