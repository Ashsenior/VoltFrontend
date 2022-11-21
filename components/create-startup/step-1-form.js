import { Button, Card, Grid, TextField } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import { steponevalidationSchema } from '../../utils/validations';
import CustomizedInputField from '../inputs/input-field';
import CustomizedSelectField from '../inputs/select-field';
import DatePickerCustom from '../inputs/date-picker';
import { select_founder, select_registered, select_role } from '../../utils/selectData';
import DarkButton from '../buttons/primaryButton';

const StepOneForm = () => {

    const formik = useFormik({
        initialValues: {
          name: '',
          market:'',
          founded:'',
          founder:'',
          registered:'',
          role:'',
        },
        validationSchema: steponevalidationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <>
    <Card elevation={4} sx={{p:4}}>
    <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} mb={2} alignItems="center">
            <Grid item xs={12} sm={12} md={6} lg={6}>
        <CustomizedInputField
          id="name"
          name="name"
          label="Name*"
          value={formik.values.name}
          formik={formik}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{mb:2}}
        />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>

           <CustomizedInputField
          id="market"
          name="market"
          label="Market*"
          value={formik.values.market}
          formik={formik}
          error={formik.touched.market && Boolean(formik.errors.market)}
          helperText={formik.touched.market && formik.errors.market}
          sx={{mb:2}}
        />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
        <DatePickerCustom
          label="Date"
          fieldName="founded"
          defaultValue={formik.values.founded}
          formik={formik}
          helperText={
            formik.touched.founded && formik.errors.founded
          }
          error={
            formik.touched.founded &&
            Boolean(formik.errors.founded)
          }
        />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <CustomizedSelectField
            placeholder="Select"
            label="Is your startup registered?* "
            data={select_registered}
            onChange={formik.handleChange}
            id="registered"
            name="registered"
            value={formik.values.registered}
            helperText={
              formik.touched.registered && formik.errors.registered
            }
            error={
              formik.touched.registered &&
              Boolean(formik.errors.registered)
            }
          />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CustomizedSelectField
            placeholder="Select"
            label="Are you a founder?* "
            data={select_founder}
            onChange={formik.handleChange}
            id="founder"
            name="founder"
            value={formik.values.founder}
            helperText={
              formik.touched.founder && formik.errors.founder
            }
            error={
              formik.touched.founder &&
              Boolean(formik.errors.founder)
            }
          />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CustomizedSelectField
            placeholder="Select"
            label="Role* "
            data={select_role}
            onChange={formik.handleChange}
            id="role"
            name="role"
            value={formik.values.role}
            helperText={
              formik.touched.role && formik.errors.role
            }
            error={
              formik.touched.role &&
              Boolean(formik.errors.role)
            }
          />
          </Grid>
        </Grid>

        
       <DarkButton text={'Submit'} variant="contained"/>
        
      </form>
    </Card>
    </>
  )
}

export default StepOneForm