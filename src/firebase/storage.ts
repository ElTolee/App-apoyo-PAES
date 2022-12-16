import { storage } from "./firebaseConfig";
import { ref, listAll, getDownloadURL } from 'firebase/storage'

const gs = 'gs://apoyo-paes.appspot.com'

export const GetFilesUnit = async (ramo: string, unidad: number) => {

    const filesRef = ref(storage, `${gs}/${ramo}/${unidad}`);

    let filesList : any = [];

    const listaCompleta = await listAll(filesRef).then( async (r) => {
        
        const items = r.items;
        for (let item of items){
            let uri = await getDownloadURL(ref(storage, `${gs}/${item.fullPath}`));
            console.log(uri);
            filesList.push(uri);
        }

    } ).catch( (e) => {
        console.log(e);
    } );
    
    return await filesList;
}