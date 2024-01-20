import React from "react";

const ListEmployeesPage = () => {
  return (
    <div className="bg-color_hover h-screen flex justify-center ">
      <div className="bg-white mt-20 w-full mb-0 md:w-3/4 ">
        <h1 className=" font-bold pl-5 mt-5">Employees</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
          <h3 className=" text-text_tertiary font-bold  text-sm  overflow-auto p-5">
            Name
          </h3>
          <h3 className="text-text_tertiary font-bold text-sm overflow-auto p-5">
            Email Address
          </h3>
          <h3 className=" text-text_tertiary font-bold text-sm overflow-auto p-5">
            Date Added
          </h3>

          <h3 className="text-text_tertiary font-bold text-sm overflow-auto p-5">
            Role
          </h3>
        </div>
        {/* GRID 1 */}
        <div className="grid grid-cols-4 gap-2 p-2">
          {}
          <p className="p-5">Bukola Dayo</p>
          <p className="p-5">ba@gmail.com</p>
          <p className="p-5">12/12/2021</p>
          <p className="p-5">Developer </p>

          {/*GRID 2*/}
          {/* <p className="p-5">John Doe</p>
          <p className="p-5">jd@gmail.com</p>
          <p className="p-5">12/12/2021</p>
          <p className="p-5">Developer</p> */}

          {/*GRID 3*/}
          {/* <p className="p-5">Emma Banjo</p>
          <p className="p-5">ea@gmail.com</p>
          <p className="p-5">12/12/2021</p>
          <p className="p-5">Developer</p> */}

          {/*GRID 4*/}
          {/* <p className="p-5">Mathilda Duku </p>
          <p className="p-5">md@gmail.com</p>
          <p className="p-5">12/12/2021</p>
          <p className="p-5">Developer</p> */}

          {/*GRID 5*/}
          {/* <p className="p-5">Simi Benjamin </p>
          <p className="p-5">sb@gmail.com</p>
          <p className="p-5">12/12/2021</p>
          <p className="p-5">Developer</p> */}

          {/*GRID 6*/}
          {/* <p className="p-5">Victor Akan</p>
          <p className="p-5">va@gmail.com</p>
          <p className="p-5">12/12/2021</p>
          <p className="p-5">Developer</p> */}
        </div>
      </div>
    </div>
  );
};

export default ListEmployeesPage;
