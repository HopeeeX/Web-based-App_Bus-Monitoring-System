import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import AddButton from "../../components/Table/AddButton";
import SearchFieldAdmin from "../../components/Table/SearchFieldAdmin";
import Header from "../../components/Table/Header";
import Row from "../../components/Table/RowAdmin";
import AddUserModal from "../../components/Modals/AddUserModal";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase";

const Wrapper = tw.div`
  lg:ml-[220px] md:ml-[105px] sm:w-full
`;

const Container = tw.div`
  flex items-center justify-end gap-1 md:gap-2
`;

const TableWrapper = tw.div`
  h-screen p-5 md:pl-44 md:pr-8 lg:pl-16
`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow
`;

const ModalWrapper = tw.div`
  fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center
`;

const AdminMechanic = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        // Check if mechanics are already in local state (cached)
        if (rows.length > 0) {
          setLoading(false);
          return;
        }

        // Fetch mechanics from Firestore and update local state
        const mechanicsCollection = collection(firestore, "mechanics");
        const querySnapshot = await getDocs(mechanicsCollection);
        const fetchedMechanics = [];
        querySnapshot.forEach((doc) => {
          const mechanicData = { ...doc.data(), userId: doc.id };
          fetchedMechanics.push(mechanicData);
        });
        setRows(fetchedMechanics);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching mechanics:", error);
        setLoading(false);
      }
    };

    fetchMechanics();
  }, [rows]);

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <AddButton text="Add User" clickfunc={handleOpenModal} />
        {showModal && (
          <ModalWrapper>
            <AddUserModal onClose={handleCloseModal} />
          </ModalWrapper>
        )}
        <SearchFieldAdmin
          type="text"
          id="id"
          placeholder="Search Name"
          onChange={handleSearchChange}
        />
      </Container>
      <TableWrapper>
        <TableContainer>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="w-full">
              <Header
                text={[
                  "Name",
                  "User ID",
                  "Email Address",
                  "Mobile No.",
                  "License No.",
                  "",
                ]}
              />
              <tbody className="divide-y divide-gray-200">
                {filteredRows.map((row) => (
                  <Row
                    key={row.userId}
                    text={[
                      row.name,
                      row.userId,
                      row.email,
                      row.phone,
                      row.license,
                    ]}
                  />
                ))}
              </tbody>
            </table>
          )}
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminMechanic;
