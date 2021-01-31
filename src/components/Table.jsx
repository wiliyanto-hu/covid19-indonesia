import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: "85%",
    margin: "1rem",
  },
});

export default function BasicTable({ provinsis }) {
  const classes = useStyles();

  if (!provinsis) return null;
  return (
    <section className={classes.table}>
      <TableContainer component={Paper}>
        <Table aria-label="Covid19 cases table">
          <TableHead>
            <TableRow>
              <TableCell>Province</TableCell>
              <TableCell align="center">Cases</TableCell>
              <TableCell align="center">In Recovery</TableCell>
              <TableCell align="center">Recovered</TableCell>
              <TableCell align="center">Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {provinsis.map((provinsi) => (
              <TableRow key={provinsi.provinsi}>
                <TableCell component="th" scope="row">
                  {provinsi.provinsi}
                </TableCell>
                <TableCell align="center">
                  {provinsi.kasus || provinsi.positif}
                </TableCell>
                <TableCell align="center">{provinsi.dirawat}</TableCell>
                <TableCell align="center">{provinsi.sembuh}</TableCell>
                <TableCell align="center">{provinsi.meninggal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
