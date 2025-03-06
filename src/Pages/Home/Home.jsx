import Header from "../../components/Header/Header"
import Banner from "../../components/Banner/Banner"
import Content from "../../components/Content/Content"
import CardList from "../../components/CardList/CardList"

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Content/>
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="8.48721" cy="11.5203" rx="8.47989" ry="8.47979" fill="#49c5b6"/>
<path d="M20.7742 8.91465C20.7742 13.3577 17.1724 16.9596 12.7292 16.9596C8.28605 16.9596 4.68418 13.3577 4.68418 8.91465C4.68418 4.47157 8.28605 0.869727 12.7292 0.869727C17.1724 0.869727 20.7742 4.47157 20.7742 8.91465Z" stroke="#374785" strokeWidth="1.73945"/>
</svg>
    <p style={{fontSize:"40px", textAlign:"center",marginBottom:"0px", marginTop:"10px"}}>Мои проекты</p>
    <CardList/>
    </>
  )
}

export default Home