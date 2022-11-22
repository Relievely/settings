import { updateNamedata } from "../adapter/SQLiteAdapter"
export function changeName(req:any, res:any){
    var body = updateNamedata(req.query.username)
    res.send(body)

}