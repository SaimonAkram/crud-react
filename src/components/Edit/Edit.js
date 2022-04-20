import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Edit = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();
    const user = users.find((user) => user.id == id);

    const [book_name, setBook_name] = useState(user.book_name);
    const [borrow_date, setBorrow_date] = useState(user.borrow_date);
    const [return_date, setReturn_date] = useState(user.return_date);
    const [student_name, setStudent_name] = useState(user.student_name);
    const [member_type, setMember_type] = useState(user.member_type);
    const [description, setDescription] = useState(user.description);
    const [academic_class, setAcademic_class] = useState(user.academic_class);





    const editbook = (e) => {
        e.preventDefault();
        user.book_name = book_name;
        user.borrow_date = borrow_date;
        user.return_date = return_date;
        user.student_name = student_name;
        user.member_type = member_type;
        user.description = description;
        user.academic_class = academic_class;
        const restUsers = users.filter(user => user.id != id)
        restUsers.push(user)
        setUsers([...restUsers])
    };
    console.log('show me', users);
    return (

        <div>
            <h1>I am Edit</h1>
            <div className=" container w-full max-w-xs flex justify-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={editbook} >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="id">
                            ID NO:  {user.id}
                        </label>

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="book_name">
                            Book Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="book_name" type="text" name="book_name" value={book_name} onChange={(e) => setBook_name(e.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Borrow Date
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" type="date" name="borrow_date" value={borrow_date} onChange={(e) => setBorrow_date(e.target.value)} />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Return Date
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" type="date" name="return_date" value={return_date} onChange={(e) => setReturn_date(e.target.value)} />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Student Name
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" name="student_name" type="text" value={student_name} onChange={(e) => setStudent_name(e.target.value)} />

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
                            <input class="form-check-input" type="radio" name="member_type" id="member_type" value="Monthly" onChange={(e) => setMember_type(e.target.value)} checked={member_type === "Monthly"} required />
                            <label class="form-check-label" for="member_type">
                                Monthly
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="member_type" id="member_type" value="Yearly" onChange={(e) => setMember_type(e.target.value)} checked={member_type === "Yearly"} required />
                            <label class="form-check-label" for="member_type">
                                Yearly
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="description" >
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
                            id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}
                            rows="3"

                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="academic_class">
                            Academic Class
                        </label>
                        <div class="mb-3 xl:w-96">
                            <select name="academic_class" value={academic_class} onChange={(e) => setAcademic_class(e.target.value)}>
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Edit Book
                        </button>
                        <Link to="/">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Back Home
                            </button>
                        </Link>

                    </div>
                </form>

            </div >


        </div >
    );
};

export default Edit;