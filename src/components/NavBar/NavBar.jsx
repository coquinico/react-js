import CartWidget from "../CartWidget/CartWidget"
import Button from "../Button/Button"

const NavBar = () => {
    return(
        <nav>
        <h2>Ecommerce</h2>
        <CartWidget/>
        <div style={{display:'flex', flexDirection:'column'}}>
        <Button label={'Products'} handleClick={() => console.log('Products')}/>
        <Button label={'Contact'} handleClick={() => console.log('Contact')}/>
        <Button label={'About'}handleClick={() => console.log('About')}/>
        </div>
        
        </nav>
    )
}

export default NavBar