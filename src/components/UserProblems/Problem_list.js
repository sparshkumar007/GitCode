import React,{ useContext } from 'react'
import PropTypes from 'prop-types'
import { Link,useNavigate } from 'react-router-dom';
import MyContext from '../../context/Mycontext';


function Problem_list(props) {
    const navigate=useNavigate();
    const sharedData=useContext(MyContext);
    const title=props.title;
    const total=props.total_submissions;
    const correct=props.correct_submissions;
    const tag=props.tag;
    const statement=props.problem_statement;
    const cases=props.test_cases;
    const code=props.code;
    const hiddencases=props.hiddencases;
    const verified=props.verified;
    const id=props.id;
    const func1=() => {
        sharedData.set_statement(statement);
        sharedData.set_cases(cases);
        sharedData.set_hiddencases(hiddencases);
        sharedData.set_verified(verified);
    }
    const delete_it=async () => {
        try {
            const response=await fetch("http://localhost:5000/api/userproblems/deleteproblem",{
                method: "POST",
                mode: "cors",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Auth-Token': localStorage.getItem('authToken'),
                    'prob-id': id
                }
            });
            if (response.ok) {
                console.log("Deletion is Successful!!");
                window.location.reload(false);
            }
        } catch (error) {
            console.log("failed in delete_It");
            console.log(error);
        }
    }
    const update_it=async () => {
        try {
            sharedData.set_statement(statement);
            sharedData.set_cases(cases);
            sharedData.set_hiddencases(hiddencases);
            sharedData.set_verified(verified);
            sharedData.setTag(tag);
            sharedData.setTitle(title);
            sharedData.setCode(code);
            sharedData.setId(id);
            navigate("/updateproblem");
        } catch (error) {
            console.log("Error in updating!!");
            console.log(error);
        }
    }
    return (
        <>
            <div>
                <li className="list-group-item d-flex justify-content-between align-items-start mx-3 my-2 ">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">
                            <Link onClick={func1()} to="/problem_statement">
                                {title}
                            </Link>
                        </div>
                        {tag}
                        <br />
                        {verified? "verified":"Not verified"}
                        <button type="button" className="btn btn-danger" onClick={delete_it}>Delete</button>
                        <button type="button" class="btn btn-primary" onClick={update_it}>Update</button>
                    </div>
                    <span className="badge bg-primary rounded-pill">{correct}</span>
                </li>
            </div>
        </>
    )
}

Problem_list.propTypes={

}

export default Problem_list