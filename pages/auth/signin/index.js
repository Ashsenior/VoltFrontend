import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider, Button, TextField, MenuItem, Avatar
} from '@mui/material';
import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from 'src/components/Footer';
import {DatePicker} from "@mui/lab";
import Router from "next/router";


const genders = [
    {
        value: 'Male',
        label: '♂ Male'
    },
    {
        value: 'Female',
        label: '♀ Female'
    },
    {
        value: 'Other',
        label: '⚢ / ⚣ Other'
    }
];
const roles = [
    {
        value: 'Tech',
        label: 'Tech'
    },
    {
        value: 'Sales',
        label: 'Sales'
    },
    {
        value: 'Marketing',
        label: 'Marketing'
    },
    {
        value: 'Legal & Admin',
        label: 'Legal & Admin'
    },
    {
        value: 'Operations',
        label: 'Operations'
    }
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

function TabsDemo() {
    const [value, setValue] = useState(0);
    const [gender, setGender] = useState('Male');
    const [role, setRole] = useState('Tech');

    const genderhandleChange = (event) => {
        setGender(event.target.value);
    };
    const rolehandleChange = (event) => {
        setRole(event.target.value);
    };

    return (
            <Container maxWidth="lg"  >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    marginTop={4}
                    marginBottom={4}
                >
                    <Grid item xs={13}>
                        <Card >
                            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}  height={"7vh"}>
                                <CardHeader title="Basic Info" />
                                <Tabs
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    textColor="primary"
                                    indicatorColor="primary"
                                    value={value}
                                    aria-label="basic tabs example"
                                >
                                    <Tab label="1" {...a11yProps(0)} />
                                    <Tab label="2" {...a11yProps(1)} />
                                    <Tab label="3" {...a11yProps(2)} />
                                    <Tab label="4" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <Divider />
                            <CardContent >
                                <Box sx={{ width: '100%' }} textAlign={'center'} minHeight={"50vh"}>
                                    <TabPanel value={value} index={0}>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' }
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            textAlign={'center'}
                                            display={'flex'}
                                            flexDirection={'column'}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            minHeight={"50vh"}
                                        >
                                            <div>
                                                <TextField
                                                    required
                                                    id="outlined-search"
                                                    label="first name"
                                                    type="search"
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-search"
                                                    label="last name"
                                                    type="search"
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-search"
                                                    label="email"
                                                    type="search"
                                                />

                                            </div>
                                            <div>
                                                <TextField
                                                    required
                                                    id="outlined-search"
                                                    label="phone number"
                                                    type="search"
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-search"
                                                    label="college name"
                                                    type="search"
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-search"
                                                    label="course/major"
                                                    type="search"
                                                />
                                            </div>
                                            <div>
                                                <DatePicker
                                                    required
                                                    label="year of graduation"
                                                    value={value}
                                                    onChange={(newValue) => {

                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                                <DatePicker
                                                    required
                                                    label="DOB"
                                                    value={value}
                                                    onChange={(newValue) => {

                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    select
                                                    label="Gender"
                                                    value={gender}
                                                    onChange={genderhandleChange}
                                                >
                                                    {genders.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                <TextField
                                                    select
                                                    label="Role"
                                                    value={role}
                                                    onChange={rolehandleChange}
                                                >
                                                    {roles.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </div>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '100%' }
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            textAlign={'center'}
                                            display={'flex'}
                                            flexDirection={'column'}
                                            alignItems={'center'}
                                            justifyContent={'space-between'}
                                            minHeight={"30vh"}
                                        >

                                                    <Grid item paddingBottom={4}>
                                                        <Typography variant="h3" component="h3" gutterBottom>
                                                            Explain Your Idea💡 In Brief
                                                        </Typography>
                                                        <Typography variant="subtitle2">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim esse illo nemo. Aut deserunt !
                                                        </Typography>
                                                    </Grid>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                minRows={15}
                                                defaultValue="Default Value"
                                            />
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '100%' }
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            textAlign={'center'}
                                            display={'flex'}
                                            flexDirection={'column'}
                                            alignItems={'start'}
                                            justifyContent={'space-between'}
                                            minHeight={"30vh"}
                                        >

                                            <Grid item paddingBottom={2} marginTop={2}>
                                                <Typography variant="h4" component="h3" gutterBottom>
                                                   2. Problem Area of the customer you are addressing
                                                </Typography>
                                            </Grid>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                minRows={5}
                                                defaultValue="Default Value"
                                            />
                                            <Grid item paddingBottom={2} marginTop={2}>
                                                <Typography variant="h4" component="h3" gutterBottom>
                                                    3.	Who are the current players who are partly or wholly solving the current problem?
                                                </Typography>
                                            </Grid>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                minRows={5}
                                                defaultValue="Default Value"
                                            />
                                            <Grid item paddingBottom={2} marginTop={2}>
                                                <Typography variant="h4" component="h3" gutterBottom>
                                                    4.	How are you different from them? What is your competitive advantage?
                                                </Typography>
                                            </Grid>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                minRows={5}
                                                defaultValue="Default Value"
                                            />
                                        </Box>
                                    </TabPanel>
                                    <TabPanel value={value} index={3}>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '100%' }
                                            }}
                                            noValidate
                                            autoComplete="off"
                                            textAlign={'center'}
                                            display={'flex'}
                                            flexDirection={'column'}
                                            alignItems={'start'}
                                            justifyContent={'space-between'}
                                            minHeight={"30vh"}
                                        >

                                            <Grid item paddingBottom={2} marginTop={2}>
                                                <Typography variant="h4" component="h3" gutterBottom>
                                                    5.	Who are the primary end customers whom you are targeting?
                                                </Typography>
                                            </Grid>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                minRows={3}
                                                defaultValue="Default Value"
                                            />
                                            <Grid item paddingBottom={2} marginTop={2}>
                                                <Typography variant="h4" component="h3" gutterBottom>
                                                    6.	Are they the ones who would be revenue generators for your product or service?
                                                </Typography>
                                            </Grid>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                minRows={3}
                                                defaultValue="Default Value"
                                            />
                                            <Grid item paddingBottom={2} marginTop={2}>
                                                <Typography variant="h4" component="h3" gutterBottom>
                                                    7.	If the answer to the above question is NO, then who are the people who would enable you to generate revenue?
                                                </Typography>
                                            </Grid>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                minRows={3}
                                                defaultValue="Default Value"
                                            />
                                            <Grid item paddingBottom={2} marginTop={2}>
                                                <Typography variant="h4" component="h3" gutterBottom>
                                                    8.	What stage is your product/service at ?
                                                </Typography>
                                            </Grid>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Multiline"
                                                multiline
                                                minRows={3}
                                                defaultValue="Default Value"
                                            />
                                        </Box>
                                    </TabPanel>
                                    <Box display={"flex"} justifyContent={"space-between"}>
                                        <Button
                                            sx={{ margin: 1 }} variant="contained"
                                            onClick={() => {
                                                if(value === 0) {
                                                    setValue(0);
                                                }else {
                                                    setValue(value -1);
                                                }
                                            }}>
                                            Previous
                                        </Button>
                                        <Button
                                            sx={{ margin: 1 }}
                                            variant="contained"
                                            color={value===3?"success":"secondary"}
                                            onClick={() => {
                                                if(value === 3) {
                                                    Router.push("/dashboards");
                                                }else {
                                                    setValue(value +1);
                                                }
                                            }}>
                                            {value === 3 ? 'Submit' : "Next"}
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Footer />
            </Container>
    );
}

export default TabsDemo;
