import logo from '../assets/img/R.png';

const Footer = () => {
    return(
        <footer className="footer">
			<div className="container container-footer">
				
				<div className="copyright">
					<p>
						UNIVERSIDAD AUTONOMA TOMAS FRIAS &copy; 2024
					</p>

					<img src={logo} alt="UATF"  className="logo"/>
				</div>
			</div>
		</footer>
    );
}
export default Footer;