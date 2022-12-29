import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import CustomCheckbox from "../CustomCheckBox/CustomCheckbox";
import "./CustomTable.css";

const Table = ({
  data,
  columns,
  onChange,
  onPageChange,
  editRow,
  deleteRow,
  currentPage,
  pageSize,
  hasAction,
  handleSelectedRow,
  totalPages,
}) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== id)
      );
    } else {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
    }
  };

  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };
  useEffect(() => {
    handleSelectedRow(selectedRows);
  }, [selectedRows]);
  return (
    <div>
      <table className="customTable">
        <thead>
          <tr>
            <th>
              {/* <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={selectedRows.length === data.length}
              /> */}
              <CustomCheckbox
                handleChange={handleSelectAllChange}
                status={selectedRows.length === data.length}
              />
            </th>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
            {hasAction ? <th>Actions</th> : ""}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                {/* <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                /> */}

                <CustomCheckbox
                  handleChange={() => handleCheckboxChange(item.id)}
                  status={selectedRows.includes(item.id)}
                />
              </td>
              {columns.map((column) => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
              {hasAction ? (
                <td>
                  <CustomButton
                    type="button"
                    text="Edit"
                    handler={() => editRow(item.id)}
                    btnClass="btn btn-primary"
                  />

                  <CustomButton
                    type="button"
                    text="Delete"
                    handler={() => deleteRow(item.id)}
                    btnClass="btn btn-danger"
                  />
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-2 d-flex justify-content-center">
        <div>
          {" "}
          {currentPage} of {totalPages}
        </div>
        <CustomButton
          type="button"
          text="&#8249;"
          handler={() => onPageChange(currentPage === 1 ? 1 : currentPage - 1)}
          disabled={currentPage === 1}
          btnClass="btn btn-secondary mr-2 p-0"
          customHeight="30px"
          customWidth="30px"
        />{" "}
        <CustomButton
          type="button"
          text="&#8250;"
          handler={() => onPageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / pageSize)}
          btnClass="btn btn-secondary ml-2 p-0"
          customHeight="30px"
          customWidth="30px"
        />
      </div>
    </div>
  );
};

export default Table;

// import React from "react";

// import "./CustomTable.css";

// const CustomTable = ({
//   columns,
//   data,
//   onChange,
//   pageSize,
//   currentPage,
//   onPageChange,
// }) => {
//   const handleChange = (id, checked) => {
//     onChange(id, checked);
//   };
//   const handleCheckAll = (checked) => {
//     data.forEach((row) => {
//       onChange(row?.id, checked);
//     });
//   };
//   console.log("Data in Table", data);

//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const paginatedData = data?.slice(startIndex, endIndex);
//   return (
//     <div>
//       <table className="customTable">
//         <thead>
//           <tr>
//             <th>
//               <input
//                 type="checkbox"
//                 onChange={(e) => handleCheckAll(e.target.checked)}
//               />
//             </th>
//             {columns.map((column) => (
//               <th key={column.key}>{column.title}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedData.map((row) => (
//             <tr key={row.id}>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={row.checked}
//                   onChange={(e) => handleChange(row.id, e.target.checked)}
//                 />
//               </td>
//               {columns.map((column) => (
//                 <>

//                 <td key={column.key}>{row[column.key]}</td>
//                 <td>
//                 <button onClick={() => editRow(item.id)}>Edit</button>
//                 <button onClick={() => deleteRow(item.id)}>Delete</button>
//               </td>
//               </>

//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-5">
//         <CustomButton
//           type="button"
//           text="&#8249;"
//           handler={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           btnClass="btn btn-grey"
//         />{" "}
//         <span>{currentPage}</span>
//         <CustomButton
//           type="button"
//           text="&#8250;"
//           handler={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === Math.ceil(data.length / pageSize)}
//           btnClass="btn btn-secondary"
//         />
//       </div>
//     </div>
//   );
// };
// export default CustomTable;
