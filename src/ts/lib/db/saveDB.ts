import Joi from "joi";
import { PouchDBBaseComponent } from "./db";

// /* DB1 */
// const db1ValidateData = (data: JSON) => {
//   const schema = Joi.object({
//     _id: Joi.string().required(),
//     name: Joi.string().required(),
//     age: Joi.number().required(),
//   });

//   return schema.validate(data);
// };

// export const writeDB1 = (data: JSON) =>{
//   const { error } = db1ValidateData(data);

//   if (error) {
//     console.log(error.details[0].message);
//     return;
//   }
//   const db = new PouchDBBaseComponent()
//   db.writeData("db1", data)
// }

/* clipboardSave */
export const writeClipboardSave = async (id: string, data: string) => {
  const chatNameElement = document.querySelector('.flex.py-3.bg-gray-800') as HTMLElement || "";
  const dataKeyValue: string = chatNameElement.innerText + id;
  console.log("Add " + dataKeyValue);

  const newData = `
  {
    "_id":"${dataKeyValue}",
    "button-id":"${id}",
    "chat-name":"${chatNameElement.innerText || ""}",
    "answer-content":"${data.replace(/\n/g, '\\n')}",
    "update-at":"${new Date()}"
  }
  `

  const db = new PouchDBBaseComponent();
  db.writeData("clipboardSave", JSON.parse(newData));
};
