export default function handleDeletion(
answer:{
  first_name: string,
  last_name: string,
  email: string,
  betreff: string,
  message: string,
},
  emailValidated:{value:string},
  messageCharCount:{value:string},
  formSubmitted:{value:string}
):{
  first_name: string,
  last_name: string,
  email: string,
  betreff: string,
  message: string,
} {
  (answer.first_name = ''),
    (answer.last_name = ''),
    (answer.email = ''),
    (answer.betreff = ''),
    (answer.message = ''),
    (emailValidated.value = 'notCheckedYet');
  messageCharCount.value = 'notYetChecked';
  formSubmitted.value = 'waitingForDeletion';
  return answer;
}
