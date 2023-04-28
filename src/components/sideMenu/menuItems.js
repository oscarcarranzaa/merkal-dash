import HomeSVG from '../icons/home'
import PieChartSVG from '../icons/pieChart'
import CompanySVG from '../icons/company'

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
  }
]
export default menuItems
