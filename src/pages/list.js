import { sendFileToIPFS, sendJSONToIPFS } from "@/components/pinata";
import { useState } from "react";
import { PINATA_GATEWAY_JWT, PINATA_GATEWAY_NAME } from "../config/config"

export default function List() {

  const [ picCid, setPicCid ] = useState('');
  const [ picture, setPicture ] = useState('pinatalogo.png');

  async function updatePic(e) {
    const file = e.target.files[ 0 ];
    const getCid = await sendFileToIPFS(file);
    console.log(getCid);
    setPicCid(getCid);
    const ipfsPath = "https://" + PINATA_GATEWAY_NAME + ".mypinata.cloud/ipfs/" + getCid + "?pinataGatewayToken=" + PINATA_GATEWAY_JWT;
    setPicture(ipfsPath);
  }

  async function listProperty() {
    let picture = picCid;
    let title = document.getElementById('title').value.toString();
    let price = document.getElementById('price').value.toString();

    if( !title || !price) return

    const receipt = await sendJSONToIPFS(title, price, picture);
    if (receipt !=  '') {
      let confirmation = 'Listed Successfully';
      alert(confirmation);
    } else {
      let confirmation = 'Info not completed';
      alert(confirmation);
    }
	}

  return (
    <>
    <div className="pricing-header  pb-md-4 mx-auto text-left">
      <h4 className="display-6 fw-normal">Add New Property</h4>
    </div>
      <form className="row gap-3 bg-light p-3">
        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Property Title</label>
            <input type="text" className="form-control" id="title" placeholder="enter your property title" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Asking Price</label>
            <div className="input-group">
              <div className="input-group-text">$</div>
              <input type="text" className="form-control" id="price" placeholder="price"/>
          </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Add Property Picture</label>
            <input className="form-control" type="file" id="propertyPicture" onChange={updatePic} />
            <img className="bd-placeholder-img" src={picture} width="100%" height="100%" aria-hidden="true" focusable="false" />
            </div>
          <br /><br /><br />
        </div>
        <br /><br /><br />

        <div className="row mt-5">
          <div className="col-12 d-grid gap-2 col-6 mx-auto">
            <button type="submit" onClick={listProperty} className="btn btn-danger btn-lg">List Property</button>
          </div>
        </div>
      </form>
    </>
  )
}