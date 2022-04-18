import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useContext(UserContext);
    return (
        <div>

            <div className="container m-auto my-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-start rounded">
                    Create
                </button>

                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Book Name</th>
                            <th className="px-4 py-2">Borrow Date</th>
                            <th className="px-4 py-2">Return Date</th>
                            <th className="px-4 py-2">Student Name</th>
                            <th className="px-4 py-2">Member Type</th>
                            <th className="px-4 py-2">Return Date</th>
                            <th className="px-4 py-2">Decscription</th>
                            <th className="px-4 py-2">Academic Class</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.book_name}</td>
                                <td className="border px-4 py-2">{user.borrow_date}</td>
                                <td className="border px-4 py-2">{user.return_date}</td>
                                <td className="border px-4 py-2">{user.student_name}</td>
                                <td className="border px-4 py-2">{user.member_type}</td>
                                <td className="border px-4 py-2">{user.description}</td>
                                <td className="border px-4 py-2">{user.academic_class}</td>
                                <td className="border px-6 py-3">

                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 flex justify-center rounded">
                                        Read
                                    </button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 flex justify-center rounded">
                                        Edit
                                    </button>
                                    <Link to={"/delete/" + user.id}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex justify-center rounded">
                                            Delete
                                        </button>
                                    </Link>
                                </td>


                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;