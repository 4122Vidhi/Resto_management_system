import React,{useState} from 'react'

function Register() {
  const [formdata, setForm] = useState({ name:"",email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    const validate = () => {
      const e = {};
      if (!formdata.name || formdata.name.trim().length < 3) e.name = "Name must be at least 3 chars";
      if (!formdata.email || !/^\S+@\S+\.\S+$/.test(formdata.email)) e.email = "Valid email required";
      if (!formdata.password || formdata.password.length < 4) e.password = "Password must be 4+ chars";
      setErrors(e);
      return Object.keys(e).length === 0;
    };
  
    const formChangeData = (ev) => {
      const { name, value } = ev.target;
      setForm((f) => ({ ...f, [name]: value }));
      setMessage("");
    };
  
    const handleSubmit = async (ev) => {
      ev.preventDefault();
      if (!validate()) return;
      setLoading(true);
      setMessage("");
      try {
        const res = await fetch("http://localhost:8080/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formdata),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Signup failed");
        setMessage("✅ " + (data.message || "Signup successful"));
        setForm({ name: "", email: "", password: "" });
      } catch (err) {
        setMessage("❌ " + err.message);
      } finally {
        setLoading(false);
      }
    };
  return (
    <div><div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Register</h3>
                <form method="post" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="name" value={formdata.name} onChange={formChangeData} className="form-control p_input"/>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formdata.email} onChange={formChangeData} className="form-control p_input"/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={formdata.password} onChange={formChangeData} className="form-control p_input"/>
                  </div>
                  <div>
                    {Object.values(errors).map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/> Remember me </label>
                    </div>
                    <a href="#" className="forgot-pass">Forgot password</a>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block enter-btn">Login</button>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-facebook col mr-2">
                      <i className="mdi mdi-facebook"></i> Facebook </button>
                    <button className="btn btn-google col">
                      <i className="mdi mdi-google-plus"></i> Google plus </button>
                  </div>
                  <p className="sign-up text-center">Already have an Account?<a href="#"> Sign Up</a></p>
                  <p className="terms">By creating an account you are accepting our<a href="#"> Terms & Conditions</a></p>
                </form>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
        </div>
        {/* row ends -->
      </div>
      {/* page-body-wrapper ends */}
    </div>
    {/* container-scroller */}
    
    </div>
    </div>
  )
}

export default Register