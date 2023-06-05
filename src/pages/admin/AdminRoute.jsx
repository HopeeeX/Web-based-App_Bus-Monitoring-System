/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import AddButton from "../../components/Table/AddButton";
import SearchFieldAdmin from "../../components/Table/SearchFieldAdmin";
import Header from "../../components/Table/Header";
import Row from "../../components/Table/RowAdmin";
import AddRoute from "../../components/Modals/AddRoute";
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

const AdminRoute = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        // Check if routes are already in local state (cached)
        if (routes.length > 0) {
          setLoading(false);
          return;
        }

        // Fetch routes from Firestore and update local state
        const routesCollection = collection(firestore, "routes");
        const querySnapshot = await getDocs(routesCollection);
        const fetchedRoutes = [];
        querySnapshot.forEach((doc) => {
          const routeData = { ...doc.data(), id: doc.id };
          fetchedRoutes.push(routeData);
        });
        setRoutes(fetchedRoutes);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching routes:", error);
        setLoading(false);
      }
    };

    fetchRoutes();
  }, [routes]);

  const filteredRoutes = routes.filter((route) =>
    route.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <AddButton text="Add Route" clickfunc={handleOpenModal} />
        {showModal && (
          <ModalWrapper>
            <AddRoute onClose={handleCloseModal} />
          </ModalWrapper>
        )}
        <SearchFieldAdmin
          type="text"
          id="id"
          placeholder="Search Route Number"
          onChange={handleSearchChange}
        />
      </Container>
      <TableWrapper>
        <TableContainer>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : (
            <table className="w-full">
              <Header text={["Route Number", "Origin", "Destination", ""]} />
              <tbody className="divide-y divide-gray-200">
                {filteredRoutes.map((route) => (
                  <Row
                    key={route.id}
                    text={[route.number, route.origin, route.destination]}
                  />
                ))}{" "}
              </tbody>
            </table>
          )}
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminRoute;
