import { inBody } from '@utilities/constants';
import { Schema }  from 'express-validator';

/**
 * Change the [sampleFieldName] to the property you are using.
 * Change the Field Name to the name of the property you are using.
 * In Body just tells that the schema be used in the Body section of the request.
 */

export const SampleSchema: Schema = {
  sampleFieldName: {
    ...inBody,
    isLength: {
      errorMessage: 'Field Name should be not less than 1 and not greater than 50 characters',
      options: {
        min: 1,
        max: 50,
      }
    }
  }
};