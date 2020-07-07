import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CommuteIcon from '@material-ui/icons/Commute';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <CommuteIcon />
            </ListItemIcon>
            <ListItemText primary="Travel" />
        </ListItem>
    </div>
);