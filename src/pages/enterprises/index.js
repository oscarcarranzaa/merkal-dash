import CardEnterprises from '@/components/cardEnterprises'
import Wrapper from '../../components/wrapper'

export default function Enterprises() {
  return (
    <>
      <Wrapper>
        <div className="mb-10">
          <h1 className="text-5xl font-semibold">Empresas</h1>
        </div>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-5">
            <CardEnterprises
              name={'Acosa Honduras'}
              username={'@acosahn'}
              image={'/acosa.jpg'}
            />
            <CardEnterprises
              name={'Accmovil'}
              username={'@accmovil'}
              image={'/acc.jpg'}
            />
            <CardEnterprises
              name={'Promaco'}
              username={'@promaco'}
              image={'/promaco.jpg'}
            />
            <CardEnterprises
              name={'Lady Lee'}
              username={'@ladylee'}
              image={'/ladylee.jpg'}
            />
            <CardEnterprises
              name={'La curacao HN'}
              username={'@lacuracao'}
              image={'/lacuracao.jpg'}
            />
          </div>
        </section>
      </Wrapper>
    </>
  )
}
