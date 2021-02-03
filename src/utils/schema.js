import * as Yup from 'yup';
import {
  URL_REGEX,
  INVALID_URL_MESSAGE,
  URL_FIELD_REQUIRED,
  DESCRIPTION_FIELD_REQUIRED,
} from './constants';

export const ResourceFormSchema = Yup.object().shape({
  url: Yup.string()
    .matches(new RegExp(URL_REGEX), INVALID_URL_MESSAGE)
    .required(URL_FIELD_REQUIRED),
  description: Yup.string().required(DESCRIPTION_FIELD_REQUIRED),
});
