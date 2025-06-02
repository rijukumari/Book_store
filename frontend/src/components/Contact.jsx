import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" flex mt-40 w-full items-center justify-center">
          <form  method="dialog">
            
            <h3 className="font-bold text-2xl text-center">Contact Us</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-96 border rounded-md outline-none p-2"
              />
              <br />
              
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-96 border rounded-md outline-none p-2"
              />
             
            </div>
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                placeholder="Type your message"
                className=" w-96 textarea textarea-bordered textarea-xs  max-w-lg"
              ></textarea>
              {/* sm */}
            
              
            </div>

            <div className="mt-4">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
