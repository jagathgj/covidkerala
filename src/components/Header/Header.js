import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container-fluid d-flex justify-content-between">
            <NavLink
              href="javascript:void(0);"
              className="navbar-brand d-flex align-items-center"
              title="CovidKerala"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 754.132 753.424"
              >
                <g transform="translate(-593.683 -174.789)">
                  <path
                    d="M148.244,255.5h-30a195.818,195.818,0,0,1,3.3-35.271l-34.708-9.3-.347,1.3a14.789,14.789,0,0,1-5.519,8.148,15.211,15.211,0,0,1-8.991,2.966A15,15,0,0,1,57.515,204.46l8.461-31.572a15,15,0,1,1,28.977,7.765l-.347,1.3,34.718,9.3a194.879,194.879,0,0,1,35.834-61.884l-25.482-25.481-.949.949a15,15,0,0,1-21.213-21.213l23.11-23.109a15,15,0,1,1,21.213,21.213l-.949.949,25.481,25.48A194.84,194.84,0,0,1,248.259,72.32l-9.3-34.717-1.3.347a15.177,15.177,0,0,1-3.925.523,14.691,14.691,0,0,1-4.876-.832A15.005,15.005,0,0,1,229.9,8.974L261.464.515a14.982,14.982,0,0,1,18.37,10.608,15,15,0,0,1-10.606,18.371l-1.3.347,9.3,34.708A195.74,195.74,0,0,1,313,61.245h.5v30H313c-90.577,0-164.486,73.685-164.756,164.257Zm67.281,0H185.541a15,15,0,0,1,29.984,0Zm65.342-16.633a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,280.868,238.867Zm-47.393-47.39a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,233.474,191.478ZM313,158.533a15,15,0,0,1,0-30c.168,0,.336,0,.5.008v29.984C313.308,158.531,313.145,158.533,313,158.533Z"
                    transform="translate(553.379 591.981) rotate(-45)"
                    fill="#727cf5"
                  />
                  <path
                    d="M148.244,255.5h-30a195.818,195.818,0,0,1,3.3-35.271l-34.708-9.3-.347,1.3a14.789,14.789,0,0,1-5.519,8.148,15.211,15.211,0,0,1-8.991,2.966A15,15,0,0,1,57.515,204.46l8.461-31.572a15,15,0,1,1,28.977,7.765l-.347,1.3,34.718,9.3a194.879,194.879,0,0,1,35.834-61.884l-25.482-25.481-.949.949a15,15,0,0,1-21.213-21.213l23.11-23.109a15,15,0,1,1,21.213,21.213l-.949.949,25.481,25.48A194.84,194.84,0,0,1,248.259,72.32l-9.3-34.717-1.3.347a15.177,15.177,0,0,1-3.925.523,14.691,14.691,0,0,1-4.876-.832A15.005,15.005,0,0,1,229.9,8.974L261.464.515a14.982,14.982,0,0,1,18.37,10.608,15,15,0,0,1-10.606,18.371l-1.3.347,9.3,34.708A195.74,195.74,0,0,1,313,61.245h.5v30H313c-90.577,0-164.486,73.685-164.756,164.257Zm67.281,0H185.541a15,15,0,0,1,29.984,0Zm65.342-16.633a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,280.868,238.867Zm-47.393-47.39a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,233.474,191.478ZM313,158.533a15,15,0,0,1,0-30c.168,0,.336,0,.5.008v29.984C313.308,158.531,313.145,158.533,313,158.533Z"
                    transform="translate(1388.118 511.02) rotate(135)"
                    fill="#727cf5"
                  />
                  <path
                    d="M148.244,255.5h-30a195.818,195.818,0,0,1,3.3-35.271l-34.708-9.3-.347,1.3a14.789,14.789,0,0,1-5.519,8.148,15.211,15.211,0,0,1-8.991,2.966A15,15,0,0,1,57.515,204.46l8.461-31.572a15,15,0,1,1,28.977,7.765l-.347,1.3,34.718,9.3a194.879,194.879,0,0,1,35.834-61.884l-25.482-25.481-.949.949a15,15,0,0,1-21.213-21.213l23.11-23.109a15,15,0,1,1,21.213,21.213l-.949.949,25.481,25.48A194.84,194.84,0,0,1,248.259,72.32l-9.3-34.717-1.3.347a15.177,15.177,0,0,1-3.925.523,14.691,14.691,0,0,1-4.876-.832A15.005,15.005,0,0,1,229.9,8.974L261.464.515a14.982,14.982,0,0,1,18.37,10.608,15,15,0,0,1-10.606,18.371l-1.3.347,9.3,34.708A195.74,195.74,0,0,1,313,61.245h.5v30H313c-90.577,0-164.486,73.685-164.756,164.257Zm67.281,0H185.541a15,15,0,0,1,29.984,0Zm65.342-16.633a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,280.868,238.867Zm-47.393-47.39a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,233.474,191.478ZM313,158.533a15,15,0,0,1,0-30c.168,0,.336,0,.5.008v29.984C313.308,158.531,313.145,158.533,313,158.533Z"
                    transform="translate(553.379 591.981) rotate(-45)"
                    fill="#727cf5"
                  />
                  <path
                    d="M148.244,255.5h-30a195.818,195.818,0,0,1,3.3-35.271l-34.708-9.3-.347,1.3a14.789,14.789,0,0,1-5.519,8.148,15.211,15.211,0,0,1-8.991,2.966A15,15,0,0,1,57.515,204.46l8.461-31.572a15,15,0,1,1,28.977,7.765l-.347,1.3,34.718,9.3a194.879,194.879,0,0,1,35.834-61.884l-25.482-25.481-.949.949a15,15,0,0,1-21.213-21.213l23.11-23.109a15,15,0,1,1,21.213,21.213l-.949.949,25.481,25.48A194.84,194.84,0,0,1,248.259,72.32l-9.3-34.717-1.3.347a15.177,15.177,0,0,1-3.925.523,14.691,14.691,0,0,1-4.876-.832A15.005,15.005,0,0,1,229.9,8.974L261.464.515a14.982,14.982,0,0,1,18.37,10.608,15,15,0,0,1-10.606,18.371l-1.3.347,9.3,34.708A195.74,195.74,0,0,1,313,61.245h.5v30H313c-90.577,0-164.486,73.685-164.756,164.257Zm67.281,0H185.541a15,15,0,0,1,29.984,0Zm65.342-16.633a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,280.868,238.867Zm-47.393-47.39a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,233.474,191.478ZM313,158.533a15,15,0,0,1,0-30c.168,0,.336,0,.5.008v29.984C313.308,158.531,313.145,158.533,313,158.533Z"
                    transform="translate(1388.118 511.02) rotate(135)"
                    fill="#727cf5"
                  />
                  <path
                    d="M148.244,255.5h-30a195.818,195.818,0,0,1,3.3-35.271l-34.708-9.3-.347,1.3a14.789,14.789,0,0,1-5.519,8.148,15.211,15.211,0,0,1-8.991,2.966A15,15,0,0,1,57.515,204.46l8.461-31.572a15,15,0,1,1,28.977,7.765l-.347,1.3,34.718,9.3a194.879,194.879,0,0,1,35.834-61.884l-25.482-25.481-.949.949a15,15,0,0,1-21.213-21.213l23.11-23.109a15,15,0,1,1,21.213,21.213l-.949.949,25.481,25.48A194.84,194.84,0,0,1,248.259,72.32l-9.3-34.717-1.3.347a15.177,15.177,0,0,1-3.925.523,14.691,14.691,0,0,1-4.876-.832A15.005,15.005,0,0,1,229.9,8.974L261.464.515a14.982,14.982,0,0,1,18.37,10.608,15,15,0,0,1-10.606,18.371l-1.3.347,9.3,34.708A195.74,195.74,0,0,1,313,61.245h.5v30H313c-90.577,0-164.486,73.685-164.756,164.257Zm67.281,0H185.541a15,15,0,0,1,29.984,0Zm65.342-16.633a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,280.868,238.867Zm-47.393-47.39a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,233.474,191.478ZM313,158.533a15,15,0,0,1,0-30c.168,0,.336,0,.5.008v29.984C313.308,158.531,313.145,158.533,313,158.533Z"
                    transform="translate(1011.229 968.516) rotate(-135)"
                    fill="#727cf5"
                  />
                  <path
                    d="M148.244,255.5h-30a195.818,195.818,0,0,1,3.3-35.271l-34.708-9.3-.347,1.3a14.789,14.789,0,0,1-5.519,8.148,15.211,15.211,0,0,1-8.991,2.966A15,15,0,0,1,57.515,204.46l8.461-31.572a15,15,0,1,1,28.977,7.765l-.347,1.3,34.718,9.3a194.879,194.879,0,0,1,35.834-61.884l-25.482-25.481-.949.949a15,15,0,0,1-21.213-21.213l23.11-23.109a15,15,0,1,1,21.213,21.213l-.949.949,25.481,25.48A194.84,194.84,0,0,1,248.259,72.32l-9.3-34.717-1.3.347a15.177,15.177,0,0,1-3.925.523,14.691,14.691,0,0,1-4.876-.832A15.005,15.005,0,0,1,229.9,8.974L261.464.515a14.982,14.982,0,0,1,18.37,10.608,15,15,0,0,1-10.606,18.371l-1.3.347,9.3,34.708A195.74,195.74,0,0,1,313,61.245h.5v30H313c-90.577,0-164.486,73.685-164.756,164.257Zm67.281,0H185.541a15,15,0,0,1,29.984,0Zm65.342-16.633a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,280.868,238.867Zm-47.393-47.39a15,15,0,1,1,10.607-4.393A14.9,14.9,0,0,1,233.474,191.478ZM313,158.533a15,15,0,0,1,0-30c.168,0,.336,0,.5.008v29.984C313.308,158.531,313.145,158.533,313,158.533Z"
                    transform="translate(930.268 134.485) rotate(45)"
                    fill="#727cf5"
                  />
                </g>
              </svg>

              <span className="font-weight-normal">
                Covid<span className="font-weight-normal">Kerala</span>
              </span>
            </NavLink>
            <span className="last-update-status ml-auto d-flex text-light flex-column"> <span className="last-update-label d-block">Last Updated on <br /></span><span className="d-block">22 Aug, 11:57 PM IST</span></span>
            <div className="admin-links d-flex align-items-center ml-auto">
              <NavLink
              exact
                href="javascript:void(0);"
                className=" btn btn-warning"
                title="Upload"
                to="/adashboard"
              >
                Upload
              </NavLink>
              <NavLink
                href="javascript:void(0);"
                className=" btn btn-warning ml-2"
                title="View List"
                to="/adashboard/list"
              >
                View List
              </NavLink>
              <NavLink
                href="javascript:void(0);"
                className="btn btn-warning ml-2"
                title="Edit Places"
                to="/adashboard/places"
              >
                Edit Places
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
