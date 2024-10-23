import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';

export default function CheckboxListSecondary() {
    const [users, setUsers] = useState([]);

    const imageUrls = [
        "https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg",
        "https://i.pinimg.com/enabled_lo/564x/c2/af/8a/c2af8a512a6838bd82ee01bcbedc49dc.jpg",
        "https://i.pinimg.com/enabled_lo/736x/4f/62/d2/4f62d2bc39cb6092fe4dedb978c285c5.jpg",
        "https://i.pinimg.com/enabled_lo/564x/6b/79/9c/6b799c0b4833ef0f9cea9d1f415e5061.jpg",
        "https://i.pinimg.com/736x/a1/e0/07/a1e0079cef2bdcb59eeeb436bf80a9ec.jpg",
        "https://i.pinimg.com/736x/17/c3/57/17c357695e7b265dc9f71f0f2a717f39.jpg",
        "https://i.pinimg.com/enabled_lo/564x/36/2c/42/362c42666201cdbff2ceb6aca43cfa11.jpg",
        "https://i.pinimg.com/736x/fe/ef/92/feef926836fbc7130733bf83f74ac26f.jpg",
        "https://i.pinimg.com/enabled_lo/564x/2a/2e/75/2a2e75942ce0f06fa4943bf4f7af99ae.jpg",
        "https://i.pinimg.com/enabled_lo/736x/97/97/00/979700f294e6fff8a5ec705764541731.jpg",
        "https://i.pinimg.com/enabled_lo/736x/8d/43/61/8d4361295e48bf1abdf82afbe3908b84.jpg",
        "https://i.pinimg.com/enabled_lo/564x/a5/e2/55/a5e255b0fe8d64fd9178b912069c13c4.jpg",
        "https://i.pinimg.com/enabled_lo/564x/0c/32/97/0c3297028aec0e778bdcf94fa8728108.jpg",
        "https://i.pinimg.com/enabled_lo/564x/48/7a/54/487a543fc9893bac50158e3a60951968.jpg",

    ];

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching User Data:", error);
            });
    }, []);

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.length == 0
                ? "Loading....."
                :
                users.map((user, index) => {
                    const labelId = `checkbox-list-secondary-label-${user.id}`;
                    return (
                        <ListItem key={user.id} disablePadding>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${user.username}`}
                                        // Cycle through the imageUrls array using index % imageUrls.length
                                        src={imageUrls[index % imageUrls.length]}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={user.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
        </List>
    );
}
