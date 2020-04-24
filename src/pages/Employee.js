import React, { Component } from "react";
import employees from "../db/employees.json";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import CowboyJumbo from "../components/Jumbotron";

class Employee extends Component {
    state = {
        name: [employees],
        gender: ["Male", "Female"],
        filter: "",
        role: ["Protagonist", "Antagonist"],
        results: []
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name) {
            this.setState({ results: employees })
        } else if (this.state.gender === "Male") {

        }
  
    }
    render() {

        return (
            <div className="container">
                <CowboyJumbo />
                <Container style={{ minHeight: "80%" }}>
                    <SearchForm handleFormSubmit={this.handleFormSubmit} />
                    <div className="row centered">
                        {/* <SearchResults results={this.state.results} /> */}
                        {employees.map(employee => {
                            return (
                                <div className="col-sm-12">
                                    <SearchResults {...employee} />
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        );
                    
    }
}

// class Employee extends Component {
//     state = {
//         search: "",
//         breeds: [],
//         results: [],
//         error: ""
//     };

//     handleInputChange = event => {
//         this.setState({ search: event.target.value });
//     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         API.getDogsOfBreed(this.state.search)
//             .then(res => {
//                 if (res.data.status === "error") {
//                     throw new Error(res.data.message);
//                 }
//                 this.setState({ results: res.data.message, error: "" });
//             })
//             .catch(err => this.setState({ error: err.message }));
//     };
//     render() {
//         return (
//             <div>
//                 <Container style={{ minHeight: "80%" }}>
//                     <h1 className="text-center">Search By Breed!</h1>
//                     <Alert
//                         type="danger"
//                         style={{
//                             opacity: this.state.error ? 1 : 0,
//                             marginBottom: 10
//                         }}
//                     >
//                         {this.state.error}
//                     </Alert>
//                     <SearchForm
//                         handleFormSubmit={this.handleFormSubmit}
//                         handleInputChange={this.handleInputChange}
//                         breeds={this.state.breeds}
//                     />
//                     <SearchResults results={this.state.results} />
//                 </Container>
//             </div>
//         );
//     }
// }

export default Employee;
