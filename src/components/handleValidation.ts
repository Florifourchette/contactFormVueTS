export default function handleValidation(attribute:string, value:string, response:{value:string}):string {

  if (attribute === 'email') {
    const validRegex: RegExp =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      

    response.value =
      value.match(validRegex) === null
        ? 'notValidated'
        : 'validated';
  }

  if (attribute === 'message') {
    response.value =
      value.toString().length > 5 ? 'notValidated' : 'validated';
  }

  return response.value;
}
