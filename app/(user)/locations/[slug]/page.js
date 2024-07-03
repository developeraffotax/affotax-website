import Birmingham from "@/components/Locations/Birmingham";
import England from "@/components/Locations/England";
import London from "@/components/Locations/London";
import Manchester from "@/components/Locations/Manchester";
import NorthernIreland from "@/components/Locations/NorthernIreland";
import Scotland from "@/components/Locations/Scotland";
import Wales from "@/components/Locations/Wales"




export const metadata = {
	title: "working",
	description: ".",

};







export default function LocationPage({params}) {
    console.log(params)
    let render;
    const location = params.slug;

    switch(location) {
        case 'wales': return render = <Wales />
        case 'london': return render = <London />
        case 'england': return render = <England />
        case 'scotland': return render = <Scotland />
        case 'birmingham': return render = <Birmingham />
        case 'manchester': return render = <Manchester />
        case 'northern_ireland': return render = <NorthernIreland />

    }

    return(
        <>
            {render}
        </>
    )
}