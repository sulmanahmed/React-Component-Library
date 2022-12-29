import React, { useState } from "react";
import CustomButton from "../../CommonComponents/CustomButton/CustomButton";
import PopupModal from "../../CommonComponents/PopupModal/PopupModal";
import TestComponent from "./TestComponent";
import { styles } from "../../CommonComponents/Styles/Styles";
import CustomTable from "../../CommonComponents/CustomTable/CustomTable";
import { columns, data } from "../../CommonComponents/Constants/Constants";

function TestWrapper() {
  const [openModal, setOpenModal] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState(data);
  const [selectedID, setSelectedId] = useState("");
  const [selectedChecked, setSelectedCheck] = useState(false);


  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     name: 'John Smith',
  //     email: 'john@example.com',
  //     phone: '555-555-5555',
  //     selected: false
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Doe',
  //     email: 'jane@example.com',
  //     phone: '444-444-4444',
  //     selected: false
  //   }
  // ]);

  const [currentPage, setCurrentPage] = useState(1);

  // const columns = [
  //   { key: 'name', label: 'Name' },
  //   { key: 'email', label: 'Email' },
  //   { key: 'phone', label: 'Phone' }
  // ];

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleSave = () => {
  };

  // const handleChange = (data) => {
  //   console.log("handleChange", data);
  // };

  const HandleShowTable = () => {
    setShowTable(!showTable);
  };

  const handleChange = (id, field, value) => {
    setTableData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const editRow = id => {
    // open the edit form for the item with the given id
    console.log(`Editing item with id ${id}`);
  };

  const deleteRow = id => {
    // delete the item with the given id
    setTableData(prevData => prevData.filter(item => item.id !== id));
  };

  const handleSelected = (selectedData) =>{


    console.log("selected Data",selectedData)
  }


  return (
    <div>
      <h2 style={styles.Header}>Welcome To Generic Components</h2>
      <CustomButton
        btnClass="btn btn-primary"
        text="openPopup"
        handler={handleOpen}
      />
      <CustomButton
        btnClass="btn btn-primary"
        text="Show Table"
        handler={HandleShowTable}
      />
      {openModal ? (
        <PopupModal
          handleClose={handleCancel}
          title="Create Profile"
          modalClass=""
          show={openModal}
          handleSave={handleSave}
        >
          <TestComponent handleChange={handleChange} />
        </PopupModal>
      ) : (
        ""
      )}

      {showTable ? (
        <CustomTable
          // columns={columns}
          // data={tableData}
          // onChange={handleChanged}
          // pageSize={10}
          // currentPage={1}
          // onPageChange={handlePageChange}
          data={tableData}
          columns={columns}
          onChange={handleChange}
          onPageChange={handlePageChange}
          editRow={editRow}
          deleteRow={deleteRow}
          pageSize={1}
          currentPage={currentPage}
          hasAction = {true}
          handleSelectedRow = {handleSelected}
          totalPages= {100}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default TestWrapper;
