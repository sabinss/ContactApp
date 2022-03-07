import * as Yup from 'yup';

export const ContactFormValidation = Yup.object().shape({
  firstName: Yup.string().required('Please enter a firstname'),
  lastName: Yup.string().required('Please enter a lastname'),
  email: Yup.string().required('Please enter a email'),
  company: Yup.string().required('Please enter your company name'),
  phone: Yup.string().test(
    'len',
    'Must be exactly 10 characters',
    val => val.length === 10,
  ),
});
