import Navbar from '../navbar'
import SideMenu from '../sideMenu'

export default function Wrapper({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideMenu />
        <main className="bg-zinc-100 w-full min-h-screen p-3 md:p-10 pt-32 md:pt-20">
          {children}
        </main>
      </div>
    </>
  )
}
