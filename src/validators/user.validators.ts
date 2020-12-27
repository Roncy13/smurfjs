import { inBody } from '@utilities/constants';
import { Schema }  from 'express-validator';

/**
Change the [fieldName] to the property you are using.
Change the Field Name to the name of the property you are using.
In Body just tells that the schema be used in the Body section of the request.
*/

export const User: Schema = {
   [fieldName]: {
    ...inBody,
      errorMessage: 'Field Name should be not less than 5 and not greater than 225 characters',
      options: {
        min: 5,
        max: 225,
      }
    }
  },
};