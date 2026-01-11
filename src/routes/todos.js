import { Router } from "express"

const router = Router()

const todos = [
	{
		id: 1,
		title: "Todo #1",
	},
	{
		id: 2,
		title: "Todo #2",
	},
	{
		id: 3,
		title: "Todo #3",
	},
	{
		id: 4,
		title: "Todo #4",
	},
]

router.get( "/", ( req, res ) => {

	res.render( "todos", { todos } )
} )

router.get( "/:id", ( req, res ) => {

	const id = req.params.id - 0

	const todo = findTodo( id )

	if ( todo === null ) {

		res.render( "error404" )

		return
	}

	res.render( "todo", { todo } )
} )

function findTodo( id ) {

	for ( const todo of todos ) {

		if ( todo.id === id ) {

			return todo
		}
	}

	return null
}

export default router
