import AlertEnterprise from '@/components/cardEnterprises/alertEnterprise'
import CardEnterprises from 'components/cardEnterprises'
import Wrapper from '../../components/wrapper'

export default function Enterprises() {
  return (
    <>
      <Wrapper>
        <div className="mb-10">
          <h1 className="text-5xl font-semibold">Empresas</h1>
        </div>
        <section>
          <div className="grid grid-cols-8 gap-x-10">
            <div className="grid gap-y-10 col-span-5">
              <CardEnterprises
                name={'ACCMOVIL HONDURAS'}
                image={'/bussines-image.jpg'}
              />
              <CardEnterprises name={'ACOSA CHOLUTECA'} image={'/acosa.jpg'} />
            </div>
            <div className="col-span-3">
              <AlertEnterprise />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
