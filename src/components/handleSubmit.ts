

export default function handleSubmit(
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
):void {
  if (
    (answer.first_name !== '' && answer.last_name !== '',
    answer.email !== '' &&
      answer.betreff !== '' &&
      answer.message !== '' &&
      emailValidated.value === 'validated' &&
      messageCharCount.value === 'validated')
  ) {
    formSubmitted.value = 'submitted';
    console.log(answer);
  } else {
    formSubmitted.value = 'notSubmitted';
  }
}
