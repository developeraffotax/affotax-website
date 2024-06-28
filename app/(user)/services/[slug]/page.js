import Service from "@/components/Services/Service/Service"
import { dataArr } from "@/data/serviceData"




// GENERATING THE DYNAMIC META DATA


export async function generateMetadata({ params}) {
  // read route params
  //const id = params.id
 
  // fetch data
  //const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || []
 

  let serviceData = dataArr.filter((el) => el.link === params.slug);
  if (serviceData.length === 0) {
    return false;
  }


  return {
    title: serviceData[0].title,
    description: serviceData[0].title,
    keywords: ['Next.js', 'React', 'JavaScript'],
    authors: [{ name: 'Affotax', url: 'https://affotax.com' }],
    creator: 'Ihtisham Ul Haq -- +92-301-6667656',
  
    
  }
}











const ServicesPage = ({params}) => {
    //console.log( 'the result is',params.slug)

    
    
    let serviceData = dataArr.filter((el) => el.link === params.slug);

    //console.log(serviceData)

    if (serviceData.length === 0) {
      return <h3>THIS PAGE DOES NOT EXIST | WE'RE WORKING ON IT | THANK YOU FOR YOUR COOPERATION</h3>
    }










  return (
    <>
      


       <Service data={serviceData[0]}/>
    </>
  )
}

export default ServicesPage