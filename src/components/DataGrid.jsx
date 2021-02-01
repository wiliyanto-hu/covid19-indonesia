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
const columns = [
  {
    field: "provinsi",
    headerName: "Provinsi",
    flex: 1.5,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "kasus",
    headerName: "Kasus",
    flex: 1,
    type: "number",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "meninggal",
    headerName: "Meninggal",
    flex: 1,
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "sembuh",
    headerName: "Sembuh",
    type: "string",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "dirawat",
    headerName: "Dirawat",
    flex: 1,
    type: "number",
    align: "center",
    headerAlign: "center",
  },
];

function DataGridTable({ provinsis, classes }) {
  const rows = React.useMemo(() => {
    if (!provinsis) return null;
    return provinsis.filter((provinsi) => provinsi.provinsi !== "INDONESIA");
  });
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
