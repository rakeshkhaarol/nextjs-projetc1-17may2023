import React from 'react'

export default function Leftaside() {
  return (
        <div className="col-3 r_tbdr">
        <aside>
              <ul className="nav flex-column ">
                <li className="nav-item r_a_desion mb-2 ">
                  <a className="nav-link text-white active" aria-current="page" href="#">The Flight</a>
                </li>
                <li className="nav-item r_a_desion mb-2 ">
                  <a className="nav-link text-white" href="#">The City</a>
                </li>
                <li className="nav-item r_a_desion mb-2 ">
                  <a className="nav-link text-white" href="#">The Island</a>
                </li>
                <li className="nav-item r_a_desion mb-2 ">
                  <a className="nav-link text-white" href='#'>The Food</a>
                </li>
              </ul>
        </aside>
    </div>
  )
}
