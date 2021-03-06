import type { Context } from 'aws-lambda';
import * as axios from 'axios';
import { getMessage } from '@sample/libs/utils';

export const lambdaHandler = async (event: unknown, context: Context) => {
  try {
    console.log(`event: ${JSON.stringify(event)}, context: ${JSON.stringify(context)}`);

    const ret = await axios.default.get('http://checkip.amazonaws.com/');

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `hello world ts - ${getMessage()}`,
        location: ret.data.trim(),
      }),
    };
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
