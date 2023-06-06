import { Configuration, OpenAIApi } from "openai";

const api= import.meta.env.VITE_API
const org = import.meta.env.VITE_ORG
const config =new Configuration({organization:org, apiKey:api});
const openai= new OpenAIApi(config);
import { useState } from "react";
delete config.baseOptions.headers['User-Agent'];

export const runPrompt = async({setOutput,setLoading,genre,length,characters})=>{
    setOutput(''); //gets rid of any existing text in text srea from previous run
    setLoading(true); //starts loading spinner
    const prompt = `write me a ${length} word ${genre} story with  ${characters} characters`;
   
    const response = await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
       messages:[{'role':'user','content':prompt}]
    }).then(response=>{setOutput(response.data.choices[0].message.content)}).catch(error=>(console.log(error)));
    setLoading(false);

    ;
}