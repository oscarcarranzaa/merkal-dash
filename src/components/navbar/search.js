import { useState } from 'react'
import SearchSVG from '../icons/Search'

export default function SearchNav() {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <>
      <div>
        <label>
          <div className="flex bg-slate-100 rounded-md">
            <input
              type="text"
              placeholder="Buscar"
              autoCapitalize="off"
              autoComplete="off"
              className="bg-transparent p-2"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="mr-2">
              <SearchSVG size={24} />
            </button>
          </div>
        </label>
      </div>
    </>
  )
}
