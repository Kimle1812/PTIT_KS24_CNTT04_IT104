import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'
export default function AdminIndex() {
  return (
    <div>
      <Header></Header>
      <div style={{display: "flex", gap: "10px"}}>
        <Menu></Menu>
        <div style={{width: "80%"}}>
            <Main></Main>
            <Footer></Footer>
        </div>
      </div>
    </div>
  )
}