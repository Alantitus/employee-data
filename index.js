const jsonServer= require('json-server')
const CrudServer =jsonServer.create()
const middleware=jsonServer.defaults()
const route= jsonServer.router('db.json')
const PORT =3000 || process.env.PORT

CrudServer.use(middleware)
CrudServer.use(route)
CrudServer.listen(PORT,()=>{
    console.log(`Server started at port ${PORT} and waiting for client request`)
})