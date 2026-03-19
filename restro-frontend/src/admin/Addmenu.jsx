import Sidebar from '../components/Sidebar'

import React,{useState} from 'react'

function Addmenu() {
  const [formdata, setForm] = useState({ name:"",category: "",description:"", price: "" ,status:"",image: ""});
      const [errors, setErrors] = useState({});
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");
    
      const validate = () => {
        const e = {};
        if (!formdata.name || formdata.name.trim().length < 3)
          e.name = "Name must be at least 3 chars";
        if (!formdata.price || isNaN(formdata.price))
          e.price = "Valid price required";
        if (!formdata.category) e.category = "Category required";
        if (!formdata.status) e.status = "Status required";
        if (!formdata.image) e.image = "Image required";
        setErrors(e);
        return Object.keys(e).length === 0;
      };
    
      const formChangeData = (ev) => {
        const { name, value, files } = ev.target;
          if (name === "image") {
            setForm((f) => ({ ...f, image: files[0] }));  // save file object
          } else {
            setForm((f) => ({ ...f, [name]: value }));
          }
          setMessage("");
      };
    
      const handleSubmit = async (ev) => {
  ev.preventDefault();
  if (!validate()) return;
  setLoading(true);
  setMessage("");

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formdata.name);
    formDataToSend.append("category", formdata.category);
    formDataToSend.append("description", formdata.description);
    formDataToSend.append("price", formdata.price);
    formDataToSend.append("status", formdata.status);
    if (formdata.image) formDataToSend.append("image", formdata.image); // file

    const res = await fetch("http://localhost:8080/addmenu", {
      method: "POST",
      body: formDataToSend, // no headers needed, browser sets them
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || "Added failed");

    setMessage("✅ " + (data.message || "Added successful"));
    setForm({ name:"", category:"", description:"", price:"", status:"", image:"" });
  } catch (err) {
    setMessage("❌ " + err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    
    <div>
        
      <div className="col-12 grid-margin container-scroller" >
        <Sidebar/>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title"></h4>
                    <form method="post" onSubmit={handleSubmit} className="form-sample">
                      <p className="card-description"> Add Menu Item </p>
                      <div className="row">

                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Name</label>
                            <div className="col-sm-9">
                              <input type="text" name="name" value={formdata.name} onChange={formChangeData} className="form-control" />
                              {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Category </label>
                            <div className="col-sm-9">
                              <select className="form-control" name="category" value={formdata.category} onChange={formChangeData}>
                                <option value="Main Cource">Main Cource</option>
                                <option value="Starter">Starter</option>
                              </select>
                              {errors.category && <small className="text-danger">{errors.categry}</small>}
                            </div>
                          </div>
                        </div>
                      </div>

                        <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Discription</label>
                            <div className="col-sm-9">
                              <input type="text" name="description" value={formdata.description} onChange={formChangeData} className="form-control" />
                              {errors.description && <small className="text-danger">{errors.description}</small>}
                            </div>
                          </div>
                        </div>
                      
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Price</label>
                            <div className="col-sm-9">
                              <input className="form-control" name="price" value={formdata.price} onChange={formChangeData} />
                              {errors.price && <small className="text-danger">{errors.price}</small>}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Status</label>
                            <div className="col-sm-9">
                              <select className="form-control" name="status" value={formdata.status} onChange={formChangeData}>
                                <option value="Active">Active</option>
                                <option value="Deactive">Deactive</option>
                              </select>
                              {errors.status && <small className="text-danger">{errors.status}</small>}
                            </div>
                          </div>
                        </div>
                       <div className="col-md-6">
                          <label>Image</label>
                          <input type="file" name="image" onChange={formChangeData} className="form-control" />
                          {errors.image && <small className="text-danger">{errors.image}</small>}
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-12 text-center">
                            <button 
                              type="submit" 
                              className="btn btn-primary" 
                              >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Addmenu
