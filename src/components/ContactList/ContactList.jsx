import { useDispatch, useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { deleteContact } from "../../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

import Loader from "../Loader/Loader";

import styles from "./ContactList.module.css";
import DeleteContactPopup from "../Modal/DeleteContactPopup";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState({ id: "", name: "" });

  const handleDeleteBtn = (item) => {
    setSelectedContact(item);
    setIsDeleteOpen(true);
  };

  const handleDeleteItem = (item) => {
    dispatch(deleteContact(item.id))
      .unwrap()
      .then(() => {
        toast.success(`Contact "${item.name}" was deleted`);
        handleClosePopup();
      });
  };

  const handleClosePopup = () => {
    setIsDeleteOpen(false);
    setSelectedContact({ id: "", name: "" });
  };

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      <ul className={styles.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            phone={number}
            handleDelete={() => handleDeleteBtn({ id, name })}
          />
        ))}
      </ul>
      <DeleteContactPopup
        open={isDeleteOpen}
        onClose={handleClosePopup}
        onDelete={handleDeleteItem}
        payload={selectedContact}
      />
    </>
  );
};

export default ContactList;
