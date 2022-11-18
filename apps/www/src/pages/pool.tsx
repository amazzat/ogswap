import {
  GroupBox,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "react95";

export default function Pool() {
  return (
    <GroupBox label="Available liquidity pools">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Volume</TableHeadCell>
            <TableHeadCell>Level</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell>Bulbasaur</TableDataCell>
            <TableDataCell>64</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell>Charizard</TableDataCell>
            <TableDataCell>209</TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </GroupBox>
  );
}
