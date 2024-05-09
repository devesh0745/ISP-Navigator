import navbarStyles from "../styles/Navbar.module.css"

function Navbar(){
    return(
        <div className={navbarStyles.container}>
            
            <h1>ISP-Navigator</h1>
            <div>
             <h3>TOTAL-ISP:05</h3>
            </div>
        </div>
    )
}
export default Navbar;