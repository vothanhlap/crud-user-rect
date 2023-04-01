/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://62a43d5347e6e400638eaca6.mockapi.io/User")
      .then((res) => {
        const listuser = res.data;
        setUser(listuser);
      });

  }, [user]);
  const UserDelete = (id) => {
    axios

      .delete(`https://62a43d5347e6e400638eaca6.mockapi.io/User/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  const [searchName, setSearchName] = useState("");
  return (
    <div>
      <div className="col-md-12 py-3">
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Bạn cần tìm gì?" aria-label="Recipient's username" aria-describedby="basic-addon2"
                onChange={(e) => {
                  setSearchName(e.target.value);
                }} />
            </div>
          </div>
          <div className="col-md-6">
            <Link class="mt-2 mb-2 float-end btn btn-sm btn-info" to="/useradd">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
              </svg>Add User</Link>
            <Link class=" me-2 mt-2 mb-2 float-end btn btn-sm btn-danger" to="/usertrash">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
              Trash User</Link>
          </div>
        </div>
      </div>
      <table className='table table-bordered table-striped my-2' id="myTable" >
        <thead>
          <tr>
            <td>#</td>
            <td className='text-center'>Hinh</td>
            <td className='text-center'>Fullname</td>
            <td className='text-center'>Birthday</td>
            <td className='text-center'>Address</td>
            <td className='text-center'>Email</td>
            <td className='text-center'>Phone</td>
            <td className='text-center'>Website</td>
            <td className='text-center'>Creat_at</td>
            <td className='text-center'>Function</td>
            <td className='text-center'>ID</td>
          </tr>
        </thead>
        <tbody>
          {user
            .filter((user) => {
              if (searchName === "") {
                return user;
              } else if (
                user.Fullname.toLowerCase().includes(searchName.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => (
              <tr key={user.id}>
                <td  >
                  <input classname="checkid" type="checkbox" />
                </td>
                <td>
                <img src="" class="img-fluid" alt=""/>
                </td>
                <td>{user.Fullname}</td>
                <td>{user.Birthday}</td>
                <td>{user.Address}</td>
                <td>{user.Email}</td>
                <td>{user.Phone}</td>
                <td>{user.Website}</td>
                <td className="text-center">{user.Creat_at}</td>
                <td className='text-center'>
                  <Link to={"/useredit/" + user.id} className="btn btn-sm btn-success m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                  </Link>
                  <button
                    onClick={(id) => UserDelete(user.id)}
                    className="btn btn-sm btn-danger m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </button>
                </td>
                <td className='text-center'>{user.id}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>)
};
export default UserList
