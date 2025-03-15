
import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, task }) => {
    return (
        <>
            <div className=" bg-red-400" onClick={() => setIsOpen(false)} />
            <div className=" bg-red-400">
                <div className=" bg-red-400">
                    <div className=" bg-red-400">
                        <h5 className=" bg-red-400" >{`Title: ${task.title}\nDescription: ${task.description}`}</h5>
                    </div>
                    <button className=" bg-red-400" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className=" bg-red-400">
                        Are you sure you want to delete the item?
                    </div>
                    <div className=" bg-red-400">
                        <div className=" bg-red-400">
                            <button className=" bg-red-400" onClick={() => setIsOpen(false)}>
                                Delete
                            </button>
                            <button
                                className=" bg-red-400"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;