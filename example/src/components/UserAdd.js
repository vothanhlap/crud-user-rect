import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


const UserAdd = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0"); //padStart lấy mặc định tháng and ngay 2 chu so
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  const navigate = useNavigate();
  const [Fullname, setFullname] = useState();
  const [Birthday, setBirthday] = useState();
  const [Address, setAddress] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Website, setWebsite] = useState();
  // const [Creat_at] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      Fullname: Fullname,
      Birthday: Birthday,
      Address: Address,
      Email: Email,
      Phone: Phone,
      Website: Website,
      Creat_at: today,
    };
    axios
      .post("https://62a43d5347e6e400638eaca6.mockapi.io/User", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    navigate("/", { replace: true })
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3 className="text-center py-2 text-danger">======ADD NEW USER======</h3>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-2">
                <label htmlFor="Fullname">Name</label>
                <input type="text" name="name" id="name"
                  onChange={(e) => setFullname(e.target.value)}
                  className="form-control" required placeholder="Nhập đầy đủ họ và tên" />
              </div>
              <div className="mb-2">
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="email "
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control" required placeholder="Vui lòng nhập Email" />
              </div>
              <div className="mb-2">
                <label htmlFor="Phome">Phone</label>
                <input type="text" name="phone" id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control" required placeholder="Nhập số điện thoại" />
              </div>
              <div className="mb-2">
                <label htmlFor="Website">Website</label>
                <input type="https://" name="website" id="website"
                  onChange={(e) => setWebsite(e.target.value)}
                  className="form-control" required placeholder="Nhập Website" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-2">
                <label htmlfor="Birthday">Birthday</label>
                <input
                  required type="Date"
                  value={Birthday}
                  name="Birthday"
                  id="Birthday"
                  onChange={(e) => setBirthday(e.target.value)}
                  className="form-control" />
              </div>
              <div className="mb-2">
                <label htmlfor="Address">Address</label>
                <input
                  required type="text"
                  value={Address}
                  name="Address"
                  id="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control" placeholder="Nhập tên địa chỉ" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-success" type="submit">
            Save[Add]
          </button>
          <Link to="/" class="btn btn-danger mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            Exit
          </Link>
        </div>
      </form>


    </div>
  )
}

export default UserAdd