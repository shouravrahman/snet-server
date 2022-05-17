import mongoose from 'mongoose'

const connectDb = () => {
	mongoose.connect(
		process.env.DATABASE_URL,
		{
			useUnifiedTopology: true,
			useNewUrlParser: true,
		},
		(err) => {
			if (err) throw err
			console.log('db connected')
		}
	)
}

export default connectDb
