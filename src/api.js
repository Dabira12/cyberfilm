import { OutboxRounded } from "@mui/icons-material";
import { Configuration, OpenAIApi } from "openai";

const api= import.meta.env.VITE_API
const org = import.meta.env.VITE_ORG
const config =new Configuration({organization:org, apiKey:api});
const openai= new OpenAIApi(config);
import { useState } from "react";
import { useEffect } from "react";
delete config.baseOptions.headers['User-Agent'];


export const runPrompt = async({output,setOutput,setLoading,length,genre,characters})=>{
    setOutput(""); //gets rid of any existing text in text srea from previous run
    setLoading(true); //starts loading spinner
    const prompt = `write me a ${length} word ${genre} story with  ${characters} characters`;

    console.log(output);


    const response = await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
       messages:[{'role':'user','content':prompt}]
    }).then(response=>{setOutput(response.data.choices[0].message.content)}).catch(error=>(console.log(error)));

    //   const response = await openai.createChatCompletion({
    //     model:'gpt-3.5-turbo',
    //    messages:[{'role':'user','content':prompt}]
    // }).catch(error=>(console.log(error)));
    setLoading(false);
    
    // await getPromise(genre,length,characters,output);

    

    // storeData('title',genre,length,characters,output);

    ;
}

const getPromise = function(genre,length,characters,output) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let story= {title:'',genre: genre, length:length,character:characters,output:output};
            console.log(story);

            let story_serialized = JSON.stringify(story);

   
            localStorage.setItem('test',story_serialized);

            let test = localStorage.getItem('test');

            console.log(test);
            resolve();
        }, 10000);
    });
};
 function storeData ({tit, gen, leng,charac,out}){
    
    let story= {title:'',genre:'', length:'',character:'',output:''};
    console.log(gen);
    story.title = 'yes';
    story.genre = 'horro';
    story.length = leng;
    story.character = charac;
    story.output = out;

    



    let story_serialized = JSON.stringify(story);

    // story.title = title;
   localStorage.setItem('test',story_serialized);

   let test = localStorage.getItem('test');

//    console.log(test);

}

