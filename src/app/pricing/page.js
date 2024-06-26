import { getUserMeLoader } from "../data/services/get-user-me-loader"
import ButtonPay from "../utils/ButtonPay"
import { pricingData } from "../utils/pricingData"
import LinkComponent from "../components/LinkComponent"

const PricingComponet = async() => {
  const user = await getUserMeLoader()

  return (
    <section id="pricing" className="flex flex-col justify-center items-center text-white min-h-screen">
      <h2 className="mx-auto text-3xl md:text-5xl font-semibold text-center mt-10 mb-4 md:mt-0">Confirma tu plan</h2>
      <p className="mx-auto text-sm md:text-base font-light text-center md:mb-20 opacity-85">Pago unico*</p>
      <div className="flex justify-center items-center flex-wrap text-center text-balance">
        {pricingData.map((plan, i) => {
          const { planName, time, price, description } = plan

          return (
            <div key={i} className={`w-fit flex flex-col m-5 md:m-10 md:mx-6 ${i === 1 && 'w-fit bg-gradient-to-b from-[#0024d6] 60% to-[#0101301b] 100% p-1 md:-translate-y-4'}`}>
              <div className={`relative h-[18.5rem] md:h-80 flex flex-col justify-between px-2 py-5 md:px-4 max-w-72 ${i === 1 && 'bg-gradient-to-b from-[#01043b] to-[#01013000] pt-8'}`}>
                {i === 1 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm bg-gradient-to-r from-[#5a73f0] to-[#002aff] py-1 px-3 rounded-full">Mas popular</span>}
                <div>
                  <h2 className="text-2xl font-medium pb-2 border-b border-blue-600 opacity-85 uppercase">{planName}</h2>
                  <h3 className="text-3xl py-3 font-semibold w-60 mx-auto opacity-85">USD {price}/<span className="text-2xl">{time}</span></h3>
                  <p className=" text-sm max-w-1/2 opacity-85">{description}</p>
                </div>
                {user.ok
                  ? <ButtonPay
                    plan={plan}
                    classStyle={`${i === 1 && 'link-blue-bg text-white'} block py-3 px-10 w-full text-md font-normal transtion hover:opacity-90 bg-[#e7ebff] text-[#2245ff] rounded-full`}
                  />
                  : <LinkComponent
                    text='CONTRATAR'
                    route='create-account'
                    classStyle={`${i === 1 && 'link-blue-bg text-white'} block py-3 px-10 w-full text-md`}
                  />
                }
              </div>
            </div>
          )
        }
        )}
      </div>
    </section>
  )
}

export default PricingComponet