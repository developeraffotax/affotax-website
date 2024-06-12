import Service from "@/components/Services/Service/Service"
import { dataArr } from "@/data/serviceData"


const ServicesPage = ({params}) => {
    //console.log( 'the result is',params.slug)

    
    
    let serviceData = dataArr.filter((el) => el.link === params.slug);

    //console.log(serviceData)


  return (
    <>
       <Service data={serviceData[0]}/>
    </>
  )
}

export default ServicesPage