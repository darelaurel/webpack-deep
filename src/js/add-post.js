import {ParseData} from './parse-datas';

export const addPost=async function(postData)
{
    let parseData=new ParseData();
    if(parseData.parseAll)
    {
        let post= await fetch("https://jsonplaceholder.typicode.com/users",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        return await post.json()
    }
    else
    {
        return;
    }
}
