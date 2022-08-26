import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";

export const CustomToolBar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport
        printOptions={{
          // disableToolbarButton: true,
          allColumns: true,
          print: true,
        }}
      />

      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
};
