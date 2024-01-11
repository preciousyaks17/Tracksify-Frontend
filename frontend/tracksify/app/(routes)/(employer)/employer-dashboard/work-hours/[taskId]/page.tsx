import React from "react";

const WorkHours = () => {
  return (
    <div className="pl-48 flex flex-col  w-1/2  p-2">
      <h1 className="font-bold pr-48 pb-2">Project 1</h1>
      <div>
        <form className="flex flex-col  ">
          <div className="border rounded-xl mb-6 border-gray-200  ">
            <label></label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="p-4 m-2   outline-none "
            />
          </div>
          <div className="border mb-6 rounded-xl border-gray-200 ">
            <label className="pl-2">Start Time</label>
            <input type="time" name="start-time " className="p-4 m-2  " />
          </div>
          <div className="border mb-6 rounded-xl border-gray-200">
            <label className="pl-2">End Time</label>
            <input type="time" name="end-time" className="p-4 m-2" />
          </div>
          <div>
            <h1 className="font-bold pt-5 pb-5">Work Done</h1>
            <div className="border mb-6 rounded-xl border-gray-200">
              <label></label>
              <input
                type="text"
                name="summary"
                className="p-6 m-4 w-full outline-none"
              />
            </div>
          </div>

          <button className="bg-text_secondary p-4 m-2 rounded-xl text-white hover:text_tertiary hover:bg-text_primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkHours;
