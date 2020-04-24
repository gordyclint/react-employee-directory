import React from "react";
import { Label, FormGroup, Input, Button } from "reactstrap";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm({ name, gender, role, handleFormSubmit }) {
    return (
        <FormGroup>
            <div className="row justify-content-center">
                <Label for="space-cowboys">Filter by Space Cowboys</Label>
            </div>
            <div className="row justify-content-center">
                <Input
                    className="col-sm-8"
                    style={{ marginRight: "10px" }}
                    type="select"
                    name="select"
                    id="employees"
                >
                    <option value={name}>Sort by Name</option>
                    <option value={gender}>Males</option>
                    <option value={gender}>Females</option>
                    <option value={role}>Protagonists</option>
                    <option value={role}>Antagonists</option>
                </Input>
                <Button
                    className="col-sm-2"
                    type="submit"
                    style={{ marginLeft: "10px" }}
                    onClick={handleFormSubmit}
                >
                    Search
                </Button>
            </div>
        </FormGroup>
        // <Form>
        //     <FormGroup row>
        //         <Label for="exampleEmail" sm={2} size="lg">
        //             Search Employees
        //         </Label>
        //         <Col sm={10}>
        //             <Input
        //                 value={search}
        //                 onChange={handleInputChange}
        //                 type="text"
        //                 name="employee"
        //                 list="employees"
        //                 id="employee"
        //                 placeholder="Enter name here"
        //                 bsSize="lg"
        //             />
        //         </Col>
        //     </FormGroup>
        // </Form>
    );
}

export default SearchForm;
