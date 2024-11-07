import axios from "axios";

const sendPageClickReq = async (currentUrl) => {
	try {
		const res = await axios.post('https://backend.affotax.com/api/v1/analytics/events', {
			pageUrl: currentUrl,
			eventType: 'click'
		});

		console.log(res)
	} catch (error) {
		console.log(error)
	}


}



export async function PageTracker(currentUrl) {
	let urls = [];

	const storedUrls = localStorage.getItem("page_tracker");

	if (storedUrls) {
		urls = JSON.parse(storedUrls);
		const isAlreadyStored = urls.includes(currentUrl);
		if (isAlreadyStored) {
			return;
		}
	}

	const newUrlsArray = [...urls];
	newUrlsArray.push(currentUrl);
	localStorage.setItem("page_tracker", JSON.stringify(newUrlsArray));

	await sendPageClickReq(currentUrl)


}
