import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { withStyles } from "@material-ui/styles";
import size from "../utils/sizeHelper";

const styles = {
  DataGrid: {
    minHeight: 500,
    width: "85%",
    marginTop: "2.5rem",
    [size("xs")]: {
      display: "none",
    },
  },
};

function DataGridTable({ provinsis, classes, indo }) {
  const columns = [
    {
      field: "provinsi",
      headerName: indo ? "Provinsi" : "Province",
      flex: 1.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "kasus",
      headerName: indo ? "Kasus" : "Cases",
      flex: 1,
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "meninggal",
      headerName: indo ? "Meninggal" : "Deaths",
      flex: 1,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "sembuh",
      headerName: indo ? "Sembuh" : "Recovered",
      type: "string",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "dirawat",
      headerName: indo ? "Dirawat" : "In Recovery",
      flex: 1,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
  ];

  const rows = React.useMemo(() => {
    console.log("Render");
    if (!provinsis) return null;
    return provinsis.filter((provinsi) => provinsi.provinsi !== "INDONESIA");
  }, [provinsis]);
  return (
    <div className={classes.DataGrid}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={rows.length}
        checkboxSelection={false}
        disableColumnMenu
        hideFooterPagination
        hideFooter
      />
    </div>
  );
}
export default withStyles(styles)(DataGridTable);
