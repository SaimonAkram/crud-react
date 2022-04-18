import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext/UserContext';

const Create = () => {
    const [id, setId] = useState("");
    const [book_name, setBook_name] = useState("");
    const [borrow_date, setBorrow_date] = useState("");
    const [return_date, setReturn_date] = useState("");
    const [student_name, setStudent_name] = useState("");
    const [member_name, setMember_name] = useState("");
    const [description, setDescription] = useState("");
    const [academic_name, setAcademic_name] = useState("");

    const update_book_name = (e) => {
        setBook_name(e.target.value);

    };

    const [users, setUser] = useContext(UserContext);
    return (
        <div>
            <h1>I am created</h1>
            <div className=" container w-full max-w-xs flex justify-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="book_name">
                            Book Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="book_name" type="text" value={book_name} onChange={update_book_name} placeholder="book_name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Borrow Date
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" type="date" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Return Date
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" type="date" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Student Name
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="borrow_date" type="text" />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
                            Member Type
                        </label>
                        <div className="form-check">
                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
                                Default checked radio
                            </label>
                        </div>

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
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
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="borrow_date">
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Add Book
                        </button>

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Create;