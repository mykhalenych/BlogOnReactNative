import {DB} from './db'

export async function onLoad(){
  try{
    await DB.init()
  }
  catch(err){
    console.log(err)
  }
}