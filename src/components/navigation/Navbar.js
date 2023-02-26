import { connect } from "react-redux";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from 'assets/img/logo_personal.png'
import { DotLoader } from "react-spinners";

export const Navbar = () => {
  const [loading, setLoading] = useState(true)

  window.onScroll = function() {scrollFunction()}

  function scrollFunction() {
    if(document.getElementById('navbar')) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        document.getElementById('navbar').classList.add('shadow-navbar')
        document.getElementById('navbar').classList.add('bg-white')

      }else {
        document.getElementById('navbar').classList.remove('shadow-navbar')
        document.getElementById('navbar').classList.remove('bg-white')
      }
    }
  }

  return (
    <nav id='navbar' className="w-full py-4 bg-white z-40 transition duration-300 ease-in-out fixed">
      <div className="px-4  sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <Link to="/" className="ml-4 mt-2">
            <img 
            src={logo}
            width={140}
            height={120}
            alt="logo"
            className=""/>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-900 transition duration-300 ease-in-out mx-4">
              Casos
            </NavLink>
            <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 border-b-2 border-white hover:border-blue-900 text-gray-900 transition duration-300 ease-in-out mx-4">
              Servicios
            </NavLink>
            <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 border-b-2 border-white hover:border-blue-900 text-gray-900 transition duration-300 ease-in-out mx-4">
            Nosotros
            </NavLink>
            <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-white hover:border-blue-900 transition duration-300 ease-in-out">
              Blog
            </NavLink>
            <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-white hover:border-blue-900 transition duration-300 ease-in-out">
              Contacto
            </NavLink>
           
            <Link to="/contacto" className="inline-flex ml-12 items-center rounded-md border border-transparent bg-blue-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-off-3">
              Hire Us
              <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color={"#f2f2f2"} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProp = (state) => {};

export default connect(mapStateToProp, {})(Navbar);
