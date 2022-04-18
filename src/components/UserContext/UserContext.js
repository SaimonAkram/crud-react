import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        { id: 1, book_name: "Mojar Boi", borrow_date: "10-01-22", return_date: "10-01-22", student_name: "Saimon Akram", member_type: "Yearly", description: "this is a funny book", academic_class: 5 },
        { id: 2, book_name: "bhooter Boi", borrow_date: "10-01-22", return_date: "10-01-22", student_name: "Saimon Akram", member_type: "Yearly", description: "this is a funny book", academic_class: 5 },
        { id: 3, book_name: "Golper Boi", borrow_date: "10-01-22", return_date: "10-01-22", student_name: "Saimon Akram", member_type: "Yearly", description: "this is a funny book", academic_class: 5 },

    ]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );

};