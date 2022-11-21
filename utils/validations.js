import * as yup from 'yup';


export const steponevalidationSchema = yup.object({
    name: yup
      .string('Enter your email')
      .required('Email is required'),
      market: yup
      .string('Enter your Markrt')
      .required('Market is required'),
      founded: yup
      .string('Enter year founded')
      .required('A year is required'),
      founder: yup
      .string('Enter if youre a founder')
      .required('Field is required'),
      registered: yup
      .string('Select yes if registered else no!')
      .required('Registered is required'),
      role: yup
      .string('Enter your role')
      .required('Role is required'),
  });

  export const steptwovalidationSchema = yup.object({
      idea: yup
      .string('Enter your idea')
      .min('Idea should be of min 100 words')
      .required('Idea is required'),
     
  });