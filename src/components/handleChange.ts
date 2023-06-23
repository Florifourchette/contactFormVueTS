export default function handleChange(answer: {
  first_name: string,
  last_name: string,
  email: string,
  betreff: string,
  message: string,
}, name: string, text:string):{
  first_name: string,
  last_name: string,
  email: string,
  betreff: string,
  message: string,
} {
 return answer = { ...answer, [name]: text };
}
