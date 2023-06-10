import React from "react";
import tw from "tailwind-styled-components";
import PropTypes from "prop-types";
import DeleteIcon from "../../assets/icons/Delete.png";

const Wrapper = tw.div`
    mt-2.5`;

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Wrapper>
      <button className="border outline-none" onClick={handleDelete}>
        <img src={DeleteIcon} alt="Delete" className="w-[22px] h-[22px]" />
      </button>
    </Wrapper>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func,
};

export default DeleteButton;
