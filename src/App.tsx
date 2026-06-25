import { SmoothScroll } from './components/SmoothScroll'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Profile } from './components/sections/Profile'
import { CapabilityMap } from './components/sections/CapabilityMap'
import { SelectedWork } from './components/sections/SelectedWork'
import { Toolchain } from './components/sections/Toolchain'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <SmoothScroll>
      <div className="bg-fx" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Profile />
        <CapabilityMap />
        <SelectedWork />
        <Toolchain />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
