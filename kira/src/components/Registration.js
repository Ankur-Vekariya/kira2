// import React, { useState } from 'react'
// import Login from './Login'


// function Registration() {

//     const [fullname, setFullName] = useState("");
//     const [username, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [password, setPassword] = useState("");
//     const [flag, setFlag] = useState(false);
//     const [login, setLogin] = useState(true)

// function handleSubmit(e) {
//     e.preventDefault();

//     if(!fullname || !email  || !password || !phone){
//         setFlag(true);
//     }else{
//         setFlag(false);
//         localStorage.setItem("Email", JSON.stringify(email));
//         localStorage.setItem("Password",JSON.stringify(password));
//         // localStorage.setItem("Password",JSON.stringify(password));
//         // localStorage.setItem("Password",JSON.stringify(password));
//         // localStorage.setItem("Password",JSON.stringify(password));

//         console.log("saved in local storage");
//         setLogin(!login);
//     }

// }

//   return (
//         <div>
//             <h1>Registartion</h1>
//             <form onSubmit={handleSubmit}>
//                 <div class="form-group">
//                     <label >Full Name</label>
//                     <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Full Name" onChange={(e) => setFullName(e.target.value)} />
//                 </div>
//                 <div class="form-group">
//                     <label >User Name</label>
//                     <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter User Name" onChange={(e) => setUserName(e.target.value)} />
//                 </div>
//                 <div class="form-group">
//                     <label >Email address</label>
//                     <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div class="form-group">
//                     <label >Mobile Number</label>
//                     <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Mobile Number" onChange={(e) => setPhone(e.target.value)} />
//                 </div>
//                 <div class="form-group">
//                     <label >Password</label>
//                     <input type="password" class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
//                 </div>
                
//                 <button type="submit" class="btn btn-primary">Submit</button>
//                 <p onC>already register(" ") login?</p>
//                 {flag && (
//                     <alert>
//                         please fill every field
//                     </alert>
//                 )
//                 }
//             </form>
//         <div/>
//     )
// }

// export default Registration;