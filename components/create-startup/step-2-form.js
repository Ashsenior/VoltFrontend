import { Card, Grid, InputLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { steptwovalidationSchema } from "../../utils/validations";
import DarkButton from "../buttons/primaryButton";
import CustomizedInputField from "../inputs/input-field";

const StepTwoForm = () => {
  const formik = useFormik({
    initialValues: {
      idea: "",
    },
    validationSchema: steptwovalidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Card elevation={4} sx={{ p: 4 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} mb={2} alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <InputLabel
                sx={{
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  // color: theme.palette.text.secondary,
                }}
                shrink
              >
                Explain your Idea
              </InputLabel>
              <TextField
                id="idea"
                name="idea"
                multiline
                fullWidth
                minRows={15}
                onChange={formik.handleChange}
                value={formik.values.idea}
                error={formik.touched.idea && Boolean(formik.errors.idea)}
                helperText={formik.touched.idea && formik.errors.idea}
                sx={{ mb: 2 }}
              />
            </Grid>
          </Grid>
          <DarkButton text={"Submit"} variant="contained" />
        </form>
      </Card>
    </div>
  );
};

export default StepTwoForm;
