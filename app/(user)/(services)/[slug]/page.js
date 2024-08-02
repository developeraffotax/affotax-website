import Service from "@/components/Services/Service/Service"
import ContractorAccountants from "@/components/WhoWeHelp/ContractorAccountants";
import LimitedCompanies from "@/components/WhoWeHelp/LimitedCompanies";
import LimitedLiabilityPartnership from "@/components/WhoWeHelp/LimitedLiabilityPartnership";
import Partnerships from "@/components/WhoWeHelp/Partnerships";
import SmallBusinessAccountants from "@/components/WhoWeHelp/SmallBusinessAccountants";
import SoleTraders from "@/components/WhoWeHelp/SoleTraders";
import XeroAccountants from "@/components/WhoWeHelp/XeroAccountants";
import { dataArr } from "@/data/serviceData"
import { metaDataObject } from "@/data/metadataWhowehelp";




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
    return {
      title: metaDataObject[params.slug]?.title,
      description: metaDataObject[params.slug]?.description,
    
      
    }
  }


  return {
    title: serviceData[0].metaTitle,
    description: serviceData[0].metaDescription,
    keywords: serviceData[0].keywords ,
    authors: [{ name: 'Affotax', url: 'https://affotax.com' }],
    creator: 'Ihtisham Ul Haq -- +92-301-6667656',
  
    
  }
}






// SERVICES PAGE AND WHO WE HELP PAGES HERE




const ServicesPage = ({params}) => {
    console.log( 'the result is',params.slug)


    let render;
    const location = params.slug;

    switch(location) {
        case 'sole-traders': return render = <SoleTraders />
        case 'limited-companies': return render = <LimitedCompanies />
        case 'partnerships': return render = <Partnerships />
        case 'limited-liability-partnerships': return render = <LimitedLiabilityPartnership />
        case 'contractor-accountants': return render = <ContractorAccountants />
        case 'small-business-accountants': return render = <SmallBusinessAccountants />
        case 'xero-accountants': return render = <XeroAccountants />
       
          

    }

      // SERVICES PAGES
    if (!render) {
      let serviceData = dataArr.filter((el) => el.link === params.slug);
      if (serviceData.length === 0) {
        return <h3>THIS PAGE DOES NOT EXIST | WE'RE WORKING ON IT | THANK YOU FOR YOUR COOPERATION</h3>
      }
       render = <Service data={serviceData[0]}/>
    }




    return <> {render} </>








    
    

    //console.log(serviceData)

    










    
}

export default ServicesPage