import Banner from '../components/Banner'
// import Highlights from '../components/Highlights'


export default function Home() {

  const data = {
    title: "Tpido Budget Tracking App",
    content: "Be dirrrttyy rich ",
    destination: "/",
    label: "Download Now!"
  }
  return (
          <>
            <Banner dataProp={data} />
            {/* <Highlights /> */}
          </>
  )
}
