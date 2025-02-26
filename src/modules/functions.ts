


const url = `http://localhost:3030/books`;
export async function getData():Promise<any> {
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    if (data) {
      console.log("Books array:", data);
    } else {
      console.log("Books property is undefined or missing.");
    }
    return data
  }
  

  export async function changeReadStatus(ID:number, readStat:boolean):Promise<any>{
    const specUrl = `${url}/${ID}/readstatus`;
    const body = {
        read: readStat
    }
    const options = {
        method: 'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify(body)   
    }
    try{
        const res = await fetch(specUrl, options);
        const data = await res.json();
        console.log(data)
    } catch(e){
        console.log('Error updating readstatus', e)
    }
  }

  export async function changeReviewStatus(id:number, reviewStat:string):Promise<any>{
    const specUrl = `${url}/${id}/reviewstatus`;
    const body = {
        review: `${reviewStat}`
    }
    const options = {
        method: 'PATCH',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    try{
        const res = await fetch(specUrl, options);
        const data = await res.json();
    }catch(e){
        console.log('Error updating status:', e)
    }
  }




  export async function writeBook(title: string, writer: string, read: boolean, callback:Function): Promise<any> {
    const body = {
      ID: Date.now(),
      title: title,
      writer: writer,
      read: read,
      review: ''
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    };
    try {
      const specUrl = `${url}/new`
      const res = await fetch(specUrl, options);
      const data = await res.json();
      console.log(data);
      callback()
    } catch (e) {
      console.log('Error writing book:', e);
    }
  }

  export async function deleteBook(id:number, callback:Function):Promise<any>{
    const specUrl = `${url}/${id}/delete`;
    const options = {
      method: 'DELETE',
      headers:{
        'Content-type': 'application/json'
      }
    }
    try{
      const res = await fetch(specUrl, options);
      const data = await res.json();
      console.log(data);
      callback()
    } catch(e){
      console.log('Error deleting book:', e)
    }
  }

