import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button, Input, TextField
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import {useState} from "react";
import {DatePicker} from "@mui/lab";

function EditProfileTab() {

    const [isEditing, setIsEditing] = useState(false);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Personal Details
              </Typography>
              <Typography variant="subtitle2">
                Manage informations related to your personal details
              </Typography>
            </Box>
            <Button variant="text" color={isEditing?'success':'primary'} startIcon={isEditing ? <DoneTwoToneIcon /> : <EditTwoToneIcon />} onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Update' : 'Edit'}
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Name:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  {isEditing ? (
                      <TextField
                          defaultValue="Craig Donin"
                          label="Name"
                          style={{ marginBottom: 30,marginTop: -8 }}
                      >
                      </TextField>

                  ) : (
                      <Text color="black">
                        <b>Craig Donin</b>
                      </Text>
                  )}
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Date of birth:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  {isEditing ? (
                      <DatePicker
                          required
                          label="DOB"
                          value='15 March 1977'
                          onChange={(newValue) => {

                          }}
                          renderInput={(params) => <TextField {...params} style={{ marginBottom: 30,marginTop: -8 }}/>}
                      />

                  ) : (
                      <Text color="black">
                        <b>15 March 1977</b>
                      </Text>
                  )}
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Address:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    {isEditing ? (
                        <TextField
                            defaultValue="1749 High Meadow Lane, SEQUOIA NATIONAL PARK, California,93262"
                            label="Name"
                            style={{ marginBottom: 30,marginTop: -8 }}
                        >
                        </TextField>

                    ) : (
                        <Text color="black">
                          1749 High Meadow Lane, SEQUOIA NATIONAL PARK, California,
                          93262
                        </Text>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                Account Settings
              </Typography>
              <Typography variant="subtitle2">
                Manage details related to your account
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Language:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>English (US)</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Timezone:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>GMT +2</b>
                  </Text>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Account status:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Label color="success">
                    <DoneTwoToneIcon fontSize="small" />
                    <b>Active</b>
                  </Label>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditProfileTab;
