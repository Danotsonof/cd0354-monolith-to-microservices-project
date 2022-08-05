// export const config = {
//   'username': "postgres",
//   'password': "postgres",
//   'database': "postgres",
//   'host': "database.cu0jgybfpsyb.us-west-2.rds.amazonaws.com",
//   'dialect': 'postgres',
//   'aws_region': "us-west-2",
//   'aws_profile': "default",
//   'aws_media_bucket': "project-211301739156-prod",
//   'url': "http://localhost:8100",
//   'jwt': {
//     'secret': "testing",
//   },
// };
export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};