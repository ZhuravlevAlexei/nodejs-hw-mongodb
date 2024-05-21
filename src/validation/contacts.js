import Joi from 'joi';

//create
//{
// name - обов’язково
// phoneNumber - обов’язково
// email - не обовʼязково
// isFavourite - не обовʼязково
// contactType - не обовʼязково
//}
export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().min(3).max(20).required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});

//update
//{
// name - не обовʼязково
// phoneNumber - не обовʼязково
// email - не обовʼязково
// isFavourite - не обовʼязково
// contactType - не обовʼязково
//}
export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
