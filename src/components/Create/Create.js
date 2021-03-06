import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link } from "react-router-dom";

const Create = () => {
    const [id, setId] = useState("");
    const [book_name, setBook_name] = useState("");
    const [borrow_date, setBorrow_date] = useState("");
    const [return_date, setReturn_date] = useState("");
    const [student_name, setStudent_name] = useState("");
    const [member_type, setMember_type] = useState();
    const [description, setDescription] = useState("");
    const [academic_class, setAcademic_class] = useState("");

    const [users, setUsers] = useContext(UserContext);

    useEffect(() => {
        console.log('show user data', users);
    }, [users])
    const update_id = (e) => {
        setId(e.target.value);
        console.log(id);

    };
    const update_book_name = (e) => {
        setBook_name(e.target.value);
        console.log(book_name);
    };
    const update_borrow_date = (e) => {
        setBorrow_date(e.target.value);
        console.log(borrow_date);
    };
    const update_return_date = (e) => {
        setReturn_date(e.target.value);
        console.log(return_date);

    };
    const update_student_name = (e) => {
        setStudent_name(e.target.value);
        console.log(student_name);

    };
    const update_member_type = (e) => {
        setMember_type(e.target.value);



    };
    const update_description = (e) => {
        setDescription(e.target.value);
        console.log(description);

    };
    const update_academic_class = (e) => {
        setAcademic_class(e.target.value);
        console.log(academic_class);

    };
    const addUser = (e) => {
        e.preventDefault();
        setUsers([...users, { id: id, book_name: book_name, borrow_date: borrow_date, return_date: return_date, student_name: student_name, member_type: member_type, description: description, academic_class: academic_class }])

    }
    console.log(member_type);
    return (
        <div>
            <h1>I am created</h1>
            <div className=" container w-full max-w-xs flex justify-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={addUser}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="id">
                            Book Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="book_name" type="text" name="id" value={id} onChange={update_id} placeholder="id" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="book_name">
                            Book Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="book_name" type="text" name="book_name" value={book_name} onChange={update_book_name} placeholder="book_name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Borrow Date
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" type="date" name="borrow_date" value={borrow_date} onChange={update_borrow_date} />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Return Date
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" type="date" name="return_date" value={return_date} onChange={update_return_date} />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Student Name
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" name="student_name" type="text" value={student_name} onChange={update_student_name} />

                    </div>
                    {/* <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="member_type">
                            Member Type
                        </label>
                        <div className="form-check">
                            <input type="radio" id="member_type" name="member_type" value="Monthly" onChange={update_member_type} />
                            <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                                Monthly
                            </label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="member_type" name="member_type" value="Yearly" onChange={update_member_type} checked />
                            <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
                                Yearly
                            </label>
                        </div>

                    </div> */}
                    <div class="form-group">
                        <label for="student_name">Member Type</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="member_type" id="member_type" value="Monthly" onChange={update_member_type}
                                checked={member_type === "Monthly"} required />
                            <label class="form-check-label" for="member_type">
                                Monthly
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="member_type" id="member_type" value="Yearly" onChange={update_member_type}
                                checked={member_type === "Yearly"} required />
                            <label class="form-check-label" for="member_type">
                                Yearly
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
                            Description
                        </label>
                        <textarea
                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                            id="description" name="description" value={description} onChange={update_description}
                            rows="3"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="academic_class">
                            Academic Class
                        </label>
                        <div class="mb-3 xl:w-96">
                            <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" value={academic_class} name="academic_class" onChange={update_academic_class}>
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add Book
                        </button>
                        <Link to="/">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Back Home
                            </button>
                        </Link>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Create;