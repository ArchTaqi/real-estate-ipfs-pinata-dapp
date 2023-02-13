import axios from 'axios';
import {
	PINATA_API_KEY,
	PINATA_API_SECRET,
	PINATA_GATEWAY_JWT,
	PINATA_GATEWAY_NAME,
    readHeader,
    getHeader,
    sendJsonHeader,
} from '../config/config';

/*
FUNCTION TO CONVERT CURRENT DATE TO UNIX TIMESTAMP AND YEAR.MONTH.DAY
*/
export async function getDate() {
	const dateFormat = new Date(Date.now());
	const dateValue = (dateFormat.getMonth() + 1) + "." + dateFormat.getDate() + "." + dateFormat.getFullYear();
	const time = (new Date(dateValue.split(".").join("-")).getTime()) / 1000;
	return { dateValue, time };
}

export async function sendJSONToIPFS(title, price, picture) {
    const fetchdate = await getDate()
    const listdate = fetchdate.dateValue;
    const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
	var data = JSON.stringify({
		"pinataMetadata": {
			name: "listed",
		},
		"pinataOptions": {
			"cidVersion": 1
		},
		"pinataContent": {
			"PropertyInfo": {
				"Title": title,
				"Price": price,
				"Listed": listdate,
				"Picture": "https://" + PINATA_GATEWAY_NAME + ".mypinata.cloud/ipfs/" + picture + '?pinataGatewayToken='
			}
		}
	});
    const resFile = await axios.post(url, data, sendJsonHeader).then(function (response) {
        console.log("Success: ", response);
    }).catch(function (error) {
        console.log("Fail! ", error);
    });
    const hash = `ipfs://${resFile.data.IpfsHash}`;
    console.log(hash);
    return "complete";
}

/*
PINATA IPFS FUNCTION TO UPLOAD PICTURES AND FILES
*/
export async function sendFileToIPFS (file) {
    const formData = new FormData();
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
    formData.append("file", file);
    const opts = JSON.stringify({ cidVersion: 0})
    formData.append('pinataOptions', opts);
	const options = {
		maxBodyLength: "Infinity",
		headers: {
			'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
			pinata_api_key: PINATA_API_KEY,
			pinata_secret_api_key: PINATA_API_SECRET,
            Accept: 'text/plain',
		}
	}
	const resFile = await axios.post(url, formData, options);
	return resFile.data.IpfsHash;
}

/*
PINATA IPFS FUNCTION TO GET THE FILES CID's
*/
export async function getFileFromIPFS() {
	const queryFilter = "metadata[name]=listed";
	const url = "https://api.pinata.cloud/data/pinList?" + queryFilter;
	const resFile = await axios.get(url, getHeader)
	const response = resFile.data.rows;
	const output = response.map((value) => {
		let getCid = value.ipfs_pin_hash;
		return getCid;
	})
    return output;
}

/*
PINATA IPFS FUNCTION TO READ THE FILES AFTER OBTAINING THE CID's
*/
export async function readFileFromIPFS() {
	const output = await getFileFromIPFS();
	const listArray = [];
	let i = 0;
	for (i; i < output.length; i++) {
        const value = output[ i ];
        const ipfsPath = "https://" + PINATA_GATEWAY_NAME + ".mypinata.cloud/ipfs/" + value + '?pinataGatewayToken=' + PINATA_GATEWAY_JWT;
        const info = await axios.get(ipfsPath, readHeader);
        console.log(info.data.PropertyInfo)
		listArray.push(info.data.PropertyInfo);
	}
	return listArray;
}
