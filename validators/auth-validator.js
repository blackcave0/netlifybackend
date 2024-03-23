const { z } = require('zod');
//:: ==~==~==~ LOGIN VALIDATOR ~==~==~== :://
const loginSchema = z.object ({
  email: z
    .string({ required_erro: 'Email is required' })
    .trim()
  .min(10, { message: 'Invalid email address' }),

  password: z
    .string({ required_erro: 'Password is required' })
    .trim()
  .min(4, { message: 'Password must be 4 char' }),
})

//:: ==~==~==~ REGISTER VALIDATOR ~==~==~== :://
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_erro: 'Name is required' })
    .trim()
  .min(4, { message: 'Name atleast 4 char' }),
  
  phone: z
    .string({ required_erro: 'Phone is required' })
    .trim()
  .min(10, { message: 'Phone atleast 10 digit' }),
  
});

module.exports = {signupSchema, loginSchema};