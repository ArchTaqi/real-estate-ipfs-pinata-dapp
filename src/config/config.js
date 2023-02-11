

/* Pinata Keys ********************************

API Key: 
API Secret: 
JWT: 

Pinata Gateway:

JWT: 

*/

export const pinata_api_key = "";
export const pinata_api_secret = "";
export const pinata_gateway_jwt = "";
export const pinata_ipfs_gateway = "";

export const readHeader = {
	"Content-Type": "application/json",
}

export const getHeader = {
	headers: {
		'Content-Type': 'application/json',
		'pinata_api_key': pinata_api_key,
		'pinata_api_key_secret': pinata_api_secret,
	}
}
