import React, { useState } from 'react';

const RegistrationU = () => {

    const [fullname, setFullName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pwd, setPwd] = useState('');

    const handle = () => {
        localStorage.setItem('FullName', fullname);
        localStorage.setItem('userName', userName);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('Password', pwd);
    };
    // const remove = () => {
    //     localStorage.removeItem('FullName');
    //     localStorage.removeItem('userName');
    //     localStorage.removeItem('email');
    //     localStorage.removeItem('phone')
    //     localStorage.removeItem('Password');
    // };
    return (
        <div className="App">
            {/* <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label >Full Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Full Name" onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label >User Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter User Name" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label >Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                    <label >Mobile Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"  placeholder="Enter Mobile Number" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input type="password" class="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                </form> */}
                <form>
            <h1>Name of the user:</h1>
            <input
                placeholder="fullName"
                value={fullname}
                required
                onChange={(e) => setFullName(e.target.value)}
            />
            <h1>User Name</h1>
            <input
                placeholder="UserName"
                value={userName}
                required
                onChange={(e) => setuserName(e.target.value)}
            />
            <h1>Email of user</h1>
            <input
                type="email"
                placeholder="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <h1>Phone</h1>
            <input
                type="text"
                placeholder="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
            />
            <h1>Password of the user:</h1>
            <input
                type="password"
                placeholder="Password"
                value={pwd}
                required
                onChange={(e) => setPwd(e.target.value)}
            />
            <div>
                <button onClick={handle}>Done</button>
            </div>
            </form>
            
            {/* {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )} */}
            {/* {localStorage.getItem('userName') && (
            <div>
               userName: <p>{localStorage.getItem('userName')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )} */}
            {/* <div>
            <button onClick={remove}>Remove</button>
         </div> */}
        </div>
    );
};
export default RegistrationU;