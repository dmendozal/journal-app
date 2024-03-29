import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  console.log(title, body, date);
  const dispatch = useDispatch();

  const selectNote = () => {
    dispatch(setActiveNote({ title, body, id, date }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={selectNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={title} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
