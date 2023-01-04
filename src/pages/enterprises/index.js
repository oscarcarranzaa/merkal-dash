import HorizontalGrid from '../../components/horizontalGrid'
import Wrapper from '../../components/wrapper'

export default function Enterprises() {
  return (
    <>
      <Wrapper>
        Hola Empresa
        <div className=" grid grid-cols-2 gap-2 gap-x-5">
          <HorizontalGrid image={'/static/images/acc-bg-logo.jpg'} />
          <HorizontalGrid image={'/static/images/acc-bg-logo.jpg'} />
          <HorizontalGrid image={'/static/images/acc-bg-logo.jpg'} />
          <HorizontalGrid image={'/static/images/acc-bg-logo.jpg'} />{' '}
          <HorizontalGrid image={'/static/images/acc-bg-logo.jpg'} />
          <HorizontalGrid image={'/static/images/acc-bg-logo.jpg'} />
        </div>
      </Wrapper>
    </>
  )
}
