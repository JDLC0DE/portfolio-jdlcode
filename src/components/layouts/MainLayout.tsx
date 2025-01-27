import { Header } from '../blocks/Header'
import { Footer } from '../blocks/Footer'
import { Projects } from '../contents/Projects'
import { MyProfile } from '../contents/MyProfile'
import { Technology } from '../contents/Technology'
import { Experience } from '../contents/Experience'
import { Contact } from '../contents/Contact'

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main
        id="main-container"
        className="container mx-auto px-4 lg:px-32 xl:px-64 my-16 md:my-24"
      >
        <MyProfile />
        <Technology />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
