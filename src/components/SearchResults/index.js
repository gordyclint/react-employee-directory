import React from "react";
import { Media } from "reactstrap";
import employees from "../../db/employees.json";

function SearchResults({ image, name, description }) {
    return (
        <Media>
            <Media left href="#">
                <Media
                    object
                    src={image}
                    alt={name}
                    style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px"
                    }}
                />
            </Media>
            <Media body>
                <Media heading>{name}</Media>
                <p style={{ marginBottom: "50px" }}>{description}</p>
            </Media>
        </Media>
    );
} 

export default SearchResults;

// <ul className="list-group search-results">
//     {employees.map(employee => (
//         <li key={employee} className="list-group-item">
//             <img
//                 alt="employee"
//                 style={{
//                     width: "100px",
//                     height: "100px",
//                     margin: "10px"
//                 }}
//                 src={employee.image}
//                 className="img-fluid"
//             />

//         </li>
//     ))}
// </ul>
