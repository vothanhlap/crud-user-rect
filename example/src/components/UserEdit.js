import React, { useEffect, useState } from "react";
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom"


const UserEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  let id = params.id;
  const [User, setUser] = useState();
  const [Fullname, setFullname] = useState();
  const [Birthday, setBirthday] = useState();
  const [Address, setAddress] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Website, setWebsite] = useState();
  const [Creat_at, setCreat_at] = useState();
  useEffect(() => {
    axios
      .get(`https://62a43d5347e6e400638eaca6.mockapi.io/User/${id}`)
      .then((res) => {
        const user = res.data;
        setUser(user);
        setFullname(user.Fullname);
        setBirthday(user.Birthday);
        setAddress(user.Address);
        setEmail(user.Email);
        setPhone(user.Phone);
        setWebsite(user.Website);
        setCreat_at(user.Creat_at);
      });

  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      Fullname: Fullname,
      Birthday: Birthday,
      Address: Address,
      Email: Email,
      Phone: Phone,
      Website: Website,
      // Creat_at: Creat_at,
    };
    axios
      .put(`https://62a43d5347e6e400638eaca6.mockapi.io/User/${id}`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    navigate("/", { replace: true })
  };
  console.log(User);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 className="text-center py-2 text-danger">=====EDIT USER=====</h3>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-9">
            <div className="mb-2">
              <label htmlFor="Fullname">Name</label>
              <input
                required type="text"
                value={Fullname}
                name="name"
                id="name"
                onChange={(e) => setFullname(e.target.value)}
                className="form-control" />
            </div>

            <div className="mb-2">
              <label htmlFor="Email">Email</label>
              <input
                required type="text"
                value={Email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="Phome">Phone</label>
              <input
                required type="text"
                value={Phone}
                name="phone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                className="form-control" />
            </div>
            <div className="mb-2">
              <label htmlFor="Website">Website</label>
              <input
                required type="text"
                value={Website}
                name="website"
                id="website"
                onChange={(e) => setWebsite(e.target.value)}
                className="form-control" />
            </div>
          </div>
          <div className="col-md-3">
            <div class="mb-3">
              <label htmlfor="Birthday">Birthday</label>
              <input
                required type="date"
                value={Birthday}
                name="Birthday"
                id="Birthday"
                onChange={(e) => setBirthday(e.target.value)}
                className="form-control" />
            </div>
            <div class="mb-3">
              <label htmlfor="Address">Address</label>
              <input
                required type="text"
                value={Address}
                name="Address"
                id="Address"
                onChange={(e) => setAddress(e.target.value)}
                className="form-control" />
            </div>
            <div class="mb-3">
              <label htmlfor="Creat_at">Creat_at</label>
              <input
                type="date"
                value={Creat_at}
                name="Creat_at"
                id="Creat_at"
                onChange={(e) => setCreat_at(e.target.value)}
                className="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-success" type="submit">
          Save[Update]
        </button>
        <Link to="/" class="btn btn-danger mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
          Exit
        </Link>
      </div>
    </form>



  )
}

export default UserEdit