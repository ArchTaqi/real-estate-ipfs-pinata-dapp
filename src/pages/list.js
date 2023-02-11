import { sendJsonToIPFS } from "@/components/pinata";

export default function List() {

	async function listProperty() {
    let gettitle = document.getElementById('title').value.toString();
    let getprice = document.getElementById('price').value.toString();
    let getyear = document.getElementById('year').value.toString();
    let getarea = document.getElementById('area').value.toString();
    let getaddress = document.getElementById('address').value.toString();
    let getcountry = document.getElementById('country').value.toString();
    let getcity = document.getElementById('city').value.toString();
    let getzip = document.getElementById('zip').value.toString();
    let getsellername = document.getElementById('sellername').value.toString();
    let getselleremail = document.getElementById('selleremail').value.toString();
    let getsellerphone = document.getElementById('sellerphone').value.toString();

    if (!gettitle || !getprice || !getyear || !getarea || !getaddress
      || !getcountry || !getcity || !getzip
      || !getsellername || !getselleremail || !getsellerphone) {
        console.log("Taqi");
    } else {
        const receipt = await sendJsonToIPFS(gettitle, getprice, getyear, getarea, getaddress, getcountry, getcity, getzip, getsellername, getselleremail, getsellerphone);
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
            <label className="form-label">Year Built</label>
            <div className="input-group">
              <div className="input-group-text">#</div>
              <input type="text" className="form-control" id="year" placeholder="2009"/>
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Area</label>
            <div className="input-group">
              <div className="input-group-text">Marla</div>
              <input type="text" className="form-control" id="area" placeholder="5"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label className="form-label">Address</label>
            <textarea className="form-control" id="address" rows="3" placeholder="Apartment, studio, or floor"></textarea>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4">
            <label className="form-label">Country</label>
            <input type="text" className="form-control" id="country"/>
          </div>
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input type="text" className="form-control" id="city"/>
          </div>
          <div className="col-md-4">
            <label className="form-label">Zip</label>
            <input type="text" className="form-control" id="zip"/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className="form-label">Upload Property Photo</label>
            <input className="form-control" type="file" id="formFile"/>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-4">
            <label className="form-label">Seller Name</label>
            <input type="text" className="form-control" id="sellername"/>
          </div>
          <div className="col-md-4">
            <label className="form-label">Seller Email</label>
            <input type="text" className="form-control" id="selleremail"/>
          </div>
          <div className="col-md-4">
            <label className="form-label">Seller Phone</label>
            <input type="text" className="form-control" id="sellerphone"/>
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-grid gap-2 col-6 mx-auto">
            <button type="submit" onClick={listProperty} className="btn btn-danger btn-lg">Save</button>
          </div>
        </div>
      </form>
    </>
  )
}