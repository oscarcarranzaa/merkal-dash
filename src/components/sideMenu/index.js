import Link from 'next/link'
import { useEffect, useState } from 'react'
import CollapseSVG from '../icons/collapse'
import CompanySVG from '../icons/company'
import ExpandSVG from '../icons/expand'
import HomeSVG from '../icons/home'
import MessageSVG from '../icons/message'
import PieChartSVG from '../icons/pieChart'
import styles from './styles.module.css'

export default function SideMenu() {
  const [open, setOpen] = useState()
  const toggleMenu = () => {
    localStorage.setItem('open', !open)
    setOpen(!open)
  }
  useEffect(() => {
    const lsitem = window.localStorage.getItem('open')
    lsitem === null || lsitem === 'false' ? setOpen(false) : setOpen(true)
    console.log(lsitem)
  }, [open])
  const menuItems = [
    {
      id: 1,
      name: 'Inicio',
      url: '/',
      icon: <HomeSVG size={24} />
    },
    {
      id: 2,
      name: 'Empresas',
      url: '/enterprises',
      icon: <CompanySVG size={24} />
    },
    {
      id: 3,
      name: 'Analítica',
      url: '/analytics',
      icon: <PieChartSVG size={24} />
    },
    {
      id: 4,
      name: 'Reportes',
      url: 'reports',
      icon: <MessageSVG size={24} />
    }
  ]

  return (
    <>
      <div className="bg-slate-50 pt-20">
        <div className="mt-5">
          <button
            onClick={toggleMenu}
            className="flex bg-slate-100 p-2 pl-4 w-full border-t border-b  border-zinc-200"
          >
            {open && <CollapseSVG size={24} />}
            {!open && <ExpandSVG size={24} />}
            <span className={`${!open ? 'hidden' : ''} ml-2`}>Cerrar menú</span>
          </button>
        </div>
        <div className={!open ? 'p-2' : ''}>
          <div className={`${open ? 'w-auto p-2' : 'w-10'}`}>
            <nav className="mt-8">
              <ul>
                {menuItems.map((item) => {
                  return (
                    <li key={item.id} className="mb-2">
                      <Link href={item.url}>
                        <a>
                          <div
                            className={`${
                              open ? '' : styles.menu_link
                            } flex hover:bg-slate-200 p-2 pr-2 pl-2  rounded-md relative`}
                          >
                            <span>{item.icon}</span>
                            <span
                              className={`${
                                !open ? 'hidden' : ''
                              } ml-4 pr-5 text-base`}
                            >
                              {item.name}
                            </span>
                            <div className={styles.toggMenuHover}>
                              <div>
                                <span>{item.name}</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
