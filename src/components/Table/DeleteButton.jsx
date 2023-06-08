import React from "react";
import tw from "tailwind-styled-components";
import Delete from "../../assets/icons/Delete.png";

const Wrapper = tw.div`
    mt-2.5`;

const DeleteButton = () => {
  return (
    <td>
      <Wrapper>
        <button className="border outline-none">
          <img src={Delete} alt="option" className="w-[22px] h-[22px]" />
        </button>
      </Wrapper>
    </td>
  );
};

export default DeleteButton;
