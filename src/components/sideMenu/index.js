import Link from 'next/link'
import CollapseSVG from '../icons/collapse'
import ExpandSVG from '../icons/expand'
import styles from './styles.module.css'
import menuItems from './menuItems'
import { sideBar } from '../../redux/states/openSideMenu'
import { useSelector, useDispatch } from 'react-redux'
import Priority from './priority'
import { gql, useQuery } from '@apollo/client'

const PRIORITY_ENTERPRISE = gql`
  query {
    enterprise {
      name
      username
    }
  }
`

export default function SideMenu() {
  const { data, loading, error } = useQuery(PRIORITY_ENTERPRISE)
  console.log(data)

  const dispatch = useDispatch()
  const open = useSelector((store) => store.openSideBar)
  const toggleMenu = () => {
    dispatch(sideBar(!open))
  }
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
            {data ? <Priority enterprises={data.enterprise}></Priority> : null}
          </div>
        </div>
      </div>
    </>
  )
}
