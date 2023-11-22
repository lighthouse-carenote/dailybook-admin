import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

interface MenuListProps {
  data: { path: string; label: string }[] | null;
  menu: string;
}
const MenuList = ({ data, menu }: MenuListProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "light",
            primary: { main: "rgb(102, 157, 246)" },
          },
        })}
      >
        <Paper elevation={0}>
          <FireNav component="nav" disablePadding>
            <Box
              sx={{
                bgcolor: open ? "rgba(0, 0, 0, 0.02)" : null,
                pb: 0,
                width: 300,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => (data ? setOpen(!open) : null)}
                sx={{
                  "& svg": { opacity: data ? 1 : 0 },
                }}
              >
                <ListItemText
                  primary={menu}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "bold",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {open &&
                data &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 48, color: "rgba(0,0,0)" }}
                    onClick={() => navigate(item.path)}
                  >
                    <ListItemText
                      sx={{
                        marginLeft: 1.5,
                      }}
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
};

export default MenuList;
