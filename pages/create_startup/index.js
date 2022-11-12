import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider, Button, TextField, MenuItem
} from '@mui/material';
import { useState, useEffect } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from 'src/components/Footer';
import { DatePicker } from "@mui/lab";
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
const founderVal = [
    {
        value: '1',
        label: 'Yes'
    },
    {
        value: '0',
        label: 'No'
    },
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
import axiosInstance from "../../src/axiosAPi";

function TabsDemo() {
    const [value, setValue] = useState(0);
    const [role, setRole] = useState('Tech');
    const [founder, setFounder] = useState('0');
    const [registered, setRegistered] = useState('0');
    const [name, setname] = useState('0');
    const [market, setmarket] = useState('0');
    const [founded, setfounded] = useState('0');
    const [authenticated, setAuthenticated] = useState(false);

    const [idea, setidea] = useState('0');
    const [problemArea, setproblemArea] = useState('0');
    const [currentPlayers, setcurrentPlayers] = useState('0');
    const [difference, setdifference] = useState('0');
    const [customer, setcustomer] = useState('0');
    const [revenue1, setrevenue1] = useState('0');
    const [revenue2, setrevenue2] = useState('0');
    const [stage, setstage] = useState('0');
    const [message, setMessage] = useState("");

    const rolehandleChange = (event) => {
        setRole(event.target.value);
    };
    const founderhandleChange = (event) => {
        setFounder(event.target.value);
    };
    const registeredhandleChange = (event) => {
        setRegistered(event.target.value);
    };
    const handlename = (event) => { setname(event.target.value); };
    const handlemarket = (event) => { setmarket(event.target.value); };
    const handlefounded = (event) => { setfounded(event.target.value); };
    const handleidea = (event) => { setidea(event.target.value); };
    const handleproblemArea = (event) => { setproblemArea(event.target.value); };
    const handlecurrentPlayers = (event) => { setcurrentPlayers(event.target.value); };
    const handledifference = (event) => { setdifference(event.target.value); };
    const handlecustomer = (event) => { setcustomer(event.target.value); };
    const handlerevenue1 = (event) => { setrevenue1(event.target.value); };
    const handlerevenue2 = (event) => { setrevenue2(event.target.value); };
    const handlestage = (event) => { setstage(event.target.value); };

    useEffect(() => {
        var access_token = localStorage.getItem("access_token");
        var refresh_token = localStorage.getItem("refresh_token");
        if (access_token && refresh_token) {
            setAuthenticated(true);
        }
    }, [authenticated]);

    const handleSubmit = () => {
        if (true) {
            try {
                axiosInstance.post('/user/create-startup/', {
                    name: name,
                    market: market,
                    founded: founded,
                    idea: idea,
                    problemArea: problemArea,
                    currentPlayers: currentPlayers,
                    difference: difference,
                    customer: customer,
                    revenue1: revenue1,
                    revenue2: revenue2,
                    stage: stage,
                })
                    .then((response) => {
                        if (response.status === 200) {
                            console.log("done !");
                            Router.push({
                                pathname: "/home",
                                query: { "message": "Profile completed successfully!" }
                            })
                        }
                        else { setMessage("Some error occurred while completing your profile!"); }
                    });
            }
            catch (error) {
                throw error;
            }
        } else {
            setMessage("Fill the compulsory fields.")
        }
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
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} height={"7vh"}>
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
                                                label="Startup name"
                                                type="search"
                                                onChange={handlename}
                                            />
                                            <TextField
                                                required
                                                id="outlined-search"
                                                label="Market"
                                                type="search"
                                                onChange={handlemarket}
                                            />
                                            <DatePicker
                                                required
                                                label="Founded"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setfounded(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />

                                        </div>

                                        <div>
                                            <TextField
                                                select
                                                label="Are You the Founder ?"
                                                value={founder}
                                                onChange={founderhandleChange}
                                            >
                                                {founderVal.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            <TextField
                                                select
                                                disabled={founder === '0'}
                                                label="Is your startup registered?"
                                                value={registered}
                                                onChange={registeredhandleChange}
                                            >
                                                {founderVal.map((option) => (
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
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Invite your teamates"
                                            multiline
                                            style={{ width: "100%" }}
                                            minRows={8}
                                            placeholder="Write emails of your teamates with commas ex: something@somewhere.com, "
                                            onChange={handleidea}
                                        />
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
                                            onChange={handleidea}
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
                                            onChange={handleproblemArea}
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
                                            onChange={handlecurrentPlayers}
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
                                            onChange={handledifference}
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
                                            onChange={handlecustomer}
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
                                            onChange={handlerevenue1}
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
                                            onChange={handlerevenue2}
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
                                            onChange={handlestage}
                                            defaultValue="Default Value"
                                        />
                                    </Box>
                                </TabPanel>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                    <Button
                                        sx={{ margin: 1 }} variant="contained"
                                        onClick={() => {
                                            if (value === 0) {
                                                setValue(0);
                                            } else {
                                                setValue(value - 1);
                                            }
                                        }}>
                                        Previous
                                    </Button>
                                    <Button
                                        sx={{ margin: 1, bgcolor: "blue" }}
                                        variant="contained"
                                        color={value === 3 ? "success" : "secondary"}
                                        onClick={() => {
                                            if (value === 3) {
                                                Router.push("/dashboards");
                                            } else {
                                                setValue(value + 1);
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
