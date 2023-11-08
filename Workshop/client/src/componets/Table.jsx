import TableItem from "./TableItem";
import { useEffect, useState } from "react";
import { getAll, create, deleteUser, getUserInfo } from "../api/userAPI";
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";
import DeleteModal from "./DeleteModal";
import Spinner from "./Spinner";
import EditModal from "./EditModal";
// OR
//import * as userAPI from '../api/userAPI'

const Table = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreate, setShowCreate] = useState(false); // false за да не се показва
  const [edit, setEdit] = useState(false);
  const [showDetails, setShowDetails] = useState();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAll()
      .then((result) => setUsers(result))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const createUserClickHandler = () => {
    setShowCreate(true);
  };

  const hideModal = () => {
    setShowCreate(false);
  };
  const userCreateHandler = async (e) => {
    e.preventDefault();
    //Get data from form
    const formData = new FormData(e.currentTarget);
    // i destructorirame
    const data = Object.fromEntries(formData);
    // create new user at server
    const newUser = await create(data);
    //add newly created user to the state
    setUsers((state) => [...state, newUser]);
    //close MOdal
    setShowCreate(false);
  };
  const editHandler = async (userId) => {
    setSelectedUser(userId);
    setEdit(true);
  };
  // TODO
  const updeteHandler = (e, userId) => {
    e.preventDefault();
    console.log(userId);
  };

  const userDetailHandler = async (userId) => {
    setSelectedUser(userId);
    setShowDetails(true);
  };
  const deleteClick = async (userId) => {
    setShowDelete(true);
    setSelectedUser(userId);
  };

  const deleteHandler = async () => {
    //Remove user from server
    await deleteUser(selectedUser);
    //remove user from state  -------- GOOD way to remove USER from state
    setUsers((state) => state.filter((user) => user._id !== selectedUser));
    //Close the delete modal
    setShowDelete(false);
  };

  return (
    <div className="table-wrapper">
      {/* ако showCreate=true покажи Modala */}
      {showCreate && (
        <CreateUserModal onClose={hideModal} onUserCreate={userCreateHandler} />
      )}
      {edit && (
        <EditModal
          onClose={() => setEdit(false)}
          userId={selectedUser}
          onEdit={updeteHandler}
        />
      )}
      {showDetails && (
        <UserInfoModal
          onClose={() => setShowDetails(false)}
          userId={selectedUser}
        />
      )}
      {showDelete && (
        <DeleteModal
          onClose={() => setShowDelete(false)}
          onDelete={deleteHandler}
        />
      )}
      {isLoading && <Spinner />}
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              First name
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Last name
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Email
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Phone
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Created
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            //подаваме данни на tableItem
            <TableItem
              // {...users} Деструкторирано го подаваме ,or
              key={user._id}
              id={user._id}
              createdAt={user.createdAt}
              email={user.email}
              firstName={user.firstName}
              lastName={user.lastName}
              phoneNumber={user.phoneNumber}
              imageUrl={user.imageUrl}
              onDetails={userDetailHandler}
              onDelete={deleteClick}
              onEdit={editHandler}
            />
          ))}
        </tbody>
      </table>
      <button className="btn-add btn" onClick={createUserClickHandler}>
        Add new user
      </button>
    </div>
  );
};
export default Table;
