import React, { useState } from "react";

const UserSearchForm = () => {
  const [users, setUsers] = useState([
    { id: 105, username: "Acc0185", role: "A/C Mgr", EmpCode: "acc123" },
    { id: 106, username: "Acc0567", role: "Asst.", EmpCode: "acc456" },
    { id: 428, username: "Dev0476", role: "VP", EmpCode: "dev789" },
    { id: 529, username: "Adm0012", role: "Admin", EmpCode: "adm101" },
  ]);

  const [searchparams, setSearchparams] = useState({
    username: "",
    role: "",
    LastLogin: "",
    FName: "",
    LName: "",
    Department: "",
    DOJ: "",
    MgrId: "",
    Seniority: "",
    EmpCode: "",
  });

  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = () => {
    setFilteredUsers(
      users.filter((user) => {
        const matchesUsername =
        searchparams.username === "" ||
          user.username.toLowerCase()
            .includes(searchparams.username.toLowerCase());
        const matchesRole = searchparams.role === ""
            || user.role === searchparams.role;
        const matchesEmpCode =
          searchparams.EmpCode === "" ||
          (user.EmpCode &&
           user.EmpCode.toLowerCase()
           .includes(searchparams.EmpCode.toLowerCase()));

        let matchesDepartment = true;
        if (searchparams.Department === "Accounts") {
            if(searchparams.Department)
          matchesDepartment
              = user.username.toLowerCase().
              includes("Acc") &&
              user.EmpCode.toLowerCase().includes("acc");
        } else if (searchparams.Department === "Development") {
          matchesDepartment=
     user.username.toLowerCase().includes("Dev")
 && user.EmpCode.toLowerCase().includes("dev");
        } else if (setSearchparams.Department === "Admin") {
    matchesDepartment = user.username.toLowerCase()
     .includes("Adm") &&
    user.EmpCode.toLowerCase().includes("adm");
        }
 return matchesUsername
    && matchesRole
     && matchesEmpCode
     && matchesDepartment;
       
      })
    );
  };

  return (
    <div>
      <h1>User Search</h1>
         <div>
        <label>Username</label>
        <input
          type="text"
          value={searchparams.username}
          onChange={(e) =>
              setSearchparams({ ...searchparams, username: e.target.value })}
        />

        <label>Role</label>
        <input
          type="text"
          value={searchparams.role}
          onChange={(e) => setSearchparams({ ...searchparams, role: e.target.value })}
        />

        <label>Last Login</label>
        <input
          type="text"
          value={searchparams.LastLogin}
          onChange={(e) => setSearchparams({ ...searchparams, LastLogin: e.target.value })}
        />

        <label>First Name</label>
        <input
          type="text"
          value={searchparams.FName}
          onChange={(e) => setSearchparams({ ...searchparams, FName: e.target.value })}
        />

        <label>Last Name</label>
        <input
          type="text"
          value={searchparams.LName}
          onChange={(e) => setSearchparams({ ...searchparams, LName: e.target.value })}
        />

        <label>MgrID</label>
        <input
          type="text"
          value={searchparams.MgrId}
          onChange={(e) => setSearchparams({ ...searchparams, MgrId: e.target.value })}
        />

        <label>DOJ</label>
        <input
          type="text"
          value={searchparams.DOJ}
          onChange={(e) => setSearchparams({ ...searchparams, DOJ: e.target.value })}
        />
      </div>

      <div>
        <label>Department</label>
        <select
          value={searchparams.Department}
          onChange={(e) => setSearchparams({ ...searchparams, Department: e.target.value })}
        >
          <option value="">All</option>
          <option value="Accounts">Accounts</option>
          <option value="Development">Development</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      <button onClick={handleSearch}>Search</button>

      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Role</th>
            <th>EmpCode</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.EmpCode}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td >No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserSearchForm;