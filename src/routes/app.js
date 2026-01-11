import { Router } from "express"

const app = Router()

app.get( "/", ( req, res ) => {

	res.render( "index", { title: "Dashboard" } )
} )

export default app
