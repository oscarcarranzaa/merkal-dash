import HorizontalGrid from '../../components/horizontalGrid'
import Wrapper from '../../components/wrapper'

export default function Enterprises() {
  return (
    <>
      <Wrapper>
        Hola Empresa
        <div className="grid gap-y-3">
          <HorizontalGrid image={'/static/images/acc-bg-logo.jpg'} />
          <HorizontalGrid image={'/static/images/acc-bg-logo.jpg'} />
        </div>
      </Wrapper>
    </>
  )
}
