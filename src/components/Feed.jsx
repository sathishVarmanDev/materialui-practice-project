import { ExpandMore, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import post from "../assets/post.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Post from './Post';

export default function Feed() {
  return (
    <Box flex={4} sx={{
      padding: 2,
    }}>
      <Post />
    </Box>
  )
}
