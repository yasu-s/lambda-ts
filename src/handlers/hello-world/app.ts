import type { Context } from 'aws-lambda';

exports.lambdaHandler = async (event: unknown, context: Context) => {
  let response;
  try {
    console.log(`event: ${JSON.stringify(event)}, context: ${JSON.stringify(context)}`);
    // const ret = await axios(url);
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world ts',
        // location: ret.data.trim()
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
