import React from "react";
import MaterialTable from "material-table";

const TableList = (props) => {
  return (
    <div>
      <MaterialTable
        style={{
          padding: "30px",
          paddingBottom: 0,
          borderRadius: "30px",
          fontFamily: "Balsamiq Sans",
        }}
        options={{
          pageSize: 20,
        }}
        actions={[
          {
            icon: "trending_up",
            tooltip: "Visualize Price Graph",
            onClick: (event, rowData) => {
              props.selected_veg(rowData.name);
            },
          },
        ]}
        title="Today's Fruit and Vegetable Price"
        columns={[
          { title: "Name", field: "name" },
          { title: "Min Price (NRs.)", field: "min_price" },
          { title: "Average Price (NRs.)", field: "avg_price" },
          { title: "Max Price (NRs.)", field: "max_price" },
        ]}
        data={props.today_data}
      />
    </div>
  );
};

export default TableList;
