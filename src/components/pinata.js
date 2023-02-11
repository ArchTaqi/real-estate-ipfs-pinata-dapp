import axios from 'axios';
import {
	pinata_api_key,
	pinata_api_secret,
	pinata_gateway_jwt,
	readHeader,
	getHeader,
	sendJsonHeader,
	ipfsgateway,
} from '../config/config';

export async function getDate()
{
	const dateFormat = new Date(Date.now());
	const dateValue = (dateFormat.getMonth() + 1) + '.' + dateFormat.getDate() + '.' + dateFormat.getFullYear();
	const time = (new Date(dateValue.split('.').join("-")).getTime()) / 1000;
	return {dateValue, time};
}

export async function sendJsonToIPFS(gettitle, getprice, getyear,
	getarea, getaddress, getcountry, getcity,
	getzip, getsellername, getselleremail, getsellerphone) {
	const fetchTime = await getDate();
	const listDate = fetchTime.dateValue;
	const URL = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
	const data = JSON.stringify({
		"pinataMetadata": { name: "listdata"},
		"pinataOptions": { 'cidVersion': 1},
		"pinataContent": {
			"PropertyInfo": {
				"Title": gettitle,
				"Price": getprice,
				"Year": getyear,
				"Area": getarea,
				"Address": getaddress,
				"Country": getcountry,
				"City": getcity,
				"Zip": getzip,
				"Name": getsellername,
				"Email": getselleremail,
				"Phone": getsellerphone,
			}
		}
	});
	console.log(data);
	return 'kjlkjlkjlkjlkjlkjlk'
	// const sendFile = await axios.post(url, data, sendJsonHeader);
	// const hash = 'ipfs://${sendFile.data.IpfsHash}';
	// console.log(hash);
}
