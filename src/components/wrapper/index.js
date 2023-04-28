import Navbar from '../navbar'
import SideMenu from '../sideMenu'

export default function Wrapper({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideMenu />
        <main className="w-full bg-gray-100 min-h-screen p-3 md:p-10 pt-32 md:pt-24">
          {children}
        </main>
      </div>
    </>
  )
}
