import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
	{
		metaTitle: {
			type: String,
		},
		metaDescription: {
			type: String,
		},
		title: {
			type: String,
		},

		slug: {
			type: String,
		},
		description: {
			type: String,
		},

		imageUrl: {
			type: String,
		},

		content: {
			type: String,
		},

		keywords: [String],

		author: String,
		date: {
			type: Date,
			default: Date.now()
		}

		
	},
	{
		timestamps: true,
	}
);
// console.log(mongoose.models)
const Blog = mongoose.models?.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
