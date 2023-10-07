import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import userImg from "../assets/avatar.png"
import React, { useState } from 'react'
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

export default function Add() {

    let [open, setOpen] = useState(false)

    const handleModal = () => {
        return open ? setOpen(false) : setOpen(true) 
    }

    const UserBox = styled(Box)({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
    })

    return (
        <>
            <Tooltip title="Add" onClick={() => handleModal()} sx={{
                position: "fixed",
                marginLeft: {
                    xs: "calc(50% - 25px)",
                    md: "1rem",
                },
                bottom: "1rem",
            }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal sx={{
                // position: "absolute",
                // top: "50%",
                // left: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
                open={open}
                onClose={() => handleModal()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    backgroundColor: "background.default",
                    color: "text.primary",
                    borderRadius: "1rem",
                    width: ['90%', '50%'], // 100% on small screens, 50% on larger screens
                    height: ['50%', '50%'],
                    boxShadow: 24,
                    p: 4,
            }}>
                <Typography variant="h6" color={"grey"} textAlign={"center"} >
                    Hello
                    </Typography>
                    <UserBox>
                        <Avatar
                            src={userImg}
                            sx={{
                                width: 30,
                                height: 30,
                            }}
                        ></Avatar>
                        <Typography variant='span' fontWeight={500}>
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                        sx={{
                            width:"100%",
                        }}
                    />
                    <Stack
                        direction={"row"}
                        gap={1}
                        mt={2}
                        mb={3}
                    >
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup variant="contained" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{
                            width: "25%",
                        }}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    )
}
