import React from "react";
import "../../css/web/btn-notes.css";

const BtnNotes = () => {
    return (
        <div className="box">
            <strong className="text-lg font-bold text-white">{note.title}</strong>: <p className='text-white'>{note.content}{' '}</p>
            <div className="rectangle" />
        </div>
    );
};

export { BtnNotes };