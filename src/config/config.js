/* Pinata Keys ********************************
API Key: 
API Secret: 
JWT: 
GATEWAY:
*/

export const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
export const PINATA_API_SECRET = process.env.NEXT_PUBLIC_PINATA_API_SECRET;
export const PINATA_GATEWAY_JWT = process.env.NEXT_PUBLIC_PINATA_GATEWAY_JWT;
// Do NOT ADD .mypinata.cloud... just your gateway name.
export const PINATA_GATEWAY_NAME = process.env.NEXT_PUBLIC_PINATA_GATEWAY_NAME;

export const readHeader = {
    "Content-Type": "application/json",
}

export const getHeader = {
    headers: {
		pinata_api_key: PINATA_API_KEY,
		pinata_secret_api_key: PINATA_API_SECRET,
	}
}

export const sendJsonHeader = {
    headers: {
		'Content-Type': 'application/json', 
		pinata_api_key: PINATA_API_KEY,
		pinata_secret_api_key: PINATA_API_SECRET,
	}
}
