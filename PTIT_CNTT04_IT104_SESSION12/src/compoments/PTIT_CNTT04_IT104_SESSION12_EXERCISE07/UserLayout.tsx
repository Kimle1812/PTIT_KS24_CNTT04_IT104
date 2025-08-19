import Header from './Header'
import Navigation from './Navigation'
import Menu from './Menu'
import Cart from './Cart'
import Article from './Article'
export default function UserLayout() {
  return (
    <div>
        <Header></Header>
        <Navigation></Navigation>
        <div style={{display: "flex"}}>
            <Menu></Menu>
            <div style={{backgroundColor: "lightpink", display: "flex", flexWrap: "wrap", width: "60%", alignItems: "center", justifyContent: "center", gap: "15px"}}>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart>
            </div>
            <Article></Article>
        </div>
    </div>
  )
}